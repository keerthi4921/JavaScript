const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Welcome to Home Page');

});
app.get('/about',(req,res)=>{
    res.send('About us Page');

});
app.get('/Contact',(req,res)=>{
    res.send('Contact us Page');

});
app.listen(2000,()=>{
    console.log('Server running on http://localhost:2000');
});
