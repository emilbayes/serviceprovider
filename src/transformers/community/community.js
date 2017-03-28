import {Router} from 'express';
import request from 'request';
import profile from './profile';
import {group, post, comment, like} from './entities';
import caller from '../../provider/caller';

import {accessLogMiddleware, getContextMiddleware, requireAuthorized} from '../../app.middlewares';

function getCommunityClient(req, res, next) {
  const context = caller({}, req.context);
  const baseurl = context.get('services.communityservice') || 'http://localhost:3000/v1';
  const id = context.get('communityservice.id') || 1;
  req.communityReguest = (params) => {
    params.url = `${baseurl}/community/${id}/${params.path}`;
    delete params.path;
    return new Promise((resolve, reject) => {
      request(params, (error, response, data) => error ? reject(error) : resolve(data));
    });
  };
  return next();
}

/**
 * Router for all community/profile endpoints.
 *
 * @returns {*}
 */
export default () => {
  const router = Router();
  router.use(getContextMiddleware);
  router.use(getCommunityClient);
  router.use(requireAuthorized);
  // Profile
  router.use('/profile', profile());
  // Entities
  router.use('/group', group());
  router.use('/post', post());
  router.use('/comment', comment());
  // Actions
  router.use('/like', like());

  return router;
};
