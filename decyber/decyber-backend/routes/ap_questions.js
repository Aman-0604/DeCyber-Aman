const express = require('express');
const router = express.Router();//express ke andar router hota hai
const fetch_user = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const Army_questions = require('../models/Army_questions');

// Route 1 : Get all the Army_questions using : GET "/api/ap_questions/fetchAllap_questions". Login required
router.get('/fetchAllap_questions', fetch_user, async (req, res) => {
    try {
        const army_questions = await Army_questions.find({ type: 0 });
        res.json(army_questions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;