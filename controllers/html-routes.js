const express = require('express');
const path = require('path')
const router = express.Router();


// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

//landing page get
router.get('/', (req, res) =>{
    res.render('../views/login');
})

//homepage item page get
router.get('/homepage', isAuthenticated, (req, res) =>{
    res.render('../views/homepage')
})

//buy item page get
router.get('/buy', isAuthenticated, (req, res) =>{
    res.render('../views/buy')
})

//about page get
router.get('/about', (req, res) =>{
    res.render('../views/about')
})

//forgot password page get
router.get('forgot_password', (req, res) =>{
    res.render('../views/forgot_password')
})


module.exports = router;