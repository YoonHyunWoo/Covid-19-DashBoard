const app = require('express')();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/dashboard.html');
})

app.listen(3000)