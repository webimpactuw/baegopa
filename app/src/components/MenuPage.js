import React from 'react';

export default function MenuPage() {
    return (
        <MenuHeader />
    );
}

function MenuHeader() {
    return (
        <header>
            <nav class="navbar navbar-expand-md main-nav">
                <div class="container-fluid">
                    <a href="index.html" class="navbar-brand mb-0"><img id="logo" src="baegopalogo.png"/></a>
                    <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse my-3" id="navbarNav">
                        <ul class="navbar-nav top-nav ms-auto">
                            <li class="nav-item active">
                                <a href="index.html" class="nav-link active">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="Appetizer.html" class="nav-link">Menu</a>
                            </li>
                            <li class="nav-item">
                                <a href="TOS.html" class="nav-link">AYCE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}