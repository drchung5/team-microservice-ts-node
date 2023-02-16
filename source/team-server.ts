import Express from "express";
import HttpStatus from "http-status-codes"
import bodyParser from "body-parser";
import {Team} from "./team"

const app = Express()
const port = 3000;

app.use(bodyParser.json())
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

app.get('/teams', (req :Express.Request, res :Express.Response) => {
  res.status(HttpStatus.OK).send(Team.getAllTeams())
})

app.get('/teams/:teamName', (req :Express.Request, res :Express.Response) => {
  console.log(req.params.teamName)
  let team = Team.getTeamByName(req.params.teamName)
  if(team) {
    res.status(HttpStatus.OK).send(team)
  }
  res.status(HttpStatus.NOT_FOUND).send()
})

app.post('/teams', (req :Express.Request, res :Express.Response) => {
  let path = Team.addTeam(req.body.name, req.body.city)
  res.header('Location',`/teams${path}`)
  res.status(HttpStatus.CREATED).send()
})

app.delete('/teams/:teamName', (req :Express.Request, res :Express.Response) => {
  console.log(req.params.teamName)
  let deleted = Team.deleteTeamByName(req.params.teamName)
  if(deleted) {
    res.status(HttpStatus.OK).send()
  }
  res.status(HttpStatus.NOT_FOUND).send()
})