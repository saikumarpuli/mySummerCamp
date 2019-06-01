const express =require('express'),
  path=require('path');
const  app =express();
app.use(express.static('./dist/mysummercamp'));
app.get('/*', (req,res)=>{
  res.sendFile(path.json(__dirname,'/dist/mysummercamp/index.html'));})
app.listen(process.env.PORT||8080,()=>{console.log('server started')})
