const products = [
    {
        id:1,
        name:'Converse Chuck Taylor Star',
        price: '$45',
        img:'https://cdn.shopify.com/s/files/1/0498/9927/4401/products/10.jpg?v=1603264185',

    },
    {
        id:2,
        name:'SB Chron British Tan',
        price: '$95',
        img:'https://cdn.shopify.com/s/files/1/0498/9927/4401/products/12Untitled-2.jpg?v=1604558516',

    },
    {
        id:3,
        name:'Converse Unisex Shoes',
        price: '$200',
        img:'https://cdn.shopify.com/s/files/1/0498/9927/4401/products/8.jpg?v=1601883216',

    },
    {
        id:4,
        name:'Nike Air Force 1',
        price: '$44',
        img:'https://cdn.shopify.com/s/files/1/0498/9927/4401/products/10.jpg?v=1603264185',

    },
    {
        id:4,
        name:'Nike Air Force 1',
        price: '$44',
        img:'https://cdn.shopify.com/s/files/1/0498/9927/4401/products/10.jpg?v=1603264185',

    }
    
]

const carts = [];

products.forEach((product,index) => {
    
    const card = document.createElement('div');
    const contain = document.querySelector('.container');

    const imgcart = document.querySelector('.boxcart__img');
    const boxheading = document.querySelector('.boxcart__heading');

    const boxprice = document.querySelector('.boxcart__price');


    card.setAttribute('class','card');

    card.innerHTML = `<div class="card__img">
                <img src="${product.img}" alt="">

            </div>
            <div class="card--profile">
                <h3 class="card--profile__title">${product.name}</h3>

                <p class="card--profile__price">${product.price} USD</p>
            </div>
            <div class="card--button">
                <button class="btn btn-buy">Mua Ngay</button>
                <button class="btn btn-cart">Gio Hang</button>


            </div>`;

    contain.appendChild(card);

    const buy = card.querySelector('.btn-buy');
    var cart = {};

    buy.onclick = function(){
        
        
        
        cart['name'] = product.name;
        cart['price'] = product.price;
        cart['img'] = product.img;
        
       
        carts.push(cart);
        
        renderCart();


        //XOA
        var del = document.querySelectorAll('.boxcart__del');
        del.forEach(function(item,index){
            item.onclick= function(e){
                
                var removed = carts.splice(index,1);
                console.log(carts);
                renderCart()

            }
        })
        function renderCart(){

            const boxcart = document.querySelector('.boxcart');
            boxcart.innerHTML = ``;
            carts.forEach((cart,index,array) => {
                //TAO GIO HANG
                const boxcartitem = document.createElement('div');
                boxcartitem.setAttribute('class','boxcart__item');
                
                
                
                boxcartitem.innerHTML = `<img class="boxcart_img" src="${cart.img}" alt="">
                            <div class="boxcart__profile">
                            <h3 class="boxcart__heading">${cart.name}</h3>
                            <p class="boxcart__price">${cart.price}</p>
                            <button class="boxcart__del">Xoa</button>
                        </div>`
                boxcart.appendChild(boxcartitem);
                
    
    
                
        
            })
        }
        
        
       
        console.log(carts)
    }

    

   
    

})



