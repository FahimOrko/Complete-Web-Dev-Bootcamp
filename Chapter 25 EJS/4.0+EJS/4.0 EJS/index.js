import express from "express";
// import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    
    const d = new Date();
    let day = d.getDay();
    let msg = { resposne : "" };
    // let msg = "Its a weeknd";

    if(day===0 || day===6){
        msg.resposne = "Its a weeknd, Time to party."
    } else{
        msg.resposne = "Its a weekday, Time to work."
    };

    res.render('index.ejs', msg);
});

app.listen(port, ()=>{
    console.log(`Server running in port ${port}`)
});