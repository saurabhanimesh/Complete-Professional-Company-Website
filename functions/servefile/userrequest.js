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

  var columnrequests = document.getElementById("columnrequests");
  var divpos=1;


//   var signageboardservice1 = db.collection("signageboardservice").doc("signageboardinfo");
//   var totalServicesRef = db.collection("signageboardservice").doc("totalServices");


  db.collection("ShopRequests").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        var newdiv = document.createElement("div");
        var datastring = JSON.stringify(doc.data());
        newdiv.innerHTML= divpos+". "+datastring;
        columnrequests.appendChild(newdiv);
        newdiv.id="newdiv"+divpos;

        newdiv.style.marginBottom="50px";

        divpos++;

        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});







