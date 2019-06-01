const express =require('express'),
  path=require('path');
const  app =express();
app.use(express.static('./dist/deploy'));
app.get('/*', (req,res)=>{
  res.sendFile(path.json(__dirname,'/dist/deploy/index.html'));})
app.listen(process.env.PORT||8080,()=>{console.log('server started')})
