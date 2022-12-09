const route = require("express").Router();

const register_post = require('../controller/register_post');
const home = require('../controller/home');
const register_get = require('../controller/register_get');
const secrets = require('../controller/secrets');

route.post("/register", register_post);
route.get("/", home);
route.get("/register", register_get);
route.get("/secrets", secrets);

module.exports = route;