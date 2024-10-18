document.addEventListener('DOMContentLoaded', () => {
    const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
    const products = {
        'Category 1': [
            { name: 'Product 1-1', price: '$10.00' },
            { name: 'Product 1-2', price: '$20.00' }
        ],
        'Category 2': [
            { name: 'Product 2-1', price: '$15.00' },
            { name: 'Product 2-2', price: '$25.00' }
        ],
        'Category 3': [
            { name: 'Product 3-1', price: '$12.00' },
            { name: 'Product 3-2', price: '$22.00' }
        ],
        'Category 4': [
            { name: 'Product 4-1', price: '$18.00' },
            { name: 'Product 4-2', price: '$28.00' }
        ],
        'Category 5': [
            { name: 'Product 5-1', price: '$16.00' },
            { name: 'Product 5-2', price: '$26.00' }
        ],
    };

    const categoriesContainer = document.getElementById('categories');
    const productList = document.getElementById('product-list');

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.textContent = category;
        categoryDiv.addEventListener('click', () => {
            productList.innerHTML = '';
            products[category].forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
                productList.appendChild(productDiv);
            });
        });
        categoriesContainer.appendChild(categoryDiv);
    });
});
