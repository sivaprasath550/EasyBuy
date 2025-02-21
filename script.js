        function toggleDarkMode() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }

        function toggleWishlist(icon) {
            icon.classList.toggle('active');
        }

        const categoryFilter = document.getElementById('category-filter');
        const priceSort = document.getElementById('price-sort');
        const products = document.querySelectorAll('.product');

        categoryFilter.addEventListener('change', filterProducts);
        priceSort.addEventListener('change', sortProducts);

        function filterProducts() {
            const selectedCategory = categoryFilter.value;
            products.forEach(product => {
                const category = product.querySelector('h2').textContent.toLowerCase();
                if (selectedCategory === 'all' || category.includes(selectedCategory)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }

        function sortProducts() {
            const sortOrder = priceSort.value;
            const productArray = Array.from(products);

            productArray.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('p').textContent.replace('₹', ''));
                const priceB = parseFloat(b.querySelector('p').textContent.replace('₹', ''));
                return sortOrder === 'low-to-high' ? priceA - priceB : priceB - priceA;
            });

            const productsContainer = document.querySelector('.products');
            productsContainer.innerHTML = '';
            productArray.forEach(product => productsContainer.appendChild(product));
        }
    