const express = require('express')
const server = express()
const { pageGiveClasses, pageLanding, pageStudy, saveClasses, successCreatedProffy } = require('./pages')



const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


server
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.get('/success', successCreatedProffy)
.listen(5500)

