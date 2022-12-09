const route = require("express").Router();

const register_post = require('../controller/register_post');
const home = require('../controller/home');
const register_get = require('../controller/register_get');
const secrets = require('../controller/secrets');
const login_get = require('../controller/login_get');
const login_post = require('../controller/login_post');

route.post("/register", register_post);
route.get("/", home);
route.get("/register", register_get);
route.get("/secrets", secrets);
route.get("/login", login_get);
route.post("/login", login_post);

module.exports = route;