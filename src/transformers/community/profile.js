import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import getSingleProperty from './utils/getSingleProperty';
import {likeMap, followMap, flagMap, quarantineMap, usernameMap} from './maps';
import {getRelatedList} from './utils/relatedEndpointMethods';
import {getSpecification, getSchemaDefinition} from '../../swaggerFromSpec';
const swagger = getSpecification();

export const schemas = {
  profile: {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    deleted_epoch: 'deleted_epoch',
    username: 'name',
    modified_by: 'modified_by',
    email: 'attributes.email',
    displayName: 'attributes.displayName',
    description: 'attributes.description',
    phone: 'attributes.phone',
    birthday: 'attributes.birthday',
    fullName: 'attributes.fullName'
  }
};

/**
 * Returns group router.
 *
 * @returns {Object}
 */
export function profile() {
  const map = schemas.profile;
  const router = createCRUD('profile', null, Router(), map, getSchemaDefinition(swagger, 'Profile'));
  router.get('/:id/likes', getRelatedList('profile', 'like', likeMap, getSchemaDefinition(swagger, 'Like')));
  router.get('/:id/follows', getRelatedList('profile', 'follow', followMap, getSchemaDefinition(swagger, 'Follow')));
  router.get('/:id/flags', getRelatedList('profile', 'flag', flagMap, getSchemaDefinition(swagger, 'Flag')));
  router.get('/:id/quarantines', getRelatedList('profile', 'quarantine', quarantineMap, getSchemaDefinition(swagger, 'Quarantine')));

  router.get('/usernameExists/:username', getSingleProperty(['name'], 'profile', usernameMap, getSchemaDefinition(swagger, 'UsernameExists')));
  router.get('/:profile_id/isFollowingGroup/:group_id', getSingleProperty(['owner_id', 'entity_ref'], 'action', followMap, getSchemaDefinition(swagger, 'UserIsFollowingGroup')));

  return router;
}
