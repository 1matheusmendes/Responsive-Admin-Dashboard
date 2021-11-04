var express = require ('express')
var app = express()

app.use(express.static(__dirname + '/Frontend/'))

app.get('/home', (req, res) => {
    res.send('fodase')
})
//C:\Users\Matheus Mendes\OneDrive\Documentos\Projetos\Responsive-Admin-Dashboard
app.listen(3001, () =>{
    console.log('de pé carai')
})