/**
 * @file
 * User transformer.
 *
 * Wraps userstatus backend.
 */
import {pbkdf2} from 'crypto';
import {getIdFromIsil} from './utils/isil.utils';

/**
 * Maps loan item from backend response to serviceprovider api
 * @param {Object} loanItem
 * @returns {Object} response with mapped keys
 */
function loan(loanItem) {
  const result = {
    loanId: loanItem.loanId.$,
    dueDate: loanItem.dateDue.$,
    title: loanItem.title.$
  };

  if (loanItem.author) {
    result.creator = loanItem.author.$;
  }

  if (loanItem.bibliographicItemId) {
    result.materialId = loanItem.bibliographicItemId.$;
  }

  if (loanItem.bibliographicRecordId) {
    result.titleId = loanItem.bibliographicRecordId.$;
  }

  return result;
}

/**
 * Maps debt item from backend response to serviceprovider api
 * @param {Object} debtItem openuserstatus orders response
 * @returns {Object} response with mapped keys
 */
function debt(debtItem) {
  const result = {
    amount: debtItem.fiscalTransactionAmount.$,
    currency: debtItem.fiscalTransactionCurrency.$,
    date: debtItem.fiscalTransactionDate.$.split('T')[0],
    title: debtItem.title.$
  };

  if (debtItem.author) {
    result.creator = debtItem.author.$;
  }
  return result;
}

/**
 * Maps order item from backend response to serviceprovider api
 * @param {Object} orderItem openuserstatus orders response
 * @returns {Object} response with mapped keys
 */
function order(orderItem) {
  const result = {
    orderId: orderItem.orderId.$,
    orderType: orderItem.orderType.$,
    status: orderItem.orderStatus.$,
    pickUpAgency: orderItem.pickUpAgency.$
  };

  const orderFields = [
    'holdQueuePosition',
    'creator',
    'title',
    'orderDate',
    'pickUpExpiryDate',
    'pickUpId',
    'titleId'
  ];

  orderFields.forEach(key => {
    if (key === 'creator' && orderItem.author && orderItem.author.$) {
      result[key] = orderItem.author.$;
    } else if (
      key === 'titleId' &&
      orderItem.bibliographicRecordId &&
      orderItem.bibliographicRecordId.$
    ) {
      result[key] = orderItem.bibliographicRecordId.$;
    } else if (orderItem[key] && orderItem[key].$) {
      result[key] = orderItem[key].$;
    }
  });

  return result;
}

/**
 * Default transformer.
 * Wraps openuserstatus backend and returns user info
 *
 * @param {Object} request parameters from the user (no entries from this object is used)
 * @param {Object} context The context object fetched from smaug
 * @returns {Object|Promise} promise with result
 * @api public
 */
export default (request, context) => {
  if (!(context.get('user.id') && context.get('user.pin'))) {
    return Promise.resolve({
      statusCode: 403,
      error: 'not logged in'
    });
  }

  const userAgencyId = getIdFromIsil(context.get('user.agency', true));
  const params = {
    agencyId: userAgencyId,
    userId: context.get('user.id'),
    userPincode: context.get('user.pin'),
    'authentication.groupIdAut': context.get('netpunkt.group', true),
    'authentication.passwordAut': context.get('netpunkt.password', true),
    'authentication.userIdAut': context.get('netpunkt.user', true),
    action: 'getUserStatus',
    outputType: 'json'
  };

  const idPromise = new Promise((resolve, reject) =>
    pbkdf2(
      userAgencyId + ' ' + context.get('user.id'),
      context.get('user.salt'),
      100000,
      24,
      'sha512',
      (err, key) => (err ? reject(err) : resolve(key))
    )
  );

  return context.call('openuserstatus', params).then(body =>
    idPromise.then(id => {
      if (body.data.getUserStatusResponse.getUserStatusError) {
        return Promise.resolve({
          statusCode: 500,
          error: body.data.getUserStatusResponse.getUserStatusError.$
        });
      }

      const data = {
        id: id.toString('base64')
      };

      if (body.data.getUserStatusResponse.userName) {
        data.name = body.data.getUserStatusResponse.userName.$;
      }
      if (body.data.getUserStatusResponse.userAddress) {
        data.address = body.data.getUserStatusResponse.userAddress.$;
      }
      if (body.data.getUserStatusResponse.userPostalCode) {
        data.postalCode = body.data.getUserStatusResponse.userPostalCode.$;
      }
      if (body.data.getUserStatusResponse.userMail) {
        data.mail = body.data.getUserStatusResponse.userMail.$;
      }

      let loans = [];
      if (body.data.getUserStatusResponse.userStatus.loanedItems.loan) {
        loans = body.data.getUserStatusResponse.userStatus.loanedItems.loan;
      }
      data.loans = loans.map(loan);

      let orders = [];
      if (body.data.getUserStatusResponse.userStatus.orderedItems.order) {
        orders = body.data.getUserStatusResponse.userStatus.orderedItems.order;
      }
      data.orders = orders.map(order);

      let debts = [];
      if (body.data.getUserStatusResponse.userStatus.fiscalAccount) {
        debts =
          body.data.getUserStatusResponse.userStatus.fiscalAccount
            .fiscalTransaction || [];
      }
      data.debt = debts.map(debt);

      if (context.get('services.ddbcmsapi')) {
        data.ddbcmsapi = context.get('services.ddbcmsapi');
      }
      data.agency = userAgencyId;

      return Promise.resolve({
        statusCode: 200,
        data: data
      });
    })
  );
};
