let d = document;
const prd = d.getElementById('products-wrapper')
const addToCart = d.querySelector('.add-to-cart');
const modalBody = d.querySelector('.modal-body');

const products = [
    {
        id: 1,
        name: 'Glass 1',
        price: 390
    },
    {
        id: 2,
        name: 'Glass 2',
        price: 90
    }
]

for ( let key in products ) {
    console.log(products[key].id);
    let productId = products[key].id;
    let itemId = prd.getAttribute('data-id');
    for(var i = 0; i < itemId.length; i++){
        addEvent(itemId[i].querySelector('.add-to-cart'), 'click', () => {
            modalBody.innerHTML = `
                <div class="products-wrapper">
                    <img src="img/product.jpg" alt="">
                    <h2>${products[key].name}</h2>
                    <span class="price">${products[key].price}</span>
                </div>`
        });
    }
}
//     if ( productId === 1 ) {
//         addToCart.addEventListener('click', () => {

//             modalBody.innerHTML = `
//                 <div class="products-wrapper">
//                     <img src="img/product.jpg" alt="">
//                     <h2>${products[key].name}</h2>
//                     <span class="price">${products[key].price}</span>
//                 </div>`
//         })
//     } else if ( productId === 2 ) {
//         addToCart.addEventListener('click', () => {
//             modalBody.innerHTML = `
//                 <div class="products-wrapper">
//                     <img src="img/product.jpg" alt="">
//                     <h2>${products[key].name}</h2>
//                     <span class="price">${products[key].price}</span>
//                 </div>`
//         })
//     }
// }

// addToCart.addEventListener('click', () => {

// })