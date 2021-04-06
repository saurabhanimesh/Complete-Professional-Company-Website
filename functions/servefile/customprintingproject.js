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
  
  var signageboardoptionssection = document.getElementById("signageboardoptionssection");
  
  
  
  
  var signageboardservice1 = db.collection("customprintingprojectservice").doc("customprintingproject");
  // var signageboardservice2 = db.collection("signageboardservice").doc("signageboard2");
  // var signageboardservice3 = db.collection("signageboardservice").doc("signageboard3");
  // var signageboardservice4 = db.collection("signageboardservice").doc("signageboard4");
  var totalServicesRef = db.collection("customprintingprojectservice").doc("totalServices");
  
  var totalservices;
  var totalservicestemp;
  var sbservicedatax;
  
  var totalchecking = 0;
  var extrachecking = 0;
  var extrachecking2 = 0;
  var i;
  var y;
  var c;
  var t;
  var o = 0;
  
  var bbdiv;
  var bbdivnode;
  var gliderdiv;
  var sbbox1 = [];
  var sbbox1imagea = [];
  
  bbdiv = document.createElement("p");
  bbdiv.innerHTML = "1";
  bbdiv.className = "bbdiv";
  bbdiv.id = "bbdiv";
  gliderdiv = document.getElementById("signageboardoptionssectionx");
  
  
  
  totalServicesRef.get().then(function (doc) {
    if (doc.exists) {
      sbservicedatax = doc.data();
      totalservicestemp = sbservicedatax.total;
      totalservices = parseInt(totalservicestemp);
  
      for (i = 0; i < totalservices; i++) {
        sbbox1[i] = document.createElement("div");
        gliderdiv.appendChild(sbbox1[i]);
      }
  
      for (y = 0; y < totalservices; y++) {
        sbbox1imagea[y] = document.createElement("a");
        sbbox1[y].id = "sbbox1" + y;
      }
  
      for (totalchecking = 0; totalchecking < totalservices; totalchecking++) {
  
        new Glider(document.querySelector('.glider'), {
          slidesToScroll: 1,
          slidesToShow: 5,
          draggable: true,
          dots: '.dots',
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          }
        });
  
        signageboardservice1.get().then(function (doc) {
          if (doc.exists) {
            console.log('hi')
            var sbbox1headnode;
            // sbbox1imagea[extrachecking2]= document.createElement("a");
            var sbbox1image = [];
            sbbox1image[extrachecking2] = document.createElement("img");
            sbbox1image[extrachecking2].alt = "Check your internet connection";
            sbbox1imagea[extrachecking2].appendChild(sbbox1image[extrachecking2]);
            sbbox1[extrachecking2].appendChild(sbbox1imagea[extrachecking2]);
            var sbbox1head;
  
            sbbox1head = document.createElement("p");
            var sbservicedata = doc.data();
            sbbox1headnode = document.createTextNode(sbservicedata["name" + extrachecking2]);
            sbbox1head.appendChild(sbbox1headnode);
  
            sbbox1[extrachecking2].appendChild(sbbox1head);
  
            // sbbox1[extrachecking2].id = "sbbox1" + extrachecking2;
            sbbox1head.id = "sbbox1head" + extrachecking2;
            sbbox1image[extrachecking2].id = "sbbox1image" + extrachecking2;
            sbbox1imagea[extrachecking2].id = "sbbox1imagea" + extrachecking2;
  
  
            sbbox1[extrachecking2].style.padding = "10px";
            sbbox1[extrachecking2].style.display = "flex";
            sbbox1[extrachecking2].style.flexDirection = "column";
  
  
            sbbox1[extrachecking2].style.justifyContent = "center";
            sbbox1[extrachecking2].style.alignItems = "center";
            if (totalchecking < totalservices - 1) {
              sbbox1[extrachecking2].style.marginRight = "50px";
            }
            else {
              sbbox1[extrachecking2].style.marginRight = "0px";
            }
  
            sbbox1head.style.margin = "0px";
            sbbox1head.style.color = "white";
            sbbox1head.style.marginTop = "7px";
            sbbox1head.style.fontFamily = "'Arapey', serif";
            sbbox1head.style.fontWeight = "bold";
            sbbox1head.style.fontSize = "20px";
  
            // sbbox1image[extrachecking2].style.width = "250px";
            // sbbox1image[extrachecking2].style.height = "250px";
            
            
  
            sbbox1image[extrachecking2].style.border = "3px solid white"
            sbbox1image[extrachecking2].style.borderRadius = "200px";
            sbbox1imagea[extrachecking2].style.transitionProperty = "all";
            sbbox1imagea[extrachecking2].style.transitionDuration = "0.5s";
            sbbox1imagea[extrachecking2].style.transitionTimingFunction = "ease-in-out";
  
  
            sbbox1imagea[extrachecking2].style.cursor = "pointer";
  
            extrachecking2++;
  
  
            storageRef.child('Customprintingproject/sb1.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image0');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image0');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb2.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image1');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image1');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb3.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image2');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image2');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb4.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image3');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image3');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb5.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image4');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image4');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb6.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image5');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image5');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb7.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image6');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image6');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb8.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image7');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image7');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb9.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image8');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image8');
              img.alt = "Check your internet connection";
            });
  
            storageRef.child('Customprintingproject/sb10.jpg').getDownloadURL().then(function (url) {
              var img = document.getElementById('sbbox1image9');
              img.src = url;
            }).catch(function (error) {
              var img = document.getElementById('sbbox1image9');
              img.alt = "Check your internet connection";
            });
  
  
  
            //console.log(totalchecking);  //yeha pe totalchecking 11 isliye hojaaraha hai kyuki ye then promise and all sab asynchronous hota hai jo jab totalchecking ka value 11 hoagya tab ye then promise chala hoga isliye value 11 hogaya hai
          }
        }).catch(function (error) {
          sbbox1headnode = document.createTextNode("Check your internet connection");
          sbbox1head.appendChild(sbbox1headnode);
          extrachecking2++;
        });
  
      }
  
      var signageboardindividualdetail = document.getElementById("signageboardindividualdetail");
  
      var sbbox1headnodex;
      var sbbox1headnode2x;
      var checkhover1 = 1;
  
  
      sbbox1imagea[0].addEventListener("click", () => {
  
        if (checkhover1 == 1 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
          var sbbox1x = document.createElement("div");
          var sbbox1imageax = document.createElement("a");
          var sbbox1imagex = document.createElement("img");
          sbbox1imagex.alt = "Check your internet connection";
          sbbox1imageax.appendChild(sbbox1imagex);
          sbbox1x.appendChild(sbbox1imageax);
          var sbbox1headx = document.createElement("p");
          var sbbox1head2x = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex = document.createTextNode(sbservicedata.about0);
              sbbox1headnode2x = document.createTextNode(sbservicedata.name0);
              sbbox1head2x.appendChild(sbbox1headnode2x);
              sbbox1headx.appendChild(sbbox1headnodex);
            }
          }).catch(function (error) {
            sbbox1headnodex = document.createTextNode("Check your internet connection");
            sbbox1headnode2x = document.createTextNode("Check your internet connection");
            sbbox1head2x.appendChild(sbbox1headnode2x);
            sbbox1headx.appendChild(sbbox1headnodex);
          });
          var aboutdivsb = document.createElement("div");
          aboutdivsb.appendChild(sbbox1head2x);
          aboutdivsb.appendChild(sbbox1headx);
          sbbox1x.appendChild(aboutdivsb);
          var buttonsdivsb = document.createElement("div");
          var button1sb = document.createElement("button");
          var button1sbnode = document.createTextNode("Contact Us");
          button1sb.appendChild(button1sbnode);
  
          // var button2sb = document.createElement("button");
          // var button2sbnode = document.createTextNode("Book Online");
          // button2sb.appendChild(button2sbnode);
  
  
          buttonsdivsb.appendChild(button1sb);
          // buttonsdivsb.appendChild(button2sb);
  
          aboutdivsb.appendChild(buttonsdivsb);
  
  
          sbbox1x.id = "sbbox1x";
          sbbox1headx.id = "sbbox1headx";
          sbbox1head2x.id = "sbbox1head2x";
          sbbox1imagex.id = "sbbox1imagex";
          sbbox1imageax.id = "sbbox1imageax";
          aboutdivsb.id = "aboutdivsb";
          buttonsdivsb.id = "buttonsdivsb";
          button1sb.id = "button1sb";
          // button2sb.id = "button2sb";
  
  
          signageboardindividualdetail.appendChild(sbbox1x);
  
          storageRef.child('Customprintingproject/sb1.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover1 = 0;
        }
        else {
          var child1 = document.getElementById("sbbox1x")
          signageboardindividualdetail.removeChild(child1);
          signageboardindividualdetail.style.height = "0px";
          checkhover1 = 1;
        }
      });
  
      var sbbox1headnodex2;
      var sbbox1headnode2x2;
      var checkhover12 = 1;
  
  
      sbbox1imagea[1].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 1 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
  
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
          var sbbox1x2 = document.createElement("div");
          var sbbox1imageax2 = document.createElement("a");
          var sbbox1imagex2 = document.createElement("img");
          sbbox1imagex2.alt = "Check your internet connection";
          sbbox1imageax2.appendChild(sbbox1imagex2);
          sbbox1x2.appendChild(sbbox1imageax2);
          var sbbox1headx2 = document.createElement("p");
          var sbbox1head2x2 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex2 = document.createTextNode(sbservicedata.about1);
              sbbox1headnode2x2 = document.createTextNode(sbservicedata.name1);
              sbbox1head2x2.appendChild(sbbox1headnode2x2);
              sbbox1headx2.appendChild(sbbox1headnodex2);
            }
          }).catch(function (error) {
            sbbox1headnodex2 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x2 = document.createTextNode("Check your internet connection");
            sbbox1head2x2.appendChild(sbbox1headnode2x2);
            sbbox1headx2.appendChild(sbbox1headnodex2);
          });
          var aboutdivsb2 = document.createElement("div");
          aboutdivsb2.appendChild(sbbox1head2x2);
          aboutdivsb2.appendChild(sbbox1headx2);
          sbbox1x2.appendChild(aboutdivsb2);
          var buttonsdivsb2 = document.createElement("div");
          var button1sb2 = document.createElement("button");
          var button1sbnode2 = document.createTextNode("Contact Us");
          button1sb2.appendChild(button1sbnode2);
  
          // var button2sb2 = document.createElement("button");
          // var button2sbnode2 = document.createTextNode("Book Online");
          // button2sb2.appendChild(button2sbnode2);
  
  
          buttonsdivsb2.appendChild(button1sb2);
          // buttonsdivsb2.appendChild(button2sb2);
  
          aboutdivsb2.appendChild(buttonsdivsb2);
  
  
          sbbox1x2.id = "sbbox1x2";
          sbbox1headx2.id = "sbbox1headx2";
          sbbox1head2x2.id = "sbbox1head2x2";
          sbbox1imagex2.id = "sbbox1imagex2";
          sbbox1imageax2.id = "sbbox1imageax2";
          aboutdivsb2.id = "aboutdivsb2";
          buttonsdivsb2.id = "buttonsdivsb2";
          button1sb2.id = "button1sb2";
          // button2sb2.id = "button2sb2";
  
  
          signageboardindividualdetail.appendChild(sbbox1x2);
  
          storageRef.child('Customprintingproject/sb2.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex2');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex2');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover12 = 0;
        }
        else {
          var child12 = document.getElementById("sbbox1x2");
          signageboardindividualdetail.removeChild(child12);
          signageboardindividualdetail.style.height = "0px";
          checkhover12 = 1;
        }
      });
  
  
      var sbbox1headnodex3;
      var sbbox1headnode2x3;
      var checkhover13 = 1;
  
  
      sbbox1imagea[2].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 1 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
          var sbbox1x3 = document.createElement("div");
          var sbbox1imageax3 = document.createElement("a");
          var sbbox1imagex3 = document.createElement("img");
          sbbox1imagex3.alt = "Check your internet connection";
          sbbox1imageax3.appendChild(sbbox1imagex3);
          sbbox1x3.appendChild(sbbox1imageax3);
          var sbbox1headx3 = document.createElement("p");
          var sbbox1head2x3 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex3 = document.createTextNode(sbservicedata.about2);
              sbbox1headnode2x3 = document.createTextNode(sbservicedata.name2);
              sbbox1head2x3.appendChild(sbbox1headnode2x3);
              sbbox1headx3.appendChild(sbbox1headnodex3);
            }
          }).catch(function (error) {
            sbbox1headnodex3 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x3 = document.createTextNode("Check your internet connection");
            sbbox1head2x3.appendChild(sbbox1headnode2x3);
            sbbox1headx3.appendChild(sbbox1headnodex3);
          });
          var aboutdivsb3 = document.createElement("div");
          aboutdivsb3.appendChild(sbbox1head2x3);
          aboutdivsb3.appendChild(sbbox1headx3);
          sbbox1x3.appendChild(aboutdivsb3);
          var buttonsdivsb3 = document.createElement("div");
          var button1sb3 = document.createElement("button");
          var button1sbnode3 = document.createTextNode("Contact Us");
          button1sb3.appendChild(button1sbnode3);
  
          // var button2sb3 = document.createElement("button");
          // var button2sbnode3 = document.createTextNode("Book Online");
          // button2sb3.appendChild(button2sbnode3);
  
  
          buttonsdivsb3.appendChild(button1sb3);
          // buttonsdivsb3.appendChild(button2sb3);
  
          aboutdivsb3.appendChild(buttonsdivsb3);
  
          sbbox1x3.id = "sbbox1x3";
          sbbox1headx3.id = "sbbox1headx3";
          sbbox1head2x3.id = "sbbox1head2x3";
          sbbox1imagex3.id = "sbbox1imagex3";
          sbbox1imageax3.id = "sbbox1imageax3";
          aboutdivsb3.id = "aboutdivsb3";
          buttonsdivsb3.id = "buttonsdivsb3";
          button1sb3.id = "button1sb3";
          // button2sb3.id = "button2sb3";
  
  
          signageboardindividualdetail.appendChild(sbbox1x3);
  
          storageRef.child('Customprintingproject/sb3.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex3');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex3');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover13 = 0;
        }
        else {
          var child13 = document.getElementById("sbbox1x3");
          signageboardindividualdetail.removeChild(child13);
          signageboardindividualdetail.style.height = "0px";
          checkhover13 = 1;
        }
      });
  
  
      var sbbox1headnodex4;
      var sbbox1headnode2x4;
      var checkhover14 = 1;
  
  
      sbbox1imagea[3].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 1 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
  
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
  
          var sbbox1x4 = document.createElement("div");
          var sbbox1imageax4 = document.createElement("a");
          var sbbox1imagex4 = document.createElement("img");
          sbbox1imagex4.alt = "Check your internet connection";
          sbbox1imageax4.appendChild(sbbox1imagex4);
          sbbox1x4.appendChild(sbbox1imageax4);
          var sbbox1headx4 = document.createElement("p");
          var sbbox1head2x4 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex4 = document.createTextNode(sbservicedata.about3);
              sbbox1headnode2x4 = document.createTextNode(sbservicedata.name3);
              sbbox1head2x4.appendChild(sbbox1headnode2x4);
              sbbox1headx4.appendChild(sbbox1headnodex4);
            }
          }).catch(function (error) {
            sbbox1headnodex4 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x4 = document.createTextNode("Check your internet connection");
            sbbox1head2x4.appendChild(sbbox1headnode2x4);
            sbbox1headx4.appendChild(sbbox1headnodex4);
          });
          var aboutdivsb4 = document.createElement("div");
          aboutdivsb4.appendChild(sbbox1head2x4);
          aboutdivsb4.appendChild(sbbox1headx4);
          sbbox1x4.appendChild(aboutdivsb4);
          var buttonsdivsb4 = document.createElement("div");
          var button1sb4 = document.createElement("button");
          var button1sbnode4 = document.createTextNode("Contact Us");
          button1sb4.appendChild(button1sbnode4);
  
          // var button2sb4 = document.createElement("button");
          // var button2sbnode4 = document.createTextNode("Book Online");
          // button2sb4.appendChild(button2sbnode4);
  
  
          buttonsdivsb4.appendChild(button1sb4);
          // buttonsdivsb4.appendChild(button2sb4);
  
          aboutdivsb4.appendChild(buttonsdivsb4);
  
  
          sbbox1x4.id = "sbbox1x4";
          sbbox1headx4.id = "sbbox1headx4";
          sbbox1head2x4.id = "sbbox1head2x4";
          sbbox1imagex4.id = "sbbox1imagex4";
          sbbox1imageax4.id = "sbbox1imageax4";
          aboutdivsb4.id = "aboutdivsb4";
          buttonsdivsb4.id = "buttonsdivsb4";
          button1sb4.id = "button1sb4";
          // button2sb4.id = "button2sb4";
  
  
          signageboardindividualdetail.appendChild(sbbox1x4);
  
          storageRef.child('Customprintingproject/sb4.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex4');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex4');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover14 = 0;
        }
        else {
          var child14 = document.getElementById("sbbox1x4");
          signageboardindividualdetail.removeChild(child14);
          signageboardindividualdetail.style.height = "0px";
          checkhover14 = 1;
        }
      });
  
  
      var sbbox1headnodex5;
      var sbbox1headnode2x5;
      var checkhover15 = 1;
  
  
      sbbox1imagea[4].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 1 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
  
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
          var sbbox1x5 = document.createElement("div");
          var sbbox1imageax5 = document.createElement("a");
          var sbbox1imagex5 = document.createElement("img");
          sbbox1imagex5.alt = "Check your internet connection";
          sbbox1imageax5.appendChild(sbbox1imagex5);
          sbbox1x5.appendChild(sbbox1imageax5);
          var sbbox1headx5 = document.createElement("p");
          var sbbox1head2x5 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex5 = document.createTextNode(sbservicedata.about4);
              sbbox1headnode2x5 = document.createTextNode(sbservicedata.name4);
              sbbox1head2x5.appendChild(sbbox1headnode2x5);
              sbbox1headx5.appendChild(sbbox1headnodex5);
            }
          }).catch(function (error) {
            sbbox1headnodex5 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x5 = document.createTextNode("Check your internet connection");
            sbbox1head2x5.appendChild(sbbox1headnode2x5);
            sbbox1headx5.appendChild(sbbox1headnodex5);
          });
          var aboutdivsb5 = document.createElement("div");
          aboutdivsb5.appendChild(sbbox1head2x5);
          aboutdivsb5.appendChild(sbbox1headx5);
          sbbox1x5.appendChild(aboutdivsb5);
          var buttonsdivsb5 = document.createElement("div");
          var button1sb5 = document.createElement("button");
          var button1sbnode5 = document.createTextNode("Contact Us");
          button1sb5.appendChild(button1sbnode5);
  
          // var button2sb5 = document.createElement("button");
          // var button2sbnode5 = document.createTextNode("Book Online");
          // button2sb5.appendChild(button2sbnode5);
  
  
          buttonsdivsb5.appendChild(button1sb5);
          // buttonsdivsb5.appendChild(button2sb5);
  
          aboutdivsb5.appendChild(buttonsdivsb5);
  
  
          sbbox1x5.id = "sbbox1x5";
          sbbox1headx5.id = "sbbox1headx5";
          sbbox1head2x5.id = "sbbox1head2x5";
          sbbox1imagex5.id = "sbbox1imagex5";
          sbbox1imageax5.id = "sbbox1imageax5";
          aboutdivsb5.id = "aboutdivsb5";
          buttonsdivsb5.id = "buttonsdivsb5";
          button1sb5.id = "button1sb5";
          // button2sb5.id = "button2sb5";
  
  
          signageboardindividualdetail.appendChild(sbbox1x5);
  
          storageRef.child('Customprintingproject/sb5.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex5');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex5');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover15 = 0;
        }
        else {
          var child15 = document.getElementById("sbbox1x5");
          signageboardindividualdetail.removeChild(child15);
          signageboardindividualdetail.style.height = "0px";
          checkhover15 = 1;
        }
      });
  
  
      var sbbox1headnodex6;
      var sbbox1headnode2x6;
      var checkhover16 = 1;
  
  
      sbbox1imagea[5].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 1 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
  
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
  
          var sbbox1x6 = document.createElement("div");
          var sbbox1imageax6 = document.createElement("a");
          var sbbox1imagex6 = document.createElement("img");
          sbbox1imagex6.alt = "Check your internet connection";
          sbbox1imageax6.appendChild(sbbox1imagex6);
          sbbox1x6.appendChild(sbbox1imageax6);
          var sbbox1headx6 = document.createElement("p");
          var sbbox1head2x6 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex6 = document.createTextNode(sbservicedata.about5);
              sbbox1headnode2x6 = document.createTextNode(sbservicedata.name5);
              sbbox1head2x6.appendChild(sbbox1headnode2x6);
              sbbox1headx6.appendChild(sbbox1headnodex6);
            }
          }).catch(function (error) {
            sbbox1headnodex6 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x6 = document.createTextNode("Check your internet connection");
            sbbox1head2x6.appendChild(sbbox1headnode2x6);
            sbbox1headx6.appendChild(sbbox1headnodex6);
          });
  
          var aboutdivsb6 = document.createElement("div");
          aboutdivsb6.appendChild(sbbox1head2x6);
          aboutdivsb6.appendChild(sbbox1headx6);
          sbbox1x6.appendChild(aboutdivsb6);
          var buttonsdivsb6 = document.createElement("div");
          var button1sb6 = document.createElement("button");
          var button1sbnode6 = document.createTextNode("Call Now");
          button1sb6.appendChild(button1sbnode6);
  
          // var button2sb6 = document.createElement("button");
          // var button2sbnode6 = document.createTextNode("Book Online");
          // button2sb6.appendChild(button2sbnode6);
  
  
          buttonsdivsb6.appendChild(button1sb6);
          // buttonsdivsb6.appendChild(button2sb6);
  
          aboutdivsb6.appendChild(buttonsdivsb6);
  
  
          sbbox1x6.id = "sbbox1x6";
          sbbox1headx6.id = "sbbox1headx6";
          sbbox1head2x6.id = "sbbox1head2x6";
          sbbox1imagex6.id = "sbbox1imagex6";
          sbbox1imageax6.id = "sbbox1imageax6";
          aboutdivsb6.id = "aboutdivsb6";
          buttonsdivsb6.id = "buttonsdivsb6";
          button1sb6.id = "button1sb6";
          // button2sb6.id = "button2sb6";
  
  
          signageboardindividualdetail.appendChild(sbbox1x6);
  
          storageRef.child('Customprintingproject/sb6.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex6');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex6');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover16 = 0;
        }
        else {
          var child16 = document.getElementById("sbbox1x6");
          signageboardindividualdetail.removeChild(child16);
          signageboardindividualdetail.style.height = "0px";
          checkhover16 = 1;
        }
      });
  
  
      var sbbox1headnodex7;
      var sbbox1headnode2x7;
      var checkhover17 = 1;
  
  
      sbbox1imagea[6].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 1 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 0) {
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
  
          var sbbox1x7 = document.createElement("div");
          var sbbox1imageax7 = document.createElement("a");
          var sbbox1imagex7 = document.createElement("img");
          sbbox1imagex7.alt = "Check your internet connection";
          sbbox1imageax7.appendChild(sbbox1imagex7);
          sbbox1x7.appendChild(sbbox1imageax7);
          var sbbox1headx7 = document.createElement("p");
          var sbbox1head2x7 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex7 = document.createTextNode(sbservicedata.about6);
              sbbox1headnode2x7 = document.createTextNode(sbservicedata.name6);
              sbbox1head2x7.appendChild(sbbox1headnode2x7);
              sbbox1headx7.appendChild(sbbox1headnodex7);
            }
          }).catch(function (error) {
            sbbox1headnodex7 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x7 = document.createTextNode("Check your internet connection");
            sbbox1head2x7.appendChild(sbbox1headnode2x7);
            sbbox1headx7.appendChild(sbbox1headnodex7);
          });
  
          var aboutdivsb7 = document.createElement("div");
          aboutdivsb7.appendChild(sbbox1head2x7);
          aboutdivsb7.appendChild(sbbox1headx7);
          sbbox1x7.appendChild(aboutdivsb7);
          var buttonsdivsb7 = document.createElement("div");
          var button1sb7 = document.createElement("button");
          var button1sbnode7 = document.createTextNode("Call Now");
          button1sb7.appendChild(button1sbnode7);
  
          // var button2sb7 = document.createElement("button");
          // var button2sbnode7 = document.createTextNode("Book Online");
          // button2sb7.appendChild(button2sbnode7);
  
  
          buttonsdivsb7.appendChild(button1sb7);
          // buttonsdivsb7.appendChild(button2sb7);
  
          aboutdivsb7.appendChild(buttonsdivsb7);
  
  
          sbbox1x7.id = "sbbox1x7";
          sbbox1headx7.id = "sbbox1headx7";
          sbbox1head2x7.id = "sbbox1head2x7";
          sbbox1imagex7.id = "sbbox1imagex7";
          sbbox1imageax7.id = "sbbox1imageax7";
          aboutdivsb7.id = "aboutdivsb7";
          buttonsdivsb7.id = "buttonsdivsb7";
          button1sb7.id = "button1sb7";
          // button2sb7.id = "button2sb7";
  
  
          signageboardindividualdetail.appendChild(sbbox1x7);
  
          storageRef.child('Customprintingproject/sb7.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex7');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex7');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover17 = 0;
        }
        else {
          var child17 = document.getElementById("sbbox1x7");
          signageboardindividualdetail.removeChild(child17);
          signageboardindividualdetail.style.height = "0px";
          checkhover17 = 1;
        }
      });
  
  
      var sbbox1headnodex8;
      var sbbox1headnode2x8;
      var checkhover18 = 1;
  
  
      sbbox1imagea[7].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 1 || checkhover19 == 0 || checkhover110 == 0) {
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
          var sbbox1x8 = document.createElement("div");
          var sbbox1imageax8 = document.createElement("a");
          var sbbox1imagex8 = document.createElement("img");
          sbbox1imagex8.alt = "Check your internet connection";
          sbbox1imageax8.appendChild(sbbox1imagex8);
          sbbox1x8.appendChild(sbbox1imageax8);
          var sbbox1headx8 = document.createElement("p");
          var sbbox1head2x8 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex8 = document.createTextNode(sbservicedata.about7);
              sbbox1headnode2x8 = document.createTextNode(sbservicedata.name7);
              sbbox1head2x8.appendChild(sbbox1headnode2x8);
              sbbox1headx8.appendChild(sbbox1headnodex8);
            }
          }).catch(function (error) {
            sbbox1headnodex8 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x8 = document.createTextNode("Check your internet connection");
            sbbox1head2x8.appendChild(sbbox1headnode2x8);
            sbbox1headx8.appendChild(sbbox1headnodex8);
          });
  
          var aboutdivsb8 = document.createElement("div");
          aboutdivsb8.appendChild(sbbox1head2x8);
          aboutdivsb8.appendChild(sbbox1headx8);
          sbbox1x8.appendChild(aboutdivsb8);
          var buttonsdivsb8 = document.createElement("div");
          var button1sb8 = document.createElement("button");
          var button1sbnode8 = document.createTextNode("Call Now");
          button1sb8.appendChild(button1sbnode8);
  
          // var button2sb8 = document.createElement("button");
          // var button2sbnode8 = document.createTextNode("Book Online");
          // button2sb8.appendChild(button2sbnode8);
  
  
          buttonsdivsb8.appendChild(button1sb8);
          // buttonsdivsb8.appendChild(button2sb8);
  
          aboutdivsb8.appendChild(buttonsdivsb8);
  
  
          sbbox1x8.id = "sbbox1x8";
          sbbox1headx8.id = "sbbox1headx8";
          sbbox1head2x8.id = "sbbox1head2x8";
          sbbox1imagex8.id = "sbbox1imagex8";
          sbbox1imageax8.id = "sbbox1imageax8";
          aboutdivsb8.id = "aboutdivsb8";
          buttonsdivsb8.id = "buttonsdivsb8";
          button1sb8.id = "button1sb8";
          // button2sb8.id = "button2sb8";
  
  
          signageboardindividualdetail.appendChild(sbbox1x8);
  
          storageRef.child('Customprintingproject/sb8.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex8');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex8');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover18 = 0;
        }
        else {
          var child18 = document.getElementById("sbbox1x8");
          signageboardindividualdetail.removeChild(child18);
          signageboardindividualdetail.style.height = "0px";
          checkhover18 = 1;
        }
      });
  
  
      var sbbox1headnodex9;
      var sbbox1headnode2x9;
      var checkhover19 = 1;
  
  
      sbbox1imagea[8].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 1 || checkhover110 == 0) {
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
          if (checkhover110 == 0) {
            var child110 = document.getElementById("sbbox1x10")
            signageboardindividualdetail.removeChild(child110);
            signageboardindividualdetail.style.height = "0px";
            checkhover110 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
  
          var sbbox1x9 = document.createElement("div");
          var sbbox1imageax9 = document.createElement("a");
          var sbbox1imagex9 = document.createElement("img");
          sbbox1imagex9.alt = "Check your internet connection";
          sbbox1imageax9.appendChild(sbbox1imagex9);
          sbbox1x9.appendChild(sbbox1imageax9);
          var sbbox1headx9 = document.createElement("p");
          var sbbox1head2x9 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex9 = document.createTextNode(sbservicedata.about8);
              sbbox1headnode2x9 = document.createTextNode(sbservicedata.name8);
              sbbox1head2x9.appendChild(sbbox1headnode2x9);
              sbbox1headx9.appendChild(sbbox1headnodex9);
            }
          }).catch(function (error) {
            sbbox1headnodex9 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x9 = document.createTextNode("Check your internet connection");
            sbbox1head2x9.appendChild(sbbox1headnode2x9);
            sbbox1headx9.appendChild(sbbox1headnodex9);
          });
  
          var aboutdivsb9 = document.createElement("div");
          aboutdivsb9.appendChild(sbbox1head2x9);
          aboutdivsb9.appendChild(sbbox1headx9);
          sbbox1x9.appendChild(aboutdivsb9);
          var buttonsdivsb9 = document.createElement("div");
          var button1sb9 = document.createElement("button");
          var button1sbnode9 = document.createTextNode("Contact Us");
          button1sb9.appendChild(button1sbnode9);
  
          // var button2sb9 = document.createElement("button");
          // var button2sbnode9 = document.createTextNode("Book Online");
          // button2sb9.appendChild(button2sbnode9);
  
  
          buttonsdivsb9.appendChild(button1sb9);
          // buttonsdivsb9.appendChild(button2sb9);
  
          aboutdivsb9.appendChild(buttonsdivsb9);
  
  
          sbbox1x9.id = "sbbox1x9";
          sbbox1headx9.id = "sbbox1headx9";
          sbbox1head2x9.id = "sbbox1head2x9";
          sbbox1imagex9.id = "sbbox1imagex9";
          sbbox1imageax9.id = "sbbox1imageax9";
          aboutdivsb9.id = "aboutdivsb9";
          buttonsdivsb9.id = "buttonsdivsb9";
          button1sb9.id = "button1sb9";
          // button2sb9.id = "button2sb9";
  
  
          signageboardindividualdetail.appendChild(sbbox1x9);
  
          storageRef.child('Customprintingproject/sb9.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex9');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex9');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover19 = 0;
        }
        else {
          var child19 = document.getElementById("sbbox1x9");
          signageboardindividualdetail.removeChild(child19);
          signageboardindividualdetail.style.height = "0px";
          checkhover19 = 1;
        }
      });
  
  
      var sbbox1headnodex10;
      var sbbox1headnode2x10;
      var checkhover110 = 1;
  
  
      sbbox1imagea[9].addEventListener("click", () => {
  
        if (checkhover1 == 0 || checkhover12 == 0 || checkhover13 == 0 || checkhover14 == 0 || checkhover15 == 0 || checkhover16 == 0 || checkhover17 == 0 || checkhover18 == 0 || checkhover19 == 0 || checkhover110 == 1) {
  
          if (checkhover12 == 0) {
            var child12 = document.getElementById("sbbox1x2")
            signageboardindividualdetail.removeChild(child12);
            signageboardindividualdetail.style.height = "0px";
            checkhover12 = 1;
          }
          if (checkhover13 == 0) {
            var child13 = document.getElementById("sbbox1x3")
            signageboardindividualdetail.removeChild(child13);
            signageboardindividualdetail.style.height = "0px";
            checkhover13 = 1;
  
          }
          if (checkhover14 == 0) {
            var child14 = document.getElementById("sbbox1x4")
            signageboardindividualdetail.removeChild(child14);
            signageboardindividualdetail.style.height = "0px";
            checkhover14 = 1;
  
          }
          if (checkhover15 == 0) {
            var child15 = document.getElementById("sbbox1x5")
            signageboardindividualdetail.removeChild(child15);
            signageboardindividualdetail.style.height = "0px";
            checkhover15 = 1;
  
          }
          if (checkhover16 == 0) {
            var child16 = document.getElementById("sbbox1x6")
            signageboardindividualdetail.removeChild(child16);
            signageboardindividualdetail.style.height = "0px";
            checkhover16 = 1;
  
          }
          if (checkhover17 == 0) {
            var child17 = document.getElementById("sbbox1x7")
            signageboardindividualdetail.removeChild(child17);
            signageboardindividualdetail.style.height = "0px";
            checkhover17 = 1;
  
          }
          if (checkhover18 == 0) {
            var child18 = document.getElementById("sbbox1x8")
            signageboardindividualdetail.removeChild(child18);
            signageboardindividualdetail.style.height = "0px";
            checkhover18 = 1;
  
          }
          if (checkhover19 == 0) {
            var child19 = document.getElementById("sbbox1x9")
            signageboardindividualdetail.removeChild(child19);
            signageboardindividualdetail.style.height = "0px";
            checkhover19 = 1;
  
          }
          if (checkhover1 == 0) {
            var child1 = document.getElementById("sbbox1x")
            signageboardindividualdetail.removeChild(child1);
            signageboardindividualdetail.style.height = "0px";
            checkhover1 = 1;
  
          }
  
          function myFunction(x) {
            if (x.matches) { // If media query matches
              signageboardindividualdetail.style.height="1000px";
            } else {
              signageboardindividualdetail.style.height = "800px";
  
  
            }
          }
          
          var x = window.matchMedia("(max-width: 1130px)")
          myFunction(x) // Call listener function at run time
          x.addListener(myFunction) // Attach listener function on state changes
          
          var sbbox1x10 = document.createElement("div");
          var sbbox1imageax10 = document.createElement("a");
          var sbbox1imagex10 = document.createElement("img");
          sbbox1imagex10.alt = "Check your internet connection";
          sbbox1imageax10.appendChild(sbbox1imagex10);
          sbbox1x10.appendChild(sbbox1imageax10);
          var sbbox1headx10 = document.createElement("p");
          var sbbox1head2x10 = document.createElement("h");
          signageboardservice1.get().then(function (doc) {
            if (doc.exists) {
              var sbservicedata = doc.data();
              sbbox1headnodex10 = document.createTextNode(sbservicedata.about9);
              sbbox1headnode2x10 = document.createTextNode(sbservicedata.name9);
              sbbox1head2x10.appendChild(sbbox1headnode2x10);
              sbbox1headx10.appendChild(sbbox1headnodex10);
            }
          }).catch(function (error) {
            sbbox1headnodex10 = document.createTextNode("Check your internet connection");
            sbbox1headnode2x10 = document.createTextNode("Check your internet connection");
            sbbox1head2x10.appendChild(sbbox1headnode2x10);
            sbbox1headx10.appendChild(sbbox1headnodex10);
          });
  
          var aboutdivsb10 = document.createElement("div");
          aboutdivsb10.appendChild(sbbox1head2x10);
          aboutdivsb10.appendChild(sbbox1headx10);
          sbbox1x10.appendChild(aboutdivsb10);
          var buttonsdivsb10 = document.createElement("div");
          var button1sb10 = document.createElement("button");
          var button1sbnode10 = document.createTextNode("Call Now");
          button1sb10.appendChild(button1sbnode10);
  
          // var button2sb10 = document.createElement("button");
          // var button2sbnode10 = document.createTextNode("Book Online");
          // button2sb10.appendChild(button2sbnode10);
  
  
          buttonsdivsb10.appendChild(button1sb10);
          // buttonsdivsb10.appendChild(button2sb10);
  
          aboutdivsb10.appendChild(buttonsdivsb10);
  
  
          sbbox1x10.id = "sbbox1x10";
          sbbox1headx10.id = "sbbox1headx10";
          sbbox1head2x10.id = "sbbox1head2x10";
          sbbox1imagex10.id = "sbbox1imagex10";
          sbbox1imageax10.id = "sbbox1imageax10";
          aboutdivsb10.id = "aboutdivsb10";
          buttonsdivsb10.id = "buttonsdivsb10";
          button1sb10.id = "button1sb10";
          // button2sb10.id = "button2sb10";
  
  
          signageboardindividualdetail.appendChild(sbbox1x10);
  
          storageRef.child('Customprintingproject/sb10.jpg').getDownloadURL().then(function (url) {
            var img = document.getElementById('sbbox1imagex10');
            img.src = url;
          }).catch(function (error) {
            var img = document.getElementById('sbbox1imagex10');
            img.alt = "Check your internet connection"
          });
  
          var newclick = document.createElement("a");
          newclick.href = "#signageboardindividualdetail";
          newclick.click();
          checkhover110 = 0;
        }
        else {
          var child110 = document.getElementById("sbbox1x10");
          signageboardindividualdetail.removeChild(child110);
          signageboardindividualdetail.style.height = "0px";
          checkhover110 = 1;
        }
      });
  
  
    }
  }).catch(function (error) {
    totalservices = 0;
  });
  
  
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
  
  
  
  
  
  
  
  
  
  
  
  // var sbbox1headnode;
  // var sbbox1 = document.createElement("div");
  // var sbbox1imagea = document.createElement("a");
  // var sbbox1image = document.createElement("img");
  // sbbox1image.alt = "Check your internet connection";
  // sbbox1imagea.appendChild(sbbox1image);
  // sbbox1.appendChild(sbbox1imagea);
  // var sbbox1head = document.createElement("p");
  // signageboardservice1.get().then(function (doc) {
  //   if (doc.exists) {
  //     var sbservicedata = doc.data();
  //     sbbox1headnode = document.createTextNode(sbservicedata.name);
  //     sbbox1head.appendChild(sbbox1headnode);
  //   }
  // }).catch(function (error) {
  //   sbbox1headnode = document.createTextNode("Check your internet connection");
  //   sbbox1head.appendChild(sbbox1headnode);
  // });
  // sbbox1.appendChild(sbbox1head);
  // sbbox1.id = "sbbox1";
  // sbbox1head.id = "sbbox1head";
  // sbbox1image.id = "sbbox1image";
  // sbbox1imagea.id = "sbbox1imagea";
  
  // var signageboardindividualdetail = document.getElementById("signageboardindividualdetail");
  
  // var sbbox1headnodex;
  // var sbbox1headnode2x;
  // var checkhover1 = 1;
  
  
  // sbbox1imagea.addEventListener("click", () => {
  
  //   if (checkhover1 == 1) {
  //     signageboardindividualdetail.style.height = "800px";
  
  //     var sbbox1x = document.createElement("div");
  //     var sbbox1imageax = document.createElement("a");
  //     var sbbox1imagex = document.createElement("img");
  //     sbbox1imagex.alt = "Check your internet connection";
  //     sbbox1imageax.appendChild(sbbox1imagex);
  //     sbbox1x.appendChild(sbbox1imageax);
  //     var sbbox1headx = document.createElement("p");
  //     var sbbox1head2x = document.createElement("h");
  //     signageboardservice1.get().then(function (doc) {
  //       if (doc.exists) {
  //         var sbservicedata = doc.data();
  //         sbbox1headnodex = document.createTextNode(sbservicedata.about);
  //         sbbox1headnode2x = document.createTextNode(sbservicedata.name);
  //         sbbox1head2x.appendChild(sbbox1headnode2x);
  //         sbbox1headx.appendChild(sbbox1headnodex);
  //       }
  //     }).catch(function (error) {
  //       sbbox1headnodex = document.createTextNode("Check your internet connection");
  //       sbbox1headnode2x = document.createTextNode("Check your internet connection");
  //       sbbox1head2x.appendChild(sbbox1headnode2x);
  //       sbbox1headx.appendChild(sbbox1headnodex);
  //     });
  //     var aboutdivsb = document.createElement("div");
  //     aboutdivsb.appendChild(sbbox1head2x);
  //     aboutdivsb.appendChild(sbbox1headx);
  //     sbbox1x.appendChild(aboutdivsb);
  //     var buttonsdivsb = document.createElement("div");
  //     var button1sb = document.createElement("button");
  //     var button1sbnode = document.createTextNode("Call Now");
  //     button1sb.appendChild(button1sbnode);
  
  //     var button2sb = document.createElement("button");
  //     var button2sbnode = document.createTextNode("Book Online");
  //     button2sb.appendChild(button2sbnode);
  
  
  //     buttonsdivsb.appendChild(button1sb);
  //     buttonsdivsb.appendChild(button2sb);
  
  //     aboutdivsb.appendChild(buttonsdivsb);
  
  
  //     sbbox1x.id = "sbbox1x";
  //     sbbox1headx.id = "sbbox1headx";
  //     sbbox1head2x.id = "sbbox1head2x";
  //     sbbox1imagex.id = "sbbox1imagex";
  //     sbbox1imageax.id = "sbbox1imageax";
  //     aboutdivsb.id = "aboutdivsb";
  //     buttonsdivsb.id = "buttonsdivsb";
  //     button1sb.id = "button1sb";
  //     button2sb.id = "button2sb";
  
  
  //     signageboardindividualdetail.appendChild(sbbox1x);
  
  //     storageRef.child('SignageBoard/sba.jpeg').getDownloadURL().then(function (url) {
  //       // `url` is the download URL for 'images/stars.jpg'
  //       // Or inserted into an <img> element:
  //       var img = document.getElementById('sbbox1imagex');
  //       img.src = url;
  //     }).catch(function (error) {
  //       var img = document.getElementById('sbbox1imagex');
  //       img.alt = "Check your internet connection"
  
  //     });
  
  //     var newclick = document.createElement("a");
  //     newclick.href = "#signageboardindividualdetail";
  //     newclick.click();
  //     checkhover1 = 0;
  
  //   }
  //   else {
  //     var child1 = document.getElementById("sbbox1x")
  //     signageboardindividualdetail.removeChild(child1);
  //     signageboardindividualdetail.style.height = "0px";
  //     checkhover1 = 1;
  //   }
  
  // });
  
  // if(checkhover1== 1)
  // {
  
  //   signageboardindividualdetail.style.height="800px";
  
  
  // var sbbox1x = document.createElement("div");
  // var sbbox1imageax = document.createElement("a");
  // var sbbox1imagex = document.createElement("img");
  // sbbox1imagex.alt = "Check your internet connection";
  // sbbox1imageax.appendChild(sbbox1imagex);
  // sbbox1x.appendChild(sbbox1imageax);
  // var sbbox1headx = document.createElement("p");
  // var sbbox1head2x = document.createElement("h");
  // signageboardservice1.get().then(function (doc) {
  //   if (doc.exists) {
  //     var sbservicedata = doc.data();
  //     sbbox1headnodex = document.createTextNode(sbservicedata.about);
  //     sbbox1headnode2x = document.createTextNode(sbservicedata.name);
  //     sbbox1head2x.appendChild(sbbox1headnode2x);
  //     sbbox1headx.appendChild(sbbox1headnodex);
  //   }
  // }).catch(function (error) {
  //   sbbox1headnodex = document.createTextNode("Check your internet connection");
  //   sbbox1headnode2x = document.createTextNode("Check your internet connection");
  //   sbbox1head2x.appendChild(sbbox1headnode2x);
  //   sbbox1headx.appendChild(sbbox1headnodex);
  // });
  // var aboutdivsb = document.createElement("div");
  // aboutdivsb.appendChild(sbbox1head2x);
  // aboutdivsb.appendChild(sbbox1headx);
  // sbbox1x.appendChild(aboutdivsb);
  // var buttonsdivsb=document.createElement("div");
  // var button1sb=document.createElement("button");
  // var button1sbnode=document.createTextNode("Call Now");
  // button1sb.appendChild(button1sbnode);
  
  // var button2sb=document.createElement("button");
  // var button2sbnode=document.createTextNode("Book Online");
  // button2sb.appendChild(button2sbnode);
  
  
  // buttonsdivsb.appendChild(button1sb);
  // buttonsdivsb.appendChild(button2sb);
  
  // aboutdivsb.appendChild(buttonsdivsb);
  
  
  // sbbox1x.id = "sbbox1x";
  // sbbox1headx.id = "sbbox1headx";
  // sbbox1head2x.id = "sbbox1head2x";
  // sbbox1imagex.id = "sbbox1imagex";
  // sbbox1imageax.id = "sbbox1imageax";
  // aboutdivsb.id = "aboutdivsb";
  // buttonsdivsb.id="buttonsdivsb";
  // button1sb.id="button1sb";
  // button2sb.id="button2sb";
  
  
  // signageboardindividualdetail.appendChild(sbbox1x);
  
  // storageRef.child('SignageBoard/sba.jpeg').getDownloadURL().then(function (url) {
  //   // `url` is the download URL for 'images/stars.jpg'
  //   // Or inserted into an <img> element:
  //   var img = document.getElementById('sbbox1imagex');
  //   img.src = url;
  // }).catch(function (error) {
  //   var img = document.getElementById('sbbox1imagex');
  //   img.alt = "Check your internet connection"
  
  // });
  
  // var newclick = document.createElement("a");
  // newclick.href = "#signageboardindividualdetail";
  // newclick.click();
  
  // checkhover1=0;
  // }
  // else{
  //   var child1=document.getElementById("sbbox1x")
  //   signageboardindividualdetail.removeChild(child1);
  //   signageboardindividualdetail.style.height="0px";
  //   checkhover1=1;
  // }
  
  
  
  // signageboardoptionssectionx.appendChild(sbbox2);
  // signageboardoptionssectionx.appendChild(sbbox3);
  // signageboardoptionssectionx.appendChild(sbbox4);
  // signageboardoptionssectionx.appendChild(sbbox5);
  // signageboardoptionssectionx.appendChild(sbbox6);
  // signageboardoptionssectionx.appendChild(sbbox7);
  // signageboardoptionssectionx.appendChild(sbbox8);
  // signageboardoptionssectionx.appendChild(sbbox9);
  // signageboardoptionssectionx.appendChild(sbbox10);
  
  
  
  
  
  
  
  
  
  
  
  