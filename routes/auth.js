
const { Router } = require("express");
const User = require("../models/user");
const { SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");
const jwt = require("jsonwebtoken")
const router = new Router();

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post('/login', async (req, res, next) => {
    try {
        let { username, password } = req.body;

        if (await User.authenticate(username, password)) {
            let token = jwt.sign({ username }, SECRET_KEY);
            User.updateLoginTimestamp(username);
            return res.json({ token });
        } else {
            throw new ExpressError("username and password are required", 400);
        }
    } catch (err) {
        return next(err);
    }
})


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

router.post("/register", async function (req, res, next) {
    try {
        let { username } = await User.register(req.body)
        let { password } = req.body;
        if (!username || !password) {
            throw new ExpressError("username and password are required", 400);
        }
        let token = jwt.sign({ username }, SECRET_KEY);
        User.updateLoginTimestamp(username);
        return res.json({ token });
    } catch (err) {
        return next(err)
    }
})

module.exports = router;
