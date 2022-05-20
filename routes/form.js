const { get, send } = require("express/lib/response");

const express = require ('express');
const router = express.Router();
const {getFrom, addFrom, deleteFrom} = require ('../controllers/form')


 
router
    .route('/')
    .get(getFrom)
    .post(addFrom);
router
    .route('/:id')
    .delete(deleteFrom);

module.exports = router;