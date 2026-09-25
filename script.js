const cartIcon = document.querySelector('.header-icons .icon:nth-child(2)');

const cart = document.querySelector('.cart');

const closeCart = document.querySelector('.close_cart');

const shopMore = document.querySelector('.trans_bg');


cartIcon.addEventListener('click', (e) => {

    e.preventDefault();

    cart.classList.add('active');

});


closeCart.addEventListener('click', () => {

    cart.classList.remove('active');

});


shopMore.addEventListener('click', () => {

    cart.classList.remove('active');

});




//-----------------------------------------------\

//icons links
const mobileMenuBtn = document.querySelector('.mobile_menu_btn');
const mobileNavLinks = document.querySelector('.mobile_nav_links');

mobileMenuBtn.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
});

// --------------------------------------------------


const favouriteIcon = document.querySelector('.header-icons .icon:nth-child(1)');

const favourite = document.querySelector('.favorite');

const closeFavourite = document.querySelector('.close_favorite');


favouriteIcon.addEventListener('click', (e) => {

    e.preventDefault();

    favourite.classList.add('active');

});


closeFavourite.addEventListener('click', () => {

    favourite.classList.remove('active');

});


//---------------------------------------------------------
//Sign up


const Signup = document.getElementById('Sign-up')

const formdetails = document.getElementById('form-details')

const closeSign = document.querySelector('.closeSign');

Signup.addEventListener('click', (e) => {

     e.preventDefault();
    
    formdetails.classList.add('active');
   
})


closeSign.addEventListener('click', () => {
 

    formdetails.classList.remove('active');
 
});




const signUpForm = document.getElementById('signUpForm');

const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const confirmPassword = document.getElementById('confirmPassword');

const signupMessage = document.getElementById('signupMessage');


signUpForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = signupName.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value;
    const confirm = confirmPassword.value;


    // Check empty inputs
    if (name === '' || email === '' || password === '' || confirm === '') {

        signupMessage.innerHTML = 'Please fill in all fields';
        signupMessage.style.color = 'red';

        return;
    }


    // Check password
    if (password !== confirm) {

        signupMessage.innerHTML = 'Passwords do not match';
        signupMessage.style.color = 'red';

        return;
    }


    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];


    // Check if email already exists
    const userExists = users.find((user) => {
        return user.email === email;
    });


    if (userExists) {

        signupMessage.innerHTML = 'This email is already registered';
        signupMessage.style.color = 'red';

        return;
    }


    // Create new user
    const newUser = {
        name: name,
        email: email,
        password: password
    };


    // Add user
    users.push(newUser);


    // Save users
    localStorage.setItem('users', JSON.stringify(users));


    // Success message
    signupMessage.innerHTML = 'Registration successful!';
    signupMessage.style.color = '#6fcf97';


    // Clear form
    signUpForm.reset();

});


//--------------------------------------------------------------------

//login in



const Login = document.getElementById('Log-in');

const loginDetails = document.getElementById('login-details');

const closeLogin = document.querySelector('.closeLogin');


Login.addEventListener('click', (e) => {

    e.preventDefault();

    loginDetails.classList.add('active');

});


closeLogin.addEventListener('click', () => {

    loginDetails.classList.remove('active');

});

const loginForm = document.getElementById('loginForm');

const loginEmail = document.getElementById('loginEmail');

const loginPassword = document.getElementById('loginPassword');

const loginMessage = document.getElementById('loginMessage');


loginForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = loginEmail.value.trim();

    const password = loginPassword.value;


    if (email === '' || password === '') {

        loginMessage.innerHTML = 'Please fill in all fields';

        loginMessage.style.color = 'red';

        return;
    }


    const users =
        JSON.parse(localStorage.getItem('users')) || [];


    const user = users.find((user) => {

        return user.email === email &&
               user.password === password;

    });


    if (user) {

        loginMessage.innerHTML = `Welcome, ${ user.name } !`;

        loginMessage.style.color = '#6fcf97';

        loginForm.reset();

    } else {

        loginMessage.innerHTML =
            'Invalid email or password';

        loginMessage.style.color = 'red';

    }

});



//-------------------------------------------------------------

// --------------------------------------------------
// Add product to cart
// --------------------------------------------------


fetch('Ecommerce website/products.json')

    .then(res => res.json())

    .then(data => {

        const addbtncart = document.querySelectorAll('.add_btn_cart');


        // Get cart from localStorage

        let cart = JSON.parse(localStorage.getItem('cart')) || [];


        // =================================================
        // Check products already in cart
        // =================================================

        addbtncart.forEach(button => {

            const productid = button.getAttribute('data-id');


            const productInCart = cart.find((item) => {

                return item.id == productid;

            });


            // If product already in cart when page loads

            if (productInCart) {

                button.classList.add('active');

                button.innerHTML = `
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Item in Cart</span>
                `;

            }


            // =================================================
            // Add product
            // =================================================

            button.addEventListener('click', () => {

                const productid = button.getAttribute('data-id');


                const selectproduct = data.find((product) => {

                    return product.id == productid;

                });


                const productInCart = cart.find((item) => {

                    return item.id == productid;

                });


                // Product already exists

                if (productInCart) {

                    button.classList.add('active');

                    button.innerHTML = `
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Item in Cart</span>
                    `;

                }


                // Product doesn't exist

                else {

                    cart.push({

                        ...selectproduct,

                        quntity: 1

                    });


                    // Save cart to localStorage

                    localStorage.setItem(
                        'cart',
                        JSON.stringify(cart)
                    );


                    // Change button

                    button.classList.add('active');

                    button.innerHTML = `
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Item in Cart</span>
                    `;


                    // Display cart

                    DisplayCart();

                }

            });

        });


        // Display cart when page loads

        DisplayCart();


        // =================================================
        // Display Cart
        // =================================================

        function DisplayCart() {

            const cartitems = document.getElementById('cart_items');


            // Get cart from localStorage

            cart = JSON.parse(localStorage.getItem('cart')) || [];


            // Clear old content

            cartitems.innerHTML = '';


            let totalPrice = 0;

            let totalQuantity = 0;




            // Display every product
            cart.forEach((item) => {

                totalPrice += item.price * item.quntity;

                totalQuantity += item.quntity;

                cartitems.innerHTML += `

                    <div class="item_cart">

                        <div class="img_cart">

                            <img src="${item.img}" alt="">

                        </div>


                        <div class="content">

                            <h4>
                                ${item.name}
                            </h4>


                            <p class="price_cart">

                                ${item.price * item.quntity}$

                            </p>


                            <div class="Quntity_controle">

                                <button class="decrease_quntity" data-id="${item.id}">
                                    -
                                </button>


                                <span class="quntity">
                                    ${item.quntity}
                                </span>


                                <button class="increese_quntity"data-id="${item.id}">
                                    +
                                </button>

                            </div>

                        </div>


                        <div class="delete_cart">

                            <button
                                class="delete_item"
                                data-id="${item.id}"
                            >

                                <i class="fa-solid fa-trash-can"></i>

                            </button>

                        </div>

                    </div>

                `;


            });


            document.querySelector('.count_item_header').innerHTML =
                totalQuantity;

            document.querySelector('.count_item_cart').innerHTML =
                totalQuantity;

            document.querySelector('.price_cart_total').innerHTML =
                `${totalPrice}$`;


            // =================================================
            // Delete buttons
            // =================================================

            const deleteitems =
                document.querySelectorAll('.delete_item');


            deleteitems.forEach((deleteitem) => {

                deleteitem.addEventListener('click', () => {


                    // Get product ID

                    const productid =
                        deleteitem.getAttribute('data-id');


                    // Remove product from cart

                    cart = cart.filter((item) => {

                        return item.id != productid;

                    });


                    // Update localStorage

                    localStorage.setItem(
                        'cart',
                        JSON.stringify(cart)
                    );


                    // =================================================
                    // Change product button back to Add to Cart
                    // =================================================

                    const productButton =
                        document.querySelector(
                            `.add_btn_cart[data-id="${productid}"]`
                        );


                    if (productButton) {

                        productButton.classList.remove('active');

                        productButton.innerHTML = `
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>Add to Cart</span>
                        `;

                    }


                    // Display cart again

                    DisplayCart();

                });

            });


            // =================================================
            // increaseQuantity
            // =================================================


            const increaseQuantity =
                document.querySelectorAll('.increese_quntity');

            increaseQuantity.forEach((button) => {

                button.addEventListener('click', () => {

                    const productid =
                        button.getAttribute('data-id');

                    const productInCart =
                        cart.find((item) => {
                            return item.id == productid;
                        });

                    if (productInCart) {
                        productInCart.quntity++;
                    }

                    localStorage.setItem(
                        'cart',
                        JSON.stringify(cart)
                    );

                    DisplayCart();
                });
            });


            // =================================================
            // decreaseQuantity
            // =================================================


            const decreaseQuantity =
                document.querySelectorAll('.decrease_quntity');

            decreaseQuantity.forEach((button) => {

                button.addEventListener('click', () => {

                    const productid =
                        button.getAttribute('data-id');

                    const productInCart =
                        cart.find((item) => {
                            return item.id == productid;
                        });

                    if (productInCart && productInCart.quntity > 1) {
                        productInCart.quntity--;
                    }

                    localStorage.setItem(
                        'cart',
                        JSON.stringify(cart)
                    );

                    DisplayCart();
                });
            });






        }


        window.addEventListener('pageshow', () => {
            DisplayCart();
        });


        //--------------------------------------------------

const iconproductfav =
    document.querySelectorAll('.icon_product');


// Get fav from localStorage
let fav =
    JSON.parse(localStorage.getItem('fav')) || [];


// =================================================
// Check products already in fav
// =================================================

iconproductfav.forEach(button => {

    const productid =
        button.getAttribute('data-id');


    const productInfav =
        fav.find((item) => {
            return item.id == productid;
        });


    // If product already in fav when page loads
    if (productInfav) {

        button.classList.add('active');

    }


    // =================================================
    // Add product in fav
    // =================================================

    button.addEventListener('click', () => {

        const productidfav =
            button.getAttribute('data-id');


        const selectproductfav =
            data.find((product) => {
                return product.id == productidfav;
            });
        
        

        console.log("productidfav:", productidfav);
        console.log("selectproductfav:", selectproductfav);


        const productInfav =
            fav.find((item) => {
                return item.id == productidfav;
            });


        // Product already exists in fav
        if (productInfav) {

            button.classList.add('active');

        }


        // Product doesn't exist in fav
        else {

            fav.push({
                ...selectproductfav
            });


            // Save fav to localStorage
            localStorage.setItem(
                'fav',
                JSON.stringify(fav)
            );


            // Change button
            button.classList.add('active');


            // Display fav
            DisplayFav();

        }

    });

});


// =================================================
// Display fav when page loads
// =================================================

DisplayFav();


// =================================================
// Display Fav
// =================================================


        
        
        function DisplayFav() {

            const favoriteitems = document.getElementById('favorite_items');

            // Get favorite from localStorage
            fav = JSON.parse(localStorage.getItem('fav')) || [];

            // Clear old content
            favoriteitems.innerHTML = '';

            // Display every favorite product
            fav.forEach((item) => {

                favoriteitems.innerHTML += `
            <div class="favorite_item">

                <div class="favorite_img">
                    <img src="${item.img}" alt="">
                </div>

                <div class="favorite_content">

                    <div class="content">
                        <h4>${item.name}</h4>

                        <p class="favorite_price">
                            ${item.price}$
                        </p>
                    </div>

                    <button class="delete_fav" data-id="${item.id}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>

                </div>

            </div>
        `;
            });

            // Count Favorite
            document.querySelector('.count_item_fav').innerHTML = fav.length;

            // Count Favorite header
            document.querySelector('.count_favourite').innerHTML = fav.length;

            // Delete Favorite
            const deleteFav = document.querySelectorAll('.delete_fav');

            deleteFav.forEach((button) => {

                button.addEventListener('click', () => {

                    const productidfav = button.getAttribute('data-id');

                    // Remove from favorite
                    fav = fav.filter((item) => {
                        return item.id != productidfav;
                    });

                    // Update localStorage
                    localStorage.setItem('fav', JSON.stringify(fav));

                    // Remove active from heart
                    const favoriteButton = document.querySelector(
                        `.icon_product[data-id="${productidfav}"]`
                    );

                    if (favoriteButton) {
                        favoriteButton.classList.remove('active');
                    }

                    // Display again
                    DisplayFav();
                });
            });
        }

    });

