const route = require("express").Router();

const signup = require('../controller/signup');
const home = require('../controller/home');
const register = require('../controller/register');

route.post("/register", signup);
route.get("/", home);
route.get("/register", register);

module.exports = route;