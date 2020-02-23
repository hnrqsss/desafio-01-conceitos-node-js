const express = require("express")

const dbProjects = []

const app = express()

app.use(express.json())

app.get("/projects", (req,res) => {
  return res.json(dbProjects)
})

app.post("/pojects", (req,res) => {

})

app.post("/projects/:id/tasks", (req,res) => {

})

app.put("/projects/:id", (req, res) => {

})

app.delete("/projects/:id", (req, res) => {

})

app.listen(3000)