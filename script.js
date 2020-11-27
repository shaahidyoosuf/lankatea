
//Font Popup Panel
function fontToggle() {
    var fontaction = document.querySelector('.fontaction');
    fontaction.classList.toggle('active')
}

//Go to top
mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

//Font Size Change
var size;
function incFont(){
    var t = document.getElementById('fontsize').value;
    var x = document.querySelectorAll('h1,h2,h3,h4,h5,span,p,i,a,label,div,button,input');
    for (var i = 0; i < x.length; i++) {
        var y = x[i];
        y.style.fontSize = t + "px";
      }
    size = t;
    document.getElementById('size').innerHTML = size;
}


//Add to cart
let carts = document.querySelectorAll('.add-to-cart');

let products = [
    {
        name: 'Special green tea',
        tag: 'product1',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Slim green Tea',
        tag: 'product2',
        price: 1500,
        inCart: 0
    },
    {
        name: 'Plain Tea',
        tag: 'product3',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Milk Tea',
        tag: 'product4',
        price: 2000,
        inCart: 0
    },
    {
        name: 'Mint Tea',
        tag: 'product5',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Lavandar Tea',
        tag: 'product6',
        price: 2000,
        inCart: 0
    },
    {
        name: 'Sun Flower Tea',
        tag: 'product7',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Mediacal Tea',
        tag: 'product8',
        price: 2000,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNum(products[i]);
        totalCost(products[i]);
    }) 
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if (productNumbers){
        document.querySelector('.shopping-cart span').textContent = productNumbers;
    }
}


function cartNum(products) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        onLoadCartNumbers()
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.shopping-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.shopping-cart span').textContent = 1;
    }

    setItems(products);   
}

function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null){
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	(cartItems);
}

function totalCost(products){
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }
}

function displayCartMain() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productContainer = document.querySelector(".cart-products")
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product-title">
                <div class="product-img">
                    <i class="fas fa-trash"></i>
                    <img src ="img/product-images/${item.tag}.png">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="cart-product-price">$${item.price}.00</div>
            <div class="cart-quantity">
                <i class="fas fa-plus-circle"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-minus-circle"></i>
            </div>
            <div class="cart-total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h3 class="basketTotalTitle">
                Basket Total
                </h3>
                <h3 class="basketTotal">
                    $${cartCost}.00
                </h3>
            </div>
        `;
    }
}

function displayCartModal() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

    let productContainer = document.querySelector(".modal-cart-products")
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product-title">
                <div class="product-img">
                    <img src ="img/product-images/${item.tag}.png">
                </div>
                <span>${item.name}</span>
            </div>
            <div class="cart-product-price">$${item.price}.00</div>
            <div class="cart-quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="cart-total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h2 class="basketTotalTitle">
                Total Cost
                </h2>
                <h2 class="basketTotal">
                    $${cartCost}.00
                </h2>
            </div>
        `;
    }
}

//Inputs empty validation
function formValidation(){

    var f = document.getElementById('fname').value;
    var l = document.getElementById('lname').value;
    var e = document.getElementById('email').value;
    var m = document.getElementById('mnum').value;
    var a = document.getElementById('address').value;
    var c = document.getElementById('city').value;
    var co = document.getElementById('country').value;
    var zip = document.getElementById('zipcode').value;

    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers == 0 || productNumbers == null){
        alert('Cart Empty, please add one or more items from shop!');
        return false;
    }

    if (f == '' || f == null || l == '' || l == null || e == '' || e == null || m == '' || m == null || a == '' || a == null || c == '' || c == null || co == '' || co == null || zip == '' || zip == null){
        alert('Please fill all the fields to continue!');
        return false;
    } else {
        
        let userName = document.getElementById('fname').value;
            
        if (userName){
            document.querySelector('.userName').textContent = userName; 
        };
        
        if (f){
            document.querySelector('.fname-span').textContent = f; 
        };

        if (l){
            document.querySelector('.lname-span').textContent = l; 
        };

        if (m){
            document.querySelector('.mnum-span').textContent = m; 
        };

        if (e){
            document.querySelector('.email-span').textContent = e; 
        };

        if (a){
            document.querySelector('.address-span').textContent = a; 
        };

        if (c){
            document.querySelector('.city-span').textContent = c; 
        };

        if (co){
            document.querySelector('.country-span').textContent = co; 
        };

        if (zip){
            document.querySelector('.zip-span').textContent = zip; 
        };

        if (true) {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];

            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
        
        return false;  
    }
}

//Show done screen
function paymentDone (){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    var donemodal = document.getElementById("doneModal");

    donemodal.style.display = "block";

    setTimeout(function(){
        donemodal.style.display = "block";
        window.location.href = 'shop.html';}, 2200);
    localStorage.clear();
    return false;
}

onLoadCartNumbers();
displayCartMain();
displayCartModal();


