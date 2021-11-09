import React from 'react';


function Cabecalho() {
    return (
        <header>
            <div class="header-container">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-sm-4 col-md-5 hidden-xs">

                                <div class="welcome-msg ">Bem vindo a organica! </div>
                                <span class="phone hidden-sm">Contato: (+238) 5938231</span> </div>


                            <div class="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
                                <div class="links">
                                    <div class="myaccount"><a title="My Account" href="#"><i class="fa fa-user"></i><span class="hidden-xs">Conta</span></a></div>
                                    <div class="wishlist"><a title="My Wishlist" href="#"><i class="fa fa-heart"></i><span class="hidden-xs">Favoritos</span></a></div>
                                    <div class="blog"><a title="Blog" href="#"><i class="fa fa-rss"></i><span class="hidden-xs">Blog</span></a></div>
                                    <div class="login"><a href="#"><i class="fa fa-unlock-alt"></i><span class="hidden-xs">Log In</span></a></div>
                                </div>
                                <div class="language-currency-wrapper">
                                    <div class="inner-cl">
                                        <div class="block block-language form-language">
                                            <div class="lg-cur"> <span> <img src="assets/images/flag-default.jpg" alt="French" /> <span class="lg-fr">French</span> <i class="fa fa-angle-down"></i> </span> </div>
                                            <ul>
                                                <li> <a class="selected" href="#"> <img src="assets/images/flag-english.jpg" alt="flag" /> <span>English</span> </a> </li>
                                                <li> <a href="#"> <img src="assets/images/flag-default.jpg" alt="flag" /> <span>French</span> </a> </li>
                                                <li> <a href="#"> <img src="assets/images/flag-german.jpg" alt="flag" /> <span>German</span> </a> </li>
                                                <li> <a href="#"> <img src="assets/images/flag-brazil.jpg" alt="flag" /> <span>Brazil</span> </a> </li>
                                                <li> <a href="#"> <img src="assets/images/flag-chile.jpg" alt="flag" /> <span>Chile</span> </a> </li>
                                                <li> <a href="#"> <img src="assets/images/flag-spain.jpg" alt="flag" /> <span>Spain</span> </a> </li>
                                            </ul>
                                        </div>
                                        <div class="block block-currency">
                                            <div class="item-cur"> <span>CVE </span> <i class="fa fa-angle-down"></i></div>
                                            <ul>
                                                <li> <a href="#"><span class="cur_icon">€</span> EUR</a> </li>
                                                <li> <a href="#"><span class="cur_icon">¥</span> JPY</a> </li>
                                                <li> <a href="#"><span class="cur_icon">$</span> CVE</a> </li>
                                                <li> <a class="selected" href="#"><span class="cur_icon">$</span> USD</a> </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3 col-md-3 col-xs-12">

                            <div class="logo"><a title="e-commerce" href="#"><img alt="e-commerce" src="assets/images/logo.png" /></a> </div>

                        </div>
                        <div class="col-xs-9 col-sm-6 col-md-7">

                            <div class="top-search">
                                <div id="search">
                                    <form>
                                        <div class="input-group">
                                            <select class="cate-dropdown hidden-xs" name="category_id">
                                                <option>Categorias</option>
                                                <option>women</option>
                                                <option>   Accessories </option>
                                                <option>   Dresses</option>
                                                <option>   Top</option>
                                                <option>   Handbags </option>
                                                <option>   Shoes </option>
                                                <option>   Clothing </option>
                                                <option>Men</option>
                                                <option>Electronics</option>
                                                <option>   Mobiles </option>
                                                <option>   Music &amp; Audio </option>
                                            </select>
                                            <input type="text" class="form-control" placeholder="Search" name="search" />
                                            <button class="btn-search" type="button"><i class="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>


                        </div>


                        <div class="col-lg-2 col-xs-3 top-cart">
                            <div class="top-cart-contain">
                                <div class="mini-cart">
                                    <div data-toggle="dropdown" data-hover="dropdown" class="basket dropdown-toggle"> <a href="#">
                                        <div class="cart-icon"><i class="fa fa-shopping-cart"></i></div>
                                        <div class="shoppingcart-inner hidden-xs"><span class="cart-title">Carinho</span> <span class="cart-total">4 Item(s)</span></div>
                                    </a></div>
                                    <div>
                                        <div class="top-cart-content">
                                            <div class="block-subtitle hidden-xs">Recently added item(s)</div>
                                            <ul id="cart-sidebar" class="mini-products-list">
                                                <li class="item odd"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="assets/images/products/img07.jpg" alt="Lorem ipsum dolor" width="65" /></a>
                                                    <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                                                        <p class="product-name"><a href="#">Lorem ipsum dolor sit amet Consectetur</a> </p>
                                                        <strong>1</strong> x <span class="price">$20.00</span> </div>
                                                </li>
                                                <li class="item even"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="assets/images/products/img11.jpg" alt="Lorem ipsum dolor" width="65" /></a>
                                                    <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                                                        <p class="product-name"><a href="#">Consectetur utes anet adipisicing elit</a> </p>
                                                        <strong>1</strong> x <span class="price">$230.00</span> </div>
                                                </li>
                                                <li class="item last odd"> <a href="#" title="Ipsums Dolors Untra" class="product-image"><img src="assets/images/products/img10.jpg" alt="Lorem ipsum dolor" width="65" /></a>
                                                    <div class="product-details"> <a href="#" title="Remove This Item" class="remove-cart"><i class="icon-close"></i></a>
                                                        <p class="product-name"><a href="#">Sed do eiusmod tempor incidist</a> </p>
                                                        <strong>2</strong> x <span class="price">$420.00</span> </div>
                                                </li>
                                            </ul>
                                            <div class="top-subtotal">Subtotal: <span class="price">$520.00</span></div>
                                            <div class="actions">
                                                <button class="btn-checkout" type="button"><i class="fa fa-check"></i><span>Checkout</span></button>
                                                <button class="view-cart" type="button"><i class="fa fa-shopping-cart"></i> <span>View Cart</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Cabecalho;