let allproducts = []
let currentProduct = 0
const PAGE_SIZE = 3

    function fetchProductsthen() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                allproducts = data
                displayProducts()
            })
            .catch(error => console.error('Error fetching products:', error))
    }
    async function fetchProductsasync() {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            allproducts = data
            displayProducts()
        } catch (error) {
            console.error('Error fetching products:', error)
        }
    }
    function displayProducts() {
       allproducts= allproducts.slice(currentProduct, currentProduct + PAGE_SIZE)
        const productContainer = document.getElementById('product-container')
        productContainer.innerHTML = ''

        allproducts.forEach(product => {
            const productCard = document.createElement('div')
            productCard.className = 'product-card'
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `
            productContainer.appendChild(productCard)
        })
    }

    function resetProducts() {
            currentProduct = 0
            displayProducts()
            document.getElementById('prev-btn').disabled = true
            document.getElementById('next-btn').disabled = false
        }
        function nextProducts() {
            if (currentProduct + PAGE_SIZE < allproducts.length) {
                currentProduct += PAGE_SIZE
                displayProducts()
                document.getElementById('prev-btn').disabled = false
            } else {
                document.getElementById('next-btn').disabled = true
            }
             fetchProductsthen()
             fetchProductsasync()
        }