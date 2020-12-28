const express=require('express')
const app =express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const cors=require('cors')

app.use(cors())

const nodemailer = require('nodemailer');

function sendEmail(text,email){
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mai.sa2sa2@gmail.com',
        pass:'Ma1sa2sa2@@@@'
    }
})


  // send mail with defined transport object
  let info =  transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender addressn
    to: email, // list of receivers
    subject: "test is finished", // Subject line
    text: "test is finished", // plain text body
    html: "", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

app.post("/api/sendMail",(req, res)=>{
    console.log(req.body);
sendEmail(req.body.text,req.body.email)
})
app.listen(8080,()=>{
    console.log("server is running ");
})

    