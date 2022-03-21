const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { existClientById } = require('../helpers/db-validators');
const { clientGetAll, clientPost, clientPut, clientDelete, getStatistics, restoreStatus } = require('../controllers/client');
const { clientErrorMsg } = require('../utils/types');
// const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/statistics', getStatistics );

router.get('/', clientGetAll );

router.post('/', [
  check('name', clientErrorMsg.name).not().isEmpty(),
  check('surname', clientErrorMsg.surname).not().isEmpty(),
  check('birthdate', clientErrorMsg.birthdate_empty).not().isEmpty(),
  check('birthdate', clientErrorMsg.birthdate_invalid).isISO8601(),
  validateFields
], clientPost );

router.put('/:id', [
  check('id', clientErrorMsg.id_not_valid).isNumeric(),
  check('id').custom( existClientById ),
  check('name', clientErrorMsg.name).not().isEmpty(),
  check('surname', clientErrorMsg.surname).not().isEmpty(),
  check('birthdate', clientErrorMsg.birthdate_empty).not().isEmpty(),
  check('birthdate', clientErrorMsg.birthdate_invalid).isISO8601(),
  validateFields
], clientPut );

router.put('/restore/:id', [
  check('id', clientErrorMsg.id_not_valid).isNumeric(),
  check('id').custom( existClientById ),
  validateFields
], restoreStatus );

router.delete('/:id', [  
  check('id', clientErrorMsg.id_not_valid).isNumeric(),
  check('id').custom( existClientById ),
  validateFields
], clientDelete );

module.exports = router;
