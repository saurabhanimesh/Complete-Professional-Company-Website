const express = require('express');
const app=express();
const port=80;
var path = require('path');
const functions= require('firebase-functions');

   

app.use(express.static(path.join(__dirname ,'../public')));
app.use(express.static(path.join(__dirname + '/servefile')));

app.get("/" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/index.html"));
 });

app.get("/signageboard" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/servicessb.html"));
 });

 app.get("/branding" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/branding.html"));
 });

 app.get("/ad" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/ad.html"));
 });

 app.get("/printing" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/printing.html"));
 });

 app.get("/customprinting" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/customprint.html"));
 });


 app.get("/signageboardproject" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/sbproject.html"));
 });


 app.get("/brandingproject" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/brandingproject.html"));
 });


 app.get("/adproject" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/advertisingproject.html"));
 });


 app.get("/printingproject" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/printingproject.html"));
 });

 app.get("/customprintingproject" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/customprintingproject.html"));
 });


 app.get("/orderrequest" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/orderrequest.html"));
 });


 app.get("/ugssk9852559968" , (req, res) => {
    res.set('Cache-Control', 'public, max-age=300 , s-maxage=600');
    // res.status(200).sendFile(path.join(__dirname ,'../public','index.html'));
     //  res.send("hi");
     res.status(200).sendFile(path.join(__dirname + "/servefile/userrequest.html"));
 });



 app.listen(port , ()=>{
    console.log('Sucessfully Served The Public Static Website');
   });   

   exports.app = functions.https.onRequest(app);



//    const url='https://rebelliousdreamer.com/';                        

//    axios.get(url)
//    .then(response => {
//      console.log(response.data);
//    })
//    .catch(error => {
//        console.log(error);
//    });