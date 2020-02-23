const express = require("express")

const dbProjects = []
let reqNumber = 0

const app = express()

app.use(express.json())

//Routes
app.get("/projects", reqCount, (req,res) => {
  return res.json(dbProjects)
})

app.post("/projects", reqCount, (req, res) => {

  console.log(req.body)

  return res.json({ ok: "message" })
})

app.post("/projects/:id/tasks", reqCount, checkProjectExist, (req,res) => {

})

app.put("/projects/:id", reqCount, checkProjectExist, (req, res) => {

})

app.delete("/projects/:id", reqCount, checkProjectExist, (req, res) => {

})

//middlewares
function checkProjectExist(req, res, next) {
  const { id } = req.body

  const project = dbProjects.filter(item => item.id === id)

  if(!project) {
    return res.status(400).json({ message: "Project doesn't exist!"})
  }

  req.project = project

  return next()

}

function reqCount(req, res, next) {
  reqNumber++

  console.log(`Number of requests: ${reqNumber}`)

  return next()
}

app.listen(3000)