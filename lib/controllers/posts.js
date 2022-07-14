const { Router } = require('express');
const authentication = require('../middleware/authentication.js');
const Post = require('../models/Post');
const User = require('../models/User.js');

module.exports = Router();
