
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

var checkknowaboutinfo = 1;

var db = firebase.firestore();

var storage = firebase.storage();
var storageRef = storage.ref();



// set up text to print, each item in array is new line




var whatwedoinfo = document.getElementById("whatwedoinfo");

var knowaboutinfohome = document.getElementById("knowaboutinfohome");
var welcomebox = document.getElementById("welcomebox");




knowaboutinfohome.addEventListener("click", () => {

  if (checkknowaboutinfo == 1) {
    var docRef = db.collection("whatwedoinfo").doc("Description");

    docRef.get().then(function (doc) {
      if (doc.exists) {
        var whatwedocontent = doc.data();
        // array with texts to type in typewriter
        var dataText = [whatwedocontent.content];
        whatwedoinfo.style.padding = "40px";
        // whatwedoinfo.style.fontSize = "25px";
        
        function myFunction(x) {
          if (x.matches) { // If media query matches
            whatwedoinfo.style.fontSize = "15px";
          } else {
            whatwedoinfo.style.fontSize = "25px";

          }
        }

        var x = window.matchMedia("(max-width: 1200px)")
        myFunction(x) // Call listener function at run time
        x.addListener(myFunction) // Attach listener function on state changes



        function myFunction(y) {
          if (y.matches) { // If media query matches
            whatwedoinfo.style.fontSize = "12px";
          } else {
            whatwedoinfo.style.fontSize = "15px";
          }
        }
    
        var y = window.matchMedia("(max-width: 350px)")
        myFunction(y) // Call listener function at run time
        y.addListener(myFunction) // Attach listener function on state changes
     

        whatwedoinfo.style.opacity = "1";
        whatwedoinfo.style.top = "0px";
        whatwedoinfo.style.fontFamily="'Dosis', sans-serif";

        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
          // chekc if text isn't finished yet
          if (i < (text.length)) {
            // add next character to h1
            whatwedoinfo.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
              typeWriter(text, i + 1, fnCallback)
            }, 35);
          }
          // text finished, call callback if there is a callback function
          else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
          }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
          knowaboutinfohome.style.display = "none";

          if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
              knowaboutinfohome.style.display = "block";
              knowaboutinfohome.innerHTML="BACK";
            }, 1000);
          }
          // check if dataText[i] exists
          if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
              // after callback (and whole text has been animated), start next text
              StartTextAnimation(i + 1);
            });
          }
        }
        // start the text animation
        StartTextAnimation(0);

        welcomebox.animate([
          // keyframes
          { backgroundColor: ' rgba(255, 255, 255,0.4)' },
          { backgroundColor: ' rgba(255, 255, 255,0.7)' }
        ], {
          // timing options
          easing: "ease-out",
          duration: 20000,
          iterations: 1,
          fill: "forwards"
        });

        // whatwedoinfo.innerHTML = whatwedocontent.content
      } else {
        // doc.data() will be undefined in this case
        whatwedoinfo.innerHTML = "Check Your Internet Connection";
        whatwedoinfo.style.fontSize = "20px"
      }
    }).catch(function (error) {
      whatwedoinfo.innerHTML = "Check Your Internet Connection";
      whatwedoinfo.style.fontSize = "20px"
    });
    checkknowaboutinfo = 0;
  }
  else {
    whatwedoinfo.innerHTML = "What We Do?"
    checkknowaboutinfo = 1;
    // whatwedoinfo.style.fontSize = "80px"
    function myFunction(x) {
      if (x.matches) { // If media query matches
        whatwedoinfo.style.fontSize = "60px";
      } else {
        whatwedoinfo.style.fontSize = "80px";
      }
    }

    var x = window.matchMedia("(max-width: 1200px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


    function myFunction(y) {
      if (y.matches) { // If media query matches
        whatwedoinfo.style.fontSize = "30px";
      } else {
        whatwedoinfo.style.fontSize = "60px";
      }
    }

    var y = window.matchMedia("(max-width: 550px)")
    myFunction(y) // Call listener function at run time
    y.addListener(myFunction) // Attach listener function on state changes



    function myFunction(z) {
      if (z.matches) { // If media query matches
        whatwedoinfo.style.fontSize = "20px";
      } else {
        whatwedoinfo.style.fontSize = "30px";
      }
    }

    var z = window.matchMedia("(max-width: 350px)")
    myFunction(z) // Call listener function at run time
    z.addListener(myFunction) // Attach listener function on state changes





    whatwedoinfo.style.opacity = "0.6";
    whatwedoinfo.style.top = "150px"
    whatwedoinfo.style.padding = "0px";
    whatwedoinfo.style.fontFamily="'Trocchi', sans-serif";
    knowaboutinfohome.innerHTML="CLICK";
    welcomebox.animate([
      // keyframes
      { backgroundColor: ' rgba(255, 255, 255,0.7)' },
      { backgroundColor: ' rgba(255, 255, 255,0.4)' }
    ], {
      // timing options
      easing: "ease-in-out",
      duration: 0,
      iterations: 1,
      fill: "forwards"
    });
  }

});


// service section home 2nd page khatam 3rd page suru



var signageboardoptionssection = document.getElementById("servicebox2");


var service1 = db.collection("serviceshome").doc("service1");
var service2 = db.collection("serviceshome").doc("service2");
var service3 = db.collection("serviceshome").doc("service3");
var service4 = db.collection("serviceshome").doc("service4");
var service5 = db.collection("serviceshome").doc("service5");



var sbbox1headnode;
var sbbox1 = document.getElementById("sbbox1");
var sbbox1imagea = document.createElement("a");
var sbbox1image = document.createElement("img");
sbbox1image.alt = "Check your internet connection";
sbbox1imagea.href="/signageboard";
sbbox1imagea.appendChild(sbbox1image);
sbbox1.appendChild(sbbox1imagea);
var sbbox1head = document.createElement("p");
service1.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedata = doc.data();
    sbbox1headnode = document.createTextNode(sbservicedata.name);
    sbbox1head.appendChild(sbbox1headnode);
  }
}).catch(function (error) {
  sbbox1headnode = document.createTextNode("Check your internet connection");
  sbbox1head.appendChild(sbbox1headnode);
});
sbbox1.appendChild(sbbox1head);
sbbox1head.id = "sbbox1head";
sbbox1image.id = "sbbox1image";
sbbox1imagea.id = "sbbox1imagea";



var sbbox2headnode;
var sbbox2 = document.getElementById("sbbox2");
var sbbox2imagea = document.createElement("a");
var sbbox2image = document.createElement("img");
sbbox2image.alt = "Check your internet connection";
sbbox2imagea.href="/branding";

sbbox2imagea.appendChild(sbbox2image);
sbbox2.appendChild(sbbox2imagea);
var sbbox2head = document.createElement("p");
service2.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedata = doc.data();
    sbbox2headnode = document.createTextNode(sbservicedata.name);
    sbbox2head.appendChild(sbbox2headnode);
  }
}).catch(function (error) {
  sbbox2headnode = document.createTextNode("Check your internet connection");
  sbbox2head.appendChild(sbbox2headnode);
});
sbbox2.appendChild(sbbox2head);
sbbox2head.id = "sbbox2head";
sbbox2image.id = "sbbox2image";
sbbox2imagea.id = "sbbox2imagea";




var sbbox3headnode;
var sbbox3 = document.getElementById("sbbox3");
var sbbox3imagea = document.createElement("a");
var sbbox3image = document.createElement("img");
sbbox3image.alt = "Check your internet connection";
sbbox3imagea.href="/ad";

sbbox3imagea.appendChild(sbbox3image);
sbbox3.appendChild(sbbox3imagea);
var sbbox3head = document.createElement("p");
service3.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedata = doc.data();
    sbbox3headnode = document.createTextNode(sbservicedata.name);
    sbbox3head.appendChild(sbbox3headnode);
  }
}).catch(function (error) {
  sbbox3headnode = document.createTextNode("Check your internet connection");
  sbbox3head.appendChild(sbbox3headnode);
});
sbbox3.appendChild(sbbox3head);
sbbox3head.id = "sbbox3head";
sbbox3image.id = "sbbox3image";
sbbox3imagea.id = "sbbox3imagea";




var sbbox4headnode;
var sbbox4 = document.getElementById("sbbox4");
var sbbox4imagea = document.createElement("a");
var sbbox4image = document.createElement("img");
sbbox4image.alt = "Check your internet connection";
sbbox4imagea.href="/printing";

sbbox4imagea.appendChild(sbbox4image);
sbbox4.appendChild(sbbox4imagea);
var sbbox4head = document.createElement("p");
service4.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedata = doc.data();
    sbbox4headnode = document.createTextNode(sbservicedata.name);
    sbbox4head.appendChild(sbbox4headnode);
  }
}).catch(function (error) {
  sbbox4headnode = document.createTextNode("Check your internet connection");
  sbbox4head.appendChild(sbbox4headnode);
});
sbbox4.appendChild(sbbox4head);
sbbox4head.id = "sbbox4head";
sbbox4image.id = "sbbox4image";
sbbox4imagea.id = "sbbox4imagea";




var sbbox5headnode;
var sbbox5 = document.getElementById("sbbox5");
var sbbox5imagea = document.createElement("a");
var sbbox5image = document.createElement("img");
sbbox5image.alt = "Check your internet connection";
sbbox5imagea.href="/customprinting";

sbbox5imagea.appendChild(sbbox5image);
sbbox5.appendChild(sbbox5imagea);
var sbbox5head = document.createElement("p");
service5.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedata = doc.data();
    sbbox5headnode = document.createTextNode(sbservicedata.name);
    sbbox5head.appendChild(sbbox5headnode);
  }
}).catch(function (error) {
  sbbox5headnode = document.createTextNode("Check your internet connection");
  sbbox5head.appendChild(sbbox5headnode);
});
sbbox5.appendChild(sbbox5head);
sbbox5head.id = "sbbox5head";
sbbox5image.id = "sbbox5image";
sbbox5imagea.id = "sbbox5imagea";



signageboardoptionssection.appendChild(sbbox1);
signageboardoptionssection.appendChild(sbbox2);
signageboardoptionssection.appendChild(sbbox3);
signageboardoptionssection.appendChild(sbbox4);
signageboardoptionssection.appendChild(sbbox5);


storageRef.child('ServicesHome/s1.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox1image');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox1image');
  img.alt = "Check your internet connection"

});

storageRef.child('ServicesHome/s2.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox2image');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox2image');
  img.alt = "Check your internet connection"

});


storageRef.child('ServicesHome/s3.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox3image');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox3image');
  img.alt = "Check your internet connection"
});


storageRef.child('ServicesHome/s4.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox4image');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox4image');
  img.alt = "Check your internet connection"
});

storageRef.child('ServicesHome/s5.jpg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox5image');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox5image');
  img.alt = "Check your internet connection"
});



// 3rd page khatam 4th page suru


var signageboardoptionssectionx = document.getElementById("pbox2");


var pj1 = db.collection("phome").doc("pj1");
var pj2 = db.collection("phome").doc("pj2");
var pj3 = db.collection("phome").doc("pj3");
var pj4 = db.collection("phome").doc("pj4");
var pj5 = db.collection("phome").doc("pj5");



var sbbox1headnodex;
var sbbox1x = document.getElementById("sbbox1x");
var sbbox1imageax = document.createElement("a");
var sbbox1imagex = document.createElement("img");
sbbox1imagex.alt = "Check your internet connection";
sbbox1imageax.href="/signageboardproject";
sbbox1imageax.appendChild(sbbox1imagex);
sbbox1x.appendChild(sbbox1imageax);
var sbbox1headx = document.createElement("p");
pj1.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedatax = doc.data();
    sbbox1headnodex = document.createTextNode(sbservicedatax.name);
    sbbox1headx.appendChild(sbbox1headnodex);
  }
}).catch(function (error) {
  sbbox1headnodex = document.createTextNode("Check your internet connection");
  sbbox1headx.appendChild(sbbox1headnodex);
});
sbbox1x.appendChild(sbbox1headx);
sbbox1headx.id = "sbbox1headx";
sbbox1imagex.id = "sbbox1imagex";
sbbox1imageax.id = "sbbox1imageax";



var sbbox2headnodex;
var sbbox2x = document.getElementById("sbbox2x");
var sbbox2imageax = document.createElement("a");
var sbbox2imagex = document.createElement("img");
sbbox2imagex.alt = "Check your internet connection";
sbbox2imageax.href="/brandingproject";

sbbox2imageax.appendChild(sbbox2imagex);
sbbox2x.appendChild(sbbox2imageax);
var sbbox2headx = document.createElement("p");
pj2.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedatax = doc.data();
    sbbox2headnodex = document.createTextNode(sbservicedatax.name);
    sbbox2headx.appendChild(sbbox2headnodex);
  }
}).catch(function (error) {
  sbbox2headnodex = document.createTextNode("Check your internet connection");
  sbbox2headx.appendChild(sbbox2headnodex);
});
sbbox2x.appendChild(sbbox2headx);
sbbox2headx.id = "sbbox2headx";
sbbox2imagex.id = "sbbox2imagex";
sbbox2imageax.id = "sbbox2imageax";




var sbbox3headnodex;
var sbbox3x = document.getElementById("sbbox3x");
var sbbox3imageax = document.createElement("a");
var sbbox3imagex = document.createElement("img");
sbbox3imagex.alt = "Check your internet connection";
sbbox3imageax.href="/adproject";

sbbox3imageax.appendChild(sbbox3imagex);
sbbox3x.appendChild(sbbox3imageax);
var sbbox3headx = document.createElement("p");
pj3.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedatax = doc.data();
    sbbox3headnodex = document.createTextNode(sbservicedatax.name);
    sbbox3headx.appendChild(sbbox3headnodex);
  }
}).catch(function (error) {
  sbbox3headnodex = document.createTextNode("Check your internet connection");
  sbbox3headx.appendChild(sbbox3headnodex);
});
sbbox3x.appendChild(sbbox3headx);
sbbox3headx.id = "sbbox3headx";
sbbox3imagex.id = "sbbox3imagex";
sbbox3imageax.id = "sbbox3imageax";




var sbbox4headnodex;
var sbbox4x = document.getElementById("sbbox4x");
var sbbox4imageax = document.createElement("a");
var sbbox4imagex = document.createElement("img");
sbbox4imagex.alt = "Check your internet connection";
sbbox4imageax.href="/printingproject";

sbbox4imageax.appendChild(sbbox4imagex);
sbbox4x.appendChild(sbbox4imageax);
var sbbox4headx = document.createElement("p");
pj4.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedatax = doc.data();
    sbbox4headnodex = document.createTextNode(sbservicedatax.name);
    sbbox4headx.appendChild(sbbox4headnodex);
  }
}).catch(function (error) {
  sbbox4headnodex = document.createTextNode("Check your internet connection");
  sbbox4headx.appendChild(sbbox4headnodex);
});
sbbox4x.appendChild(sbbox4headx);
sbbox4headx.id = "sbbox4headx";
sbbox4imagex.id = "sbbox4imagex";
sbbox4imageax.id = "sbbox4imageax";




var sbbox5headnodex;
var sbbox5x= document.getElementById("sbbox5x");
var sbbox5imageax = document.createElement("a");
var sbbox5imagex = document.createElement("img");
sbbox5imagex.alt = "Check your internet connection";
sbbox5imageax.href="/customprintingproject";

sbbox5imageax.appendChild(sbbox5imagex);
sbbox5x.appendChild(sbbox5imageax);
var sbbox5headx = document.createElement("p");
pj5.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedatax = doc.data();
    sbbox5headnodex = document.createTextNode(sbservicedatax.name);
    sbbox5headx.appendChild(sbbox5headnodex);
  }
}).catch(function (error) {
  sbbox5headnodex = document.createTextNode("Check your internet connection");
  sbbox5headx.appendChild(sbbox5headnodex);
});
sbbox5x.appendChild(sbbox5headx);
sbbox5headx.id = "sbbox5headx";
sbbox5imagex.id = "sbbox5imagex";
sbbox5imageax.id = "sbbox5imageax";




signageboardoptionssectionx.appendChild(sbbox1x);
signageboardoptionssectionx.appendChild(sbbox2x);
signageboardoptionssectionx.appendChild(sbbox3x);
signageboardoptionssectionx.appendChild(sbbox4x);
signageboardoptionssectionx.appendChild(sbbox5x);


storageRef.child('ProjectHome/p1.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox1imagex');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox1imagex');
  img.alt = "Check your internet connection"

});

storageRef.child('ProjectHome/p2.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox2imagex');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox2imagex');
  img.alt = "Check your internet connection"

});


storageRef.child('ProjectHome/p3.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox3imagex');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox3imagex');
  img.alt = "Check your internet connection"
});


storageRef.child('ProjectHome/p4.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox4imagex');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox4imagex');
  img.alt = "Check your internet connection"
});

storageRef.child('ProjectHome/p5.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox5imagex');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox5imagex');
  img.alt = "Check your internet connection"
});


// 4tha page khtaam 5th suru review page

const reviewName1 = document.getElementById("reviewName1");
const reviewName2 = document.getElementById("reviewName2");
const reviewName3 = document.getElementById("reviewName3");
const starsRate1 = document.getElementById("starsRate1");
const starsRate2 = document.getElementById("starsRate2");
const starsRate3 = document.getElementById("starsRate3");
const review1comment1 = document.getElementById("review1comment1");
const review1comment2 = document.getElementById("review1comment2");
const review1comment3 = document.getElementById("review1comment3");

function myFunction() {
  setInterval(function () {
    setTimeout(function () {

      var oldstar1 = document.getElementById("starcreate1");
      var oldstar2 = document.getElementById("starcreate2");
      var oldstar3 = document.getElementById("starcreate3");
      var oldstar4 = document.getElementById("starcreate4");
      var oldstar5 = document.getElementById("starcreate5");
      starsRate1.removeChild(oldstar1);
      starsRate1.removeChild(oldstar2);
      starsRate1.removeChild(oldstar3);
      starsRate1.removeChild(oldstar4);
      starsRate1.removeChild(oldstar5);

      let starscheck1 = 1;


      var docRefblogReview1 = db.collection("ReviewsShow").doc("Review1");
      var docRefblogReview2 = db.collection("ReviewsShow").doc("Review2");
      var docRefblogReview3 = db.collection("ReviewsShow").doc("Review3");

      docRefblogReview1.get().then(function (doc) {
        if (doc.exists) {
          var detailsreview = doc.data();
          reviewName1.innerHTML = detailsreview.Name;
          var starsInteger = parseInt(detailsreview.stars);
          while (starscheck1 <= starsInteger) {
            var starcreate = document.createElement("img");
            starcreate.src = "star.png";
            starcreate.alt = "*";
            starcreate.className = "starcreate1";
            starcreate.id = "starcreate" + starscheck1;
            starsRate1.appendChild(starcreate);
            starscheck1++;
          }
          review1comment1.innerHTML = detailsreview.comment;
        } else {
          // doc.data() will be undefined in this case
          reviewName1.innerHTML = "Check Your Internet Connection";
          review1comment1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        reviewName1.innerHTML = "Check Your Internet Connection";
        review1comment1.innerHTML = "Check Your Internet Connection";
      });
    }, 0);

    var delayInMilliseconds2 = 5000; //1 second

    setTimeout(function () {
      var oldstar1 = document.getElementById("starcreate1");
      var oldstar2 = document.getElementById("starcreate2");
      var oldstar3 = document.getElementById("starcreate3");
      var oldstar4 = document.getElementById("starcreate4");
      var oldstar5 = document.getElementById("starcreate5");
      starsRate1.removeChild(oldstar1);
      starsRate1.removeChild(oldstar2);
      starsRate1.removeChild(oldstar3);
      starsRate1.removeChild(oldstar4);
      starsRate1.removeChild(oldstar5);

      let starscheck2 = 1;

      docRefblogReview2.get().then(function (doc) {
        if (doc.exists) {
          var detailsreview = doc.data();
          reviewName1.innerHTML = detailsreview.Name;
          var starsInteger = parseInt(detailsreview.stars);
          while (starscheck2 <= starsInteger) {
            var starcreate = document.createElement("img");
            starcreate.src = "star.png";
            starcreate.alt = "*";
            starcreate.className = "starcreate2";
            starcreate.id = "starcreate" + starscheck2;
            starsRate1.appendChild(starcreate);
            starscheck2++;
          }
          review1comment1.innerHTML = detailsreview.comment;
        } else {
          // doc.data() will be undefined in this case
          reviewName1.innerHTML = "Check Your Internet Connection";
          review1comment1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        reviewName1.innerHTML = "Check Your Internet Connection";
        review1comment1.innerHTML = "Check Your Internet Connection";
      });
    }, delayInMilliseconds2);


    var delayInMilliseconds3 = 10000; //1 second

    setTimeout(function () {

      var oldstar1 = document.getElementById("starcreate1");
      var oldstar2 = document.getElementById("starcreate2");
      var oldstar3 = document.getElementById("starcreate3");
      var oldstar4 = document.getElementById("starcreate4");
      var oldstar5 = document.getElementById("starcreate5");
      starsRate1.removeChild(oldstar1);
      starsRate1.removeChild(oldstar2);
      starsRate1.removeChild(oldstar3);
      starsRate1.removeChild(oldstar4);
      starsRate1.removeChild(oldstar5);

      let starscheck3 = 1;


      docRefblogReview3.get().then(function (doc) {
        if (doc.exists) {
          var detailsreview = doc.data();
          reviewName1.innerHTML = detailsreview.Name;
          var starsInteger = parseInt(detailsreview.stars);
          while (starscheck3 <= starsInteger) {
            var starcreate = document.createElement("img");
            starcreate.src = "star.png";
            starcreate.alt = "*";
            starcreate.className = "starcreate3";
            starcreate.id = "starcreate" + starscheck3;
            starsRate1.appendChild(starcreate);
            starscheck3++;
          }
          review1comment1.innerHTML = detailsreview.comment;
        } else {
          // doc.data() will be undefined in this case
          reviewName1.innerHTML = "Check Your Internet Connection";
          review1comment1.innerHTML = "Check Your Internet Connection";
        }
      }).catch(function (error) {
        reviewName1.innerHTML = "Check Your Internet Connection";
        review1comment1.innerHTML = "Check Your Internet Connection";
      });
    }, delayInMilliseconds3);
  }, 15000);
}


let starscheck1 = 1;

var docRefblogReview1 = db.collection("ReviewsShow").doc("Review1");
var docRefblogReview2 = db.collection("ReviewsShow").doc("Review2");
var docRefblogReview3 = db.collection("ReviewsShow").doc("Review3");

docRefblogReview1.get().then(function (doc) {
  if (doc.exists) {
    var detailsreview = doc.data();
    reviewName1.innerHTML = detailsreview.Name;
    var starsInteger = parseInt(detailsreview.stars);
    while (starscheck1 <= starsInteger) {
      var starcreate = document.createElement("img");
      starcreate.src = "star.png";
      starcreate.alt = "*";
      starcreate.className = "starcreate1";
      starcreate.id = "starcreate" + starscheck1;
      starsRate1.appendChild(starcreate);
      starscheck1++;
    }
    review1comment1.innerHTML = detailsreview.comment;
  } else {
    // doc.data() will be undefined in this case
    reviewName1.innerHTML = "Check Your Internet Connection";
    review1comment1.innerHTML = "Check Your Internet Connection";
  }
}).catch(function (error) {
  reviewName1.innerHTML = "Check Your Internet Connection";
  review1comment1.innerHTML = "Check Your Internet Connection";
});


var delayInMilliseconds2 = 5000; //1 second

setTimeout(function () {
  var oldstar1 = document.getElementById("starcreate1");
  var oldstar2 = document.getElementById("starcreate2");
  var oldstar3 = document.getElementById("starcreate3");
  var oldstar4 = document.getElementById("starcreate4");
  var oldstar5 = document.getElementById("starcreate5");
  starsRate1.removeChild(oldstar1);
  starsRate1.removeChild(oldstar2);
  starsRate1.removeChild(oldstar3);
  starsRate1.removeChild(oldstar4);
  starsRate1.removeChild(oldstar5);

  let starscheck2 = 1;

  docRefblogReview2.get().then(function (doc) {
    if (doc.exists) {
      var detailsreview = doc.data();
      reviewName1.innerHTML = detailsreview.Name;
      var starsInteger = parseInt(detailsreview.stars);
      while (starscheck2 <= starsInteger) {
        var starcreate = document.createElement("img");
        starcreate.src = "star.png";
        starcreate.alt = "*";
        starcreate.className = "starcreate2";
        starcreate.id = "starcreate" + starscheck2;
        starsRate1.appendChild(starcreate);
        starscheck2++;
      }
      review1comment1.innerHTML = detailsreview.comment;
    } else {
      // doc.data() will be undefined in this case
      reviewName1.innerHTML = "Check Your Internet Connection";
      review1comment1.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    reviewName1.innerHTML = "Check Your Internet Connection";
    review1comment1.innerHTML = "Check Your Internet Connection";
  });
}, delayInMilliseconds2);



var delayInMilliseconds3 = 10000; //1 second

setTimeout(function () {

  var oldstar1 = document.getElementById("starcreate1");
  var oldstar2 = document.getElementById("starcreate2");
  var oldstar3 = document.getElementById("starcreate3");
  var oldstar4 = document.getElementById("starcreate4");
  var oldstar5 = document.getElementById("starcreate5");
  starsRate1.removeChild(oldstar1);
  starsRate1.removeChild(oldstar2);
  starsRate1.removeChild(oldstar3);
  starsRate1.removeChild(oldstar4);
  starsRate1.removeChild(oldstar5);

  let starscheck3 = 1;


  docRefblogReview3.get().then(function (doc) {
    if (doc.exists) {
      var detailsreview = doc.data();
      reviewName1.innerHTML = detailsreview.Name;
      var starsInteger = parseInt(detailsreview.stars);
      while (starscheck3 <= starsInteger) {
        var starcreate = document.createElement("img");
        starcreate.src = "star.png";
        starcreate.alt = "*";
        starcreate.className = "starcreate3";
        starcreate.id = "starcreate" + starscheck3;
        starsRate1.appendChild(starcreate);
        starscheck3++;
      }
      review1comment1.innerHTML = detailsreview.comment;
    } else {
      // doc.data() will be undefined in this case
      reviewName1.innerHTML = "Check Your Internet Connection";
      review1comment1.innerHTML = "Check Your Internet Connection";
    }
  }).catch(function (error) {
    reviewName1.innerHTML = "Check Your Internet Connection";
    review1comment1.innerHTML = "Check Your Internet Connection";
  });
}, delayInMilliseconds3);

myFunction();

// 5th page khatam 6th page suru shop wala


var signageboardoptionssectionxy = document.getElementById("pbox2y");


var sh1 = db.collection("shome").doc("sh1");
var sh2 = db.collection("shome").doc("sh2");
var sh3 = db.collection("shome").doc("sh3");
var sh4 = db.collection("shome").doc("sh4");
var sh5 = db.collection("shome").doc("sh5");



var sbbox1headnodexy;
var sbbox1xy = document.getElementById("sbbox1xy");
var sbbox1imageaxy = document.createElement("a");
var sbbox1imagexy = document.createElement("img");
sbbox1imagexy.alt = "Check your internet connection";
sbbox1imageaxy.href="/orderrequest";
sbbox1imageaxy.appendChild(sbbox1imagexy);
sbbox1xy.appendChild(sbbox1imageaxy);
var sbbox1headxy = document.createElement("p");
sh1.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    sbbox1headnodexy = document.createTextNode(sbservicedataxy.name);
    sbbox1headxy.appendChild(sbbox1headnodexy);
  }
}).catch(function (error) {
  sbbox1headnodexy = document.createTextNode("Check your internet connection");
  sbbox1headxy.appendChild(sbbox1headnodexy);
});
sbbox1xy.appendChild(sbbox1headxy);
sbbox1headxy.id = "sbbox1headxy";
sbbox1imagexy.id = "sbbox1imagexy";
sbbox1imageaxy.id = "sbbox1imageaxy";



var sbbox2headnodexy;
var sbbox2xy = document.getElementById("sbbox2xy");
var sbbox2imageaxy = document.createElement("a");
var sbbox2imagexy = document.createElement("img");
sbbox2imagexy.alt = "Check your internet connection";
sbbox2imageaxy.href="/orderrequest";

sbbox2imageaxy.appendChild(sbbox2imagexy);
sbbox2xy.appendChild(sbbox2imageaxy);
var sbbox2headxy = document.createElement("p");
sh2.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    sbbox2headnodexy = document.createTextNode(sbservicedataxy.name);
    sbbox2headxy.appendChild(sbbox2headnodexy);
  }
}).catch(function (error) {
  sbbox2headnodexy = document.createTextNode("Check your internet connection");
  sbbox2headxy.appendChild(sbbox2headnodexy);
});
sbbox2xy.appendChild(sbbox2headxy);
sbbox2headxy.id = "sbbox2headxy";
sbbox2imagexy.id = "sbbox2imagexy";
sbbox2imageaxy.id = "sbbox2imageaxy";




var sbbox3headnodexy;
var sbbox3xy = document.getElementById("sbbox3xy");
var sbbox3imageaxy = document.createElement("a");
var sbbox3imagexy = document.createElement("img");
sbbox3imagexy.alt = "Check your internet connection";
sbbox3imageaxy.href="/orderrequest";

sbbox3imageaxy.appendChild(sbbox3imagexy);
sbbox3xy.appendChild(sbbox3imageaxy);
var sbbox3headxy = document.createElement("p");
sh3.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    sbbox3headnodexy = document.createTextNode(sbservicedataxy.name);
    sbbox3headxy.appendChild(sbbox3headnodexy);
  }
}).catch(function (error) {
  sbbox3headnodexy = document.createTextNode("Check your internet connection");
  sbbox3headxy.appendChild(sbbox3headnodexy);
});
sbbox3xy.appendChild(sbbox3headxy);
sbbox3headxy.id = "sbbox3headxy";
sbbox3imagexy.id = "sbbox3imagexy";
sbbox3imageaxy.id = "sbbox3imageaxy";




var sbbox4headnodexy;
var sbbox4xy = document.getElementById("sbbox4xy");
var sbbox4imageaxy = document.createElement("a");
var sbbox4imagexy = document.createElement("img");
sbbox4imagexy.alt = "Check your internet connection";
sbbox4imageaxy.href="/orderrequest";

sbbox4imageaxy.appendChild(sbbox4imagexy);
sbbox4xy.appendChild(sbbox4imageaxy);
var sbbox4headxy = document.createElement("p");
sh4.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    sbbox4headnodexy= document.createTextNode(sbservicedataxy.name);
    sbbox4headxy.appendChild(sbbox4headnodexy);
  }
}).catch(function (error) {
  sbbox4headnodexy = document.createTextNode("Check your internet connection");
  sbbox4headxy.appendChild(sbbox4headnodexy);
});
sbbox4xy.appendChild(sbbox4headxy);
sbbox4headxy.id = "sbbox4headxy";
sbbox4imagexy.id = "sbbox4imagexy";
sbbox4imageaxy.id = "sbbox4imageaxy";




var sbbox5headnodexy;
var sbbox5xy= document.getElementById("sbbox5xy");
var sbbox5imageaxy = document.createElement("a");
var sbbox5imagexy = document.createElement("img");
sbbox5imagexy.alt = "Check your internet connection";
sbbox5imageaxy.href="/orderrequest";

sbbox5imageaxy.appendChild(sbbox5imagexy);
sbbox5xy.appendChild(sbbox5imageaxy);
var sbbox5headxy = document.createElement("p");
sh5.get().then(function (doc) {
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    sbbox5headnodexy = document.createTextNode(sbservicedataxy.name);
    sbbox5headxy.appendChild(sbbox5headnodexy);
  }
}).catch(function (error) {
  sbbox5headnodexy = document.createTextNode("Check your internet connection");
  sbbox5headxy.appendChild(sbbox5headnodexy);
});
sbbox5xy.appendChild(sbbox5headxy);
sbbox5headxy.id = "sbbox5headxy";
sbbox5imagexy.id = "sbbox5imagexy";
sbbox5imageaxy.id = "sbbox5imageaxy";


signageboardoptionssectionxy.appendChild(sbbox1xy);
signageboardoptionssectionxy.appendChild(sbbox2xy);
signageboardoptionssectionxy.appendChild(sbbox3xy);
signageboardoptionssectionxy.appendChild(sbbox4xy);
signageboardoptionssectionxy.appendChild(sbbox5xy);




storageRef.child('ShopHome/p1.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox1imagexy');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox1imagexy');
  img.alt = "Check your internet connection"
});

storageRef.child('ShopHome/p2.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox2imagexy');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox2imagexy');
  img.alt = "Check your internet connection"

});


storageRef.child('ShopHome/p3.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox3imagexy');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox3imagexy');
  img.alt = "Check your internet connection"
});


storageRef.child('ShopHome/p4.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox4imagexy');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox4imagexy');
  img.alt = "Check your internet connection"
});

storageRef.child('ShopHome/p5.jpeg').getDownloadURL().then(function (url) {
  // `url` is the download URL for 'images/stars.jpg'
  // Or inserted into an <img> element:
  var img = document.getElementById('sbbox5imagexy');
  img.src = url;
}).catch(function (error) {
  var img = document.getElementById('sbbox5imagexy');
  img.alt = "Check your internet connection"
});

// contact screen abb suru hogaa

var contactphone= document.getElementById("contactphone");


var conphone = db.collection("Contactinfo").doc("info"); 


conphone.get().then(function (doc) {  
  if (doc.exists) {
    var sbservicedataxy = doc.data();
    contactphone.innerHTML=sbservicedataxy.number;
  }
}).catch(function (error) {
  contactphone.innerHTML="Check your internet connection";
});
