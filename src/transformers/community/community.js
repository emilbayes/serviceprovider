const router = require('express').Router();
import profile from './profile';

export default () => {
  router.use('/profile', profile());
  return router;
};
