const express = require('express')
const app = express()
const path = require('path')
const port = 7000
const ejs = require('ejs')
app.set('view engine', 'ejs')

app.get('/ejs', (req, res) => {
    const paparazzi = 'wahala poo'
    res.render('index', { paparazzi })
})

const people = [
    {name : 'Abraham', school: 'sqi', image: ''},
    {name : 'Mercy', school: 'sqi', image: ''},
    {name : 'Abraham', school: 'sqi', image: ''}
]

app.use(express.static('public'))

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/', (req, res) => {
    res.send('hello, this is going to work in the name of jesus')
})

app.listen(port, () => {
    console.log('this should just work because i must understand this thing by grace');
    
})