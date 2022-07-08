let cartItems = document.getElementById('cartDisplay');
let generateCart = () => {
    return (cartItems.innerHTML = `
    <div class="cart_1">
            <div class="cart_header">
                <h2>Your cart</h2>
            </div>
            <!--cart content-->
            <div class="cart-content">
                <div class="cart_imag_desc">
                    <div class="imag_des">
                        <img src="images/dish-6.png" alt="">
                        <div>
                        <p>Delicious food</p>
                        <p id="desc">Awesome meat</p>
                        </div>
                    </div>
                    <div class="food_price">$25</div>
                </div>
                <div class="cart-box">
                    <!--close cart-->
                    <i class="fa fa-times" id="cart-close"></i>
                    <div class="buttons">
                        <!--remove-->
                        <div class="trash">
                            <i class="fa fa-trash" id="remove_btn"></i>
                            <p>REMOVE</p>
                        </div>
                        <div class="but_ons">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                            <div class="quantity">0</div>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--total-->
        <div class="total">
            <h2 class="cart2_head">CART SUMMARY</h2>
            <div class="total_price">
                <div class="total-title">Subtotal</div>
                <div class="total-price" id="sumPrice">$0</div>
            </div>
            <!--checkout button-->
            <div class="btns">
                <button type="button" class="btn-buy">CHECKOUT</button>
            </div>

        </div>
    `);
};
generateCart();