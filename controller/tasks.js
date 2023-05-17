const getAllTasks = (req, res) => {
    res.send("all items")
}

const createTasks = (req, res) => {
    res.json(req.body);
}
const getTask = (req, res) => {
    res.json({id: req.params.id})
}
// const updateTasks = (req, res) => {
//     res.send("updated")
// }
// const deleteTasks = (req, res) => {
//     res.send("deleted")
// }

module.exports = {getAllTasks, createTasks, getTask}