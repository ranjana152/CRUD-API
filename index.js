const express=require('express');
const connection=require('./database/psql.js');
const router = require('./view/routes.js');
const userModel = require('./database/psql.js');
const app=express();
app.use(express.json());
app.use(router);
const port= 3000;
app.listen(port,()=>{
    console.log(`Port no ${port} successfully running`);
});
connection();
