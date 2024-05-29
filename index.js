const link = "https://render-spinoff-bypass-1.onrender.com"
console.log("starting from render 1");
setInterval(() => {
    fetch(link).then(() =>{console.log(link);});
}, 1000); //every 10 minutes