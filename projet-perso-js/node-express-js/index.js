const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {  
  res.send('Hello World!')
})

app.get('/signin', (req, res) => {  

    const signIn = 
    `<form method="post">
    <input type="text" name="nom" placeholder="Votre nom">
    <button type="submit">Se connecter</button>
    </form>`

  res.send(signIn);
});

app.post('/signin', (req, res) => {
    //console.log(req.body)
    //traitement des données du formulaire.
    res.send(`Bienvenue ${req.body.nom}`)
})

app.get('/profil/:userName', (req, res) => {
  
  console.log(req)
  res.send(`<h1>Bonsoir${req.params.userName}</h1>`)
})

app.get('/users', (req, res) => {  

    const users = [
        {
            "username": "jean",
            "age": 25
        },
        {
            "username": "julien",
            "age": 30
        },
    ]
  res.json(users)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



/*
dossier : node-expresse-js 

index.js:

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {  
  res.send('Hello World!')
})

app.get('/signin', (req, res) => {  

    const signIn = 
    `<form method="post">
    <input type="text" name="nom" placeholder="Votre nom">
    <button type="submit">Se connecter</button>
    </form>`

  res.send(signIn);
});

app.post('/signin', (req, res) => {
    //console.log(req.body)
    //traitement des données du formulaire.
    res.send(`Bienvenue ${req.body.nom}`)
})

app.get('/profil/:userName', (req, res) => {
  
  console.log(req)
  res.send(`<h1>Bonsoir${req.params.userName}</h1>`)
})

app.get('/users', (req, res) => {  

    const users = [
        {
            "username": "jean",
            "age": 25
        },
        {
            "username": "julien",
            "age": 30
        },
    ]
  res.json(users)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

commande a faire dans le terminal de commande :

npm init -y
npm install express --save
npm install --save-dev nodemon
npm install body-parser
npm run dev

*/