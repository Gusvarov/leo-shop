let modalBody = document.querySelector('.modal-body');

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

let addToCart = document.querySelectorAll('.add-to-cart');

window.addEventListener('click', function(e) {
    const key = document.querySelector(`.add-to-cart[data-key="${e.keyCode}"]`);
})


addToCart.forEach( key => key.addEventListener('click', () => {
    modalBody.innerHTML = `<div class="products-wrapper" id="products-wrapper">
                <img src="img/product.jpg" alt="">
                <span>Glass 1</span>
                <span class="price">$389.00</span>
                
            </div>`;
}));


//addToCart.addEventListener('click', function(e) {
   // const audio = document.querySelector(`.add-to-cart[data-key="${e.keyCode}"]`);
    // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if ( !audio) return;
    // audio.currentTime = 0;
    // audio.play();
    // key.classList.add('playing');
   // modalBody.innerHTML = 'dsdgdss';
//});

// function removeTransition(e) {
//         if ( e.propertyName !== 'transform' ) return;
//         this.classList.remove('playing');
//     }


// const keys = document.querySelectorAll('.key');
// keys.forEach( key => key.addEventListener('transitionend', removeTransition));
