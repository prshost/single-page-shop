let nav = document.querySelectorAll('.nav li');
let items = document.querySelectorAll('.items .item')
let detaNav,detaProduct;

nav.forEach( navbar => {
    
    navbar.addEventListener('click', (e) => {
        e.preventDefault()
        for( let i = 0; i < nav.length; i++) {
            nav[i].children[0].classList.remove('active')
        }
        detaNav = e.target.parentElement.getAttribute('data-item')
        e.target.classList.add('active')
        items.forEach( product => {
            detaProduct = product.getAttribute('data-product')
            product.style.transform = 'scale(0)';
            setTimeout(() => {
                product.style.display = 'none'
            }, 300);
            if ( detaNav == detaProduct || detaNav == 'all' ) {
                product.style.transform = 'scale(1)';
               
                setTimeout(() => {
                    product.style.display = 'block'
                }, 300);
                
                
            }
        
        })
        
    })

})