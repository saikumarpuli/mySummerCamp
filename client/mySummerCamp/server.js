const express =require('express'),
  path=require('path');
const  app =express();
app.use(express.static('./dist/my-summer-camp'));
app.get('/*', (req,res)=>{
  res.sendFile(path.json(__dirname,'/dist/my-summer-camp/index.html'));})
app.listen(process.env.PORT||8080,()=>{console.log('server started')})
