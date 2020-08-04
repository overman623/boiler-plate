const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://overman623:qwer1234@storesite.h5d9n.mongodb.net/StoreSite?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('mongoDB Conected..'))
.catch(err => console.log('error'))

app.get('/', (req, res) => {
  res.send('Hello World 안녕하세요 !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})