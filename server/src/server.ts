import app from './app'

const port = process.env.port || process.env.PORT;


app.listen(port, ()=>{
  console.log('Hello there! Server is running!')
});