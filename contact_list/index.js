const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 
//middleware to parse the response
app.use(express.urlencoded());
//middleware to access the statics folders assets
app.use(express.static('assets'));


var contactList = [
    {
        name:"Saumya",
        phone:"8527647170"
    },
    {
        name:"Tony Stark",
        phone:"7854657788"
    },
    {
        name:"Rock",
        phone:"7868766786"
    }
    ]

app.get('/',function(request,response){
   
    return response.render('home',{
        title: "Contacts List",
        contact_list: contactList

    });
})


app.post('/create-contact',function(req,res){

    contactList.push({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    });

    return res.redirect('/');

    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.email);
})

app.get('/delete-contact',function(req,res){
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex !=-1){//contact found

        contactList.splice(contactIndex,1);
    }

    return res.redirect('back');
})

app.listen(port,function(err){
    if(err){
        console.log('error in running server',err);
    }
    console.log('server running perfectly at port ',port);

})