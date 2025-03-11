const express = require("express");
const router = express.Router();
const db = require("../database/db.js");
const bodyParser = require("body-parser");
const {handleQuery} = require("../middlewares/user.middlewares.js");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

console.log(handleQuery);
// Su dung async/await de xu li
router.get("/", handleQuery, async (req, res) => {
    try {
        let data = await db.execute("SELECT * FROM user");
        let [users] = data;
        res.json({
            users
        })
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;