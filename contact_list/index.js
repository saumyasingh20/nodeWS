const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/Contact');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 
//middleware to parse the response
app.use(express.urlencoded());
//middleware to access the statics folders assets
app.use(express.static('assets'));


app.get('/',function(request,response){

    Contact.find({},function(err,contacts){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return response.render('home',{
            title: "Contacts List",
            contact_list: contacts
    
        });

    });
   
    
})


app.post('/create-contact',function(req,res){

    //creating a contact according to the schema 

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    },function(err,newContact){
        if(err){
            //display error in console, if contact doesnt get created
            console.log('error in creating a contact !');
            return;
        }
        console.log('*********',newContact);
        return res.redirect('back');

    });

})

app.get('/delete-contact',function(req,res){
    //get the id from the query in the url
    let id = req.query.id;

    //find the contact in the database using id and delte it
   Contact.findByIdAndDelete(id,function(err){
       if(err){
           console.log("error in deleting an object from database");
           return;
       }
       return res.redirect('back');

   });

    
});

app.listen(port,function(err){
    if(err){
        console.log('error in running server',err);
    }
    console.log('server running perfectly at port ',port);

})