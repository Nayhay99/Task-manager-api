const express = require('express')
require('./db/mongoose')
const app = express()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const port = process.env.port || 3000
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is running on ' + port)
})