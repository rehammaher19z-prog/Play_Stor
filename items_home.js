// هنعمل الجزىيه اللى بتعرض المنتجات فى الhome

// 1-هجيب اللى data من ملف json باستخدام الfetch("url")

fetch('Ecommerce website/products.json')

    .then(response => response.json())

    .then(data => {

        console.log(data)

        let swiper_items_sale = document.getElementById('swiper_items_sale')

        let swiper_items = document.getElementById('swiper_items')

        let swiper_mobiles = document.getElementById('swiper_mobiles')

        let swiper_appliance = document.getElementById('swiper_appliance')


        data.forEach(product => {

            if (product.old_price) {

                const old_product_Price =
                    `<p class="old_price">${product.old_price}$</p>`

                const percant_dics =
                    Math.floor(
                        (product.old_price - product.price)
                        / product.old_price * 100
                    )

                swiper_items_sale.innerHTML += `

                    <div class="swiper-slide product">

                        <span class="Sale_present">${percant_dics}%</span>

                        <div class="img_product">

                            <a href="">
                                <img src="${product.img}" alt="">
                            </a>

                        </div>

                        <div class="stars">

                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>

                        <p class="name_product">

                            <a href="">${product.name}</a>

                        </p>

                        <div class="price">

                            <p>
                                <span>${product.price}$</span>
                            </p>

                            <p class="old_price">
                                ${product.old_price}$
                            </p>

                        </div>

                        <div class="icons">

                            <span class="add_btn_cart" data-id=${product.id}>

                                <i class="fa-solid fa-cart-shopping"></i>

                                <span>add to cart</span>

                            </span>

                            <span class="icon_product" data-id=${product.id}>

                                <i class="fa-regular fa-heart"></i>

                            </span>

                        </div>

                    </div>

                `
            }

        });


        data.forEach(product => {

            if (product.catetory == 'electronics') {

                const old_product_Price =
                    product.old_price
                        ? `<p class="old_price">${product.old_price}$</p>`
                        : ''

                const percant_dics =
                    product.old_price
                        ? `<span class="Sale_present">${Math.floor(
                            (product.old_price - product.price)
                            / product.old_price * 100
                        )}%</span>`
                        : '';
                swiper_items.innerHTML += `

                    <div class="swiper-slide product">

                        ${percant_dics}

                        <div class="img_product">

                            <a href="">
                                <img src="${product.img}" alt="">
                            </a>

                        </div>

                        <div class="stars">

                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>

                        <p class="name_product">

                            <a href="">${product.name}</a>

                        </p>

                        <div class="price">

                            <p>
                                <span>${product.price}$</span>
                            </p>

                            ${old_product_Price}

                        </div>

                        <div class="icons">

                            <span class="add_btn_cart" data-id=${product.id}>

                                <i class="fa-solid fa-cart-shopping"></i>

                                <span>add to cart</span>

                            </span>

                            <span class="icon_product"  data-id=${product.id}>

                                <i class="fa-regular fa-heart"></i>

                            </span>

                        </div>

                    </div>

                `
            }

        });


        data.forEach(product => {

            if (product.catetory == 'mobiles') {

                const old_product_Price =
                    product.old_price
                        ? `<p class="old_price">${product.old_price}$</p>`
                        : ''

                const percant_dics =
                    product.old_price
                        ? `<span class="Sale_present">${Math.floor(
                            (product.old_price - product.price) / product.old_price * 100 )}%</span>`
                        : '';

                swiper_mobiles.innerHTML += `

                    <div class="swiper-slide product">

                       ${percant_dics}

                        <div class="img_product">

                            <a href="">
                                <img src="${product.img}" alt="">
                            </a>

                        </div>

                        <div class="stars">

                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>

                        <p class="name_product">

                            <a href="">${product.name}</a>

                        </p>

                        <div class="price">

                            <p>
                                <span>${product.price}$</span>
                            </p>

                            ${old_product_Price}

                        </div>

                        <div class="icons">

                           <span class="add_btn_cart" data-id=${product.id}>

                                <i class="fa-solid fa-cart-shopping"></i>

                                <span>add to cart</span>

                            </span>

                            <span class="icon_product" data-id=${product.id}>

                                <i class="fa-regular fa-heart"></i>

                            </span>

                        </div>

                    </div>

                `
            }

        });


        data.forEach(product => {

            if (product.catetory == 'appliances') {

                const old_product_Price =
                    product.old_price
                        ? `<p class="old_price">${product.old_price}$</p>`
                        : ''

                const percant_dics =
                    product.old_price
                        ? `<span class="Sale_present">${Math.floor(
                            (product.old_price - product.price) / product.old_price * 100)}%</span>`
                        : '';

                swiper_appliance.innerHTML += `

                    <div class="swiper-slide product">

                       ${percant_dics}

                        <div class="img_product">

                            <a href="">
                                <img src="${product.img}" alt="">
                            </a>

                        </div>

                        <div class="stars">

                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </div>

                        <p class="name_product">

                            <a href="">${product.name}</a>

                        </p>

                        <div class="price">

                            <p>
                                <span>${product.price}$</span>
                            </p>

                            ${old_product_Price}

                        </div>

                        <div class="icons">

                            <span class="add_btn_cart" data-id=${product.id}>

                                <i class="fa-solid fa-cart-shopping"></i>

                                <span>add to cart</span>

                            </span>

                            <span class="icon_product"  data-id="${product.id}">

                                <i class="fa-regular fa-heart"></i>

                            </span>

                        </div>

                    </div>

                `
            }

        });
    })

