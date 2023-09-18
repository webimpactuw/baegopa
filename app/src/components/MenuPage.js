import React from 'react';

export default function MenuPage() {
    return (
        <MenuHeader />
    );
}

function MenuHeader() {
    return (
        <nav class="navbar navbar-expand-lg menu-header">
            <div class="container-fluid">
                <ul class="navbar-nav bottom-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="Appetizer.html">APPETIZERS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Entree.html">ENTREES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Combos.html">COMBOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="All_You_Can_Eat.html">ALL YOU CAN EAT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Sides.html">SIDES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Drinks.html">DRINKS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="specials.html">SPECIALS</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}