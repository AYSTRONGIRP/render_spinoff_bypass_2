const link = "https://render-spinoff-bypass-1.onrender.com"
console.log("starting from render 2");
setInterval(() => {
    try{
        fetch(link)
        .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            console.log(response.data)
            // console.log(response)
          })
    }
    catch(error) {

    }
    
}, 1000); //every 1/2 minutes

const express = require('express')
const app = express()
const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Hello from render 2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})