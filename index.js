const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(() => console.log('mongoDB Conected..'))
.catch(err => console.log('error'))

app.get('/', (req, res) => {
  res.send('Hello World 안녕하세요 !!!!!!!!!!')
})


app.post('/register', (req, res) => {
    //회원가입할때 필요 정보 client에서 가져옴
    //그것들을 DB에 넣음
    const user = new User(req.body)

    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })

 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})