var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var storage = firebase.storage();
var storageRef = storage.ref();


const sellbook = document.getElementById("sellbook");


var totalreqdoc = db.collection("ShopRequests").doc("TotalReq")




const usersubmitshop = document.getElementById("hiresubmitshop");

usersubmitshop.addEventListener("click", () => {
  const bookbox = document.getElementById("hireform");
  const name = document.getElementById("clientname").value;
  const email = document.getElementById("clientemail").value;
  const number = document.getElementById("clientnumber").value;
  const address = document.getElementById("clienttext").value;
  const thankyou1 = document.getElementById("thankyoumessage1");
  const thankyou2 = document.getElementById("thankyoumessage2");

  const input1shop = document.getElementById("clientname");
  const input2shop = document.getElementById("clientemail");
  const input3shop = document.getElementById("clientnumber");
  const input4shop = document.getElementById("clienttext");


  if (name.length == 0 || email.length == 0 || number.length == 0 || address.length == 0) {
    thankyou1.innerHTML = "Please Fill All the Informations"
    thankyou1.style.display = "flex";
    thankyou1.style.color = "red";
  }
  else {

    db.collection("ShopRequests").add({
      Name: name,
      email: email,
      phone: number,
      purpose: address
    })
      .then(function () {

        input1shop.style.display = "none";
        input2shop.style.display = "none";
        input3shop.style.display = "none";
        input4shop.style.display = "none";
        usersubmitshop.style.display = "none";
        thankyou1.style.display = "flex";
        thankyou2.style.display = " flex";
        thankyou1.style.fontSize = "25px";
        thankyou1.style.color = "white";
        thankyou2.style.fontSize = "25px";
        thankyou2.style.color = "white";
        thankyou1.innerHTML = "Thankyou your order has been placed.";
        thankyou2.innerHTML = "You will be contacted soon.";


        console.log("Document successfully written!");

        // totalreqdoc.get().then(function (doc) {
        //   if (doc.exists) {
        //     var xp = doc.data();
        //     var xpint = parseInt(xp.total);
        //     xpint++;

        //     db.collection("ShopRequests").doc("TotalReq").set({
        //       total:xpint
        //     })
        //       .then(() => {
        //         console.log("Document successfully written!");
        //       })
        //       .catch((error) => {
        //         console.error("Error writing document: ", error);
        //       });
        //   }
        // }).catch(function (error) {
        //   thankyou1.innerHTML = "Check your Internet Connection";
        // });

      })
      .catch(function (error) {
        thankyou1.innerHTML = "Check your Internet Connection";
      });


  }
});

var imageShopRef = storageRef.child('OrderImage/weopen.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  sellbook.src = url;
}).catch(function (error) {
  sellbook.alt = "Image";
});



var contactphone = document.getElementById("contactphone");


var conphone = db.collection("Contactinfo").doc("info");


conphone.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    contactphone.innerHTML = sbservicedataxy.number;
  }
}).catch(function (error) {
  contactphone.innerHTML = "Check your internet connection";
});



// sellbook.addEventListener("mouseover", () => {
//     hireform.style.display = "none";
//     var docRefblogBookD = db.collection("BookDetail").doc("book1detail");

//     docRefblogBookD.get().then(function (doc) {
//       if (doc.exists) {
//         var detailsreview = doc.data();
//         var bddiv = document.createElement("div");
//         var bdhead = document.createElement("h");
//         var bdheadnode = document.createTextNode("Description");
//         bdhead.appendChild(bdheadnode);
//         var bdcontent = document.createElement("p");
//         var bdcontentnode = document.createTextNode(detailsreview.Description);
//         bdcontent.appendChild(bdcontentnode);

//         bddiv.id = "bddiv";
//         bdcontent.id = "bdcontent";
//         bdhead.id = "bdhead";

//         bddiv.appendChild(bdhead);
//         bddiv.appendChild(bdcontent);
//         sellbook.style.marginRight = "50px"
//         homebookdetailx.appendChild(bddiv);

//       } else {
//         bdcontent.innerHTML = "Check Your Internet Connection";
//         bdhead.innerHTML = "Check Your Internet Connection";
//       }
//     }).catch(function (error) {
//       bdcontent.innerHTML = "Check Your Internet Connection";
//       bdhead.innerHTML = "Check Your Internet Connection";
//     });
//   });


//   sellbook.addEventListener("mouseout", () => {
//     hireform.style.display = "flex";
//     var removedivbd = document.getElementById("bddiv");
//     homebookdetailx.removeChild(removedivbd);
//     sellbook.style.marginRight = "220px"
//   });