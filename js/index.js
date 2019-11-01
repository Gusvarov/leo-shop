const addToCart = document.querySelector('.add-to-carts');
const modalBody = document.querySelector('.modal-body');

const products = [
    {
        name:"Glass 1",
        price:389
    },
    // {
    //     name:"Glass 2",
    //     price:90
    // },
]

let cartPrice = 0;
let reset = 'Clear';

reset = modalBody.addEventListener('click', function() {
    modalBody.innerHTML = '';
})

addToCart.addEventListener('click', () => {
    let result = products.map(function(item) {
        cartPrice += item.price;
    })

    modalBody.innerHTML = `<div class="products-wrapper d-flex flex-column">
                <img src="img/product.jpg" alt="">

                <br>
                <span>Price:</span>${cartPrice}
                <button>${reset}</button>
                </div>`
})



 // if ( products.firstProduct.id === 1 ) {
    //      modalBody.innerHTML = `<div class="products-wrapper d-flex flex-column">
    //             <img src="img/product.jpg" alt="">
    //             ${products.firstProduct.name}
    //             <br>
    //             ${products.firstProduct.price}
    //         </div>`
    // } else if ( products.secondProduct.id === 2 ) {
    //     `<div class="products-wrapper d-flex flex-column">
    //             <img src="img/product.jpg" alt="">
    //             ${products.secondProduct.name}
    //             <br>
    //             ${products.secondProduct.price}
    //         </div>`
    // }