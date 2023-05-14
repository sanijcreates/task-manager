const getAllTasks = (req, res) => {
    res.send("all items")
}

const createTasks = (req, res) => {
    res.send("created tasks")
}
const getTask = (req, res) => {
    res.send("single task")
}
// const updateTasks = (req, res) => {
//     res.send("updated")
// }
// const deleteTasks = (req, res) => {
//     res.send("deleted")
// }

module.exports = {getAllTasks, createTasks, getTask}