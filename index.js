const link = "https://render-spinoff-bypass-1.onrender.com"
console.log("starting from render 2");
setInterval(() => {
    fetch(link).then(() =>{console.log(link);});
}, 1000); //every 1 minutes

const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from render 2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})