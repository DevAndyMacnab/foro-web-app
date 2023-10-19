import express from 'express';

const app = express();
const port= 8100;
app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});
