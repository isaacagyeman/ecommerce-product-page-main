var btnAddTocart = document.querySelector('.btn-addToCart');
var btnIncrease = document.querySelector('#qtyPlus');
var btnDecrease = document.querySelector('#qtyMinus');
var cartIndicator = document.querySelector('#totalIndicator');
//var cartButton = document.querySelector('.cart-1');

var cartDropMenuItems  = document.querySelector('.cartContentRoot');
//var cartDropDown = document.querySelector('.cartMenu');
var btnCheckout = document.querySelector('#btnCheckout');
var cartDelBtn = document.querySelector('#btnDelete');
var emptyCart = document.querySelector('.menuInner');


var lightBoxClose = document.querySelector('#btnlightMenuClose');
var menuIcon = document.querySelector('#menu');
var mobileMenu = document.querySelector('.root-menu');
var btnMenuClose = document.querySelector('#btnMenuClose');
var ImgSlides = document.getElementsByClassName('mySlides');
var lightSlides = document.getElementsByClassName('lightSlides');
var thumbnials = document.getElementsByClassName('small-Imgs');
var lightThumbs = document.getElementsByClassName('smallImg-Light');
var lightBox = document.querySelector('.lightBox');

var addToCart = document.querySelector('.btn-addToCart');
var quantity = document.querySelector('#qtyNum');
var cartQuantity = document.querySelector('#totalIndicator');

var cart_items = [];
var qtyCount = 0;


totalItemPrice = qtyCount * 125.00;

const addItem = function(){
    const cart = new Object();
    cart.itemName = "Fall Limited Edition Sneakers"
    cart.price = 125.00
    cart.qty = qtyCount
    cart.totalPrice = qtyCount * 125.00
    cart_items.push(cart)
    cartQuantity.innerHTML = qtyCount;
    console.log(cart_items)
    // alert(cart.totalPrice + " is the total price of the selected quantity of shoes")
    
}

const Increase = function increment(){
    qtyCount +=  1;
    quantity.innerHTML = qtyCount;
}

const Decrease = function decrement(){
    if(qtyCount >= 0){
        qtyCount -= 1;
        quantity.innerHTML = qtyCount;
    }else{
        qtyCount = 0;
    }
}



let initialIndex = 1;
let firstlightIndex = 1;
showSlides(initialIndex);
showLightSlides(firstlightIndex);


function nextSlide(n){
    showSlides(initialIndex+=n);
}

function currentSlide(n){
    showSlides(initialIndex = n);
}

function nextLight(n){
    showLightSlides(firstlightIndex+=n);
}
function currentLight(n){
    showLightSlides(firstlightIndex = n)
}


function showSlides(n){
    let i;
    if( n  > ImgSlides.length){
        initialIndex = 1;
    }
    if(n < 1){
        initialIndex = ImgSlides.length;
    }
    for( i= 0; i<ImgSlides.length; i++){
        ImgSlides[i].style.display = "none";
        thumbnials[i].style.border = "none";
    }
    
    thumbnials[initialIndex-1].style.border = "solid";
    thumbnials[initialIndex-1].style.borderColor = "hsl(26, 100%, 55%)";
    
    ImgSlides[initialIndex-1].style.display = 'block';
    
    ImgSlides[initialIndex-1].addEventListener('click',()=>{
        lightBox.style.display = 'block';
    });
}


function showLightSlides(n){
    let i;
    if(n > lightSlides.length ){
        firstlightIndex = 1;
    }
    if(n < 1){
        firstlightIndex = lightSlides.length; 
    }
    for(i = 0; i < lightSlides.length; i++){
        lightSlides[i].style.display = "none";
        lightThumbs[i].style.border = "none";
    }
    lightThumbs[firstlightIndex-1].style.border = "solid";
    lightThumbs[firstlightIndex-1].style.borderColor = "hsl(26,100%,55%)";
    lightSlides[firstlightIndex-1].style.display = 'block';
}

menuIcon.addEventListener('click',()=>{
    mobileMenu.style.display = 'block';
})
btnMenuClose.addEventListener('click',()=>{
    mobileMenu.style.display = 'none';
})

lightBoxClose.addEventListener('click',()=>{
    lightBox.style.display = 'none';
});

btnIncrease.addEventListener('click',Increase);
btnDecrease.addEventListener('click',Decrease);

addToCart.addEventListener('click',addItem)
