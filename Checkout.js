let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems = document.getElementById("checkout_items");
const checkoutSubtotal = document.getElementById("checkout_subtotal");
const checkoutTotal = document.getElementById("checkout_total");

function DisplayCheckout() {

    checkoutItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quntity;

        checkoutItems.innerHTML += `
            <div class="checkout_item">

                <img src="${item.img}" alt="${item.name}">

                <div>
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quntity}</p>
                    <span>${item.price * item.quntity}$</span>
                </div>

            </div>
        `;
    });

    checkoutSubtotal.innerHTML = `${total}$`;
    checkoutTotal.innerHTML = `${total}$`;
}

DisplayCheckout();



const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const country = document.getElementById("country");

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    );

    console.log("Full Name:", fullName.value);
    console.log("Email:", email.value);
    console.log("Phone:", phone.value);
    console.log("Address:", address.value);
    console.log("City:", city.value);
    console.log("Country:", country.value);
    console.log("Payment:", payment.value);
    alert(`Order placed successfully! Thank you ${fullName.value} ❤️`);

    fullName.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    city.value = "";
    country.value = "";


    localStorage.removeItem("cart");

    cart = [];

    checkoutItems.innerHTML = "";

    checkoutSubtotal.innerHTML = "0$";
    checkoutTotal.innerHTML = "0$";




});