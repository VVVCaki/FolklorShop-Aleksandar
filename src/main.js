import { arrayify } from "tslint/lib/utils";
import Swal from "sweetalert2";
import { cleanSession } from "selenium-webdriver/safari";
import { updateClassDeclaration } from "typescript";

//FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyBhCuHK7hqvzEVx4peOFdK9t6bKwVzN-Mg",
    authDomain: "autentifikacija-52a34.firebaseapp.com",
    databaseURL: "https://autentifikacija-52a34.firebaseio.com",
    projectId: "autentifikacija-52a34",
    storageBucket: "autentifikacija-52a34.appspot.com",
    messagingSenderId: "159945846809",
    appId: "1:159945846809:web:3dcb086e31d40e5e"
  };
  firebase.initializeApp(firebaseConfig);

function buy(){
    var nosnjaFirebase=[];
    for (let index = 0; index < nosnja.length; index++){
        if  (nosnja[index].cart){
            var nosnja = {
                name: nosnja[index].name,
                price: nosnja[index].price,
                quantity: nosnja[index].quantity,
                total: nosnja[index].total,
            }
            nosnjaFirebase.push(nosnja);
        }
    }
    firebase().database().ref('cart').push({
        total:total(),
        nosnja: nosnjaFirebase
    });
    Swal.fire({
        type: 'success',
        title: 'Success',
        text: 'Operation Completed'
    });
    clean();
}

var nosnja =[
    {
        id: 1,
        img:'./assets/img/nosnja/nosnja1.jpg',
        name: 'Jelek',
        price: 3,
        cart: false,
        quantity: 1,
        total: 0
    },
    {
        id: 2,
        img:'./assets/img/nosnja/nosnja2.jpg',
        name: 'Libada',
        price: 4,
        cart: false,
        quantity: 1,
        total: 0
    },
    {
        id: 3,
        img:'./assets/img/nosnja/nosnja3.jpg',
        name: 'Zubun',
        price: 5,
        cart: false,
        quantity: 1,
        total: 0
    },
    {
        id: 4,
        img:'./assets/img/nosnja/nosnja4.jpg',
        name: 'Kosulja',
        price: 6,
        cart: false,
        quantity: 1,
        total: 0
    },
    {
        id: 5,
        img:'./assets/img/nosnja/nosnja5.jpg',
        name: 'Oglavlje',
        price: 7,
        cart: false,
        quantity: 1,
        total: 0
    },
    {
        id: 6,
        img:'./assets/img/nosnja/nosnja6.jpg',
        name: 'Marama',
        price: 8,
        cart: false,
        quantity: 1,
        total: 0
    },

];

function total(){
    let total=0;
    for ( let index = 0; index < nosnja.length; index++){
        if (nosnja[index].cart){
            total+=nosnja[index].total;
        }
    }
    return total
}

var con=0;
var con2=[]; //POSITION AT TABLE

function clean(){
    for (let index = 0; index < nosnja.length; index++){
            nosnja[index].cart=false;
            nosnja[index].quantity=1;
            nosnja[index].total=0;
            con2=[];
            updateCart();
    }
}




//RENDER
(()=>{
    for (let index = 0; index < nosnja.length; index++){
        document.getElementById('row1').innerHTML+=`
        <div class="card m-2" style="width:10rem;">
        <img src="${nosnja[index].img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${nosnja[index].name}</h5>
        </div>
        </div>
        `;
    }
})();
