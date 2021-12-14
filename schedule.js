import schedule from 'node-schedule';
import express from 'express'; 

const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`scheduler is listening at http://localhost:${port}`)
})

let x = 1;

let y = {number: x}

x = 2;

console.log(y);

const job = schedule.scheduleJob('3 10 * * *', function(){
    x = 2;
    console.log(y);
});