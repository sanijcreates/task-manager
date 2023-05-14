const express = require("express")
const {getAllTasks, createTasks, getTask} = require('../controller/tasks')
const app = express()
const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask)

module.exports = router