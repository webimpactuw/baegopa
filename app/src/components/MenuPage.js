import React from 'react';
import { Link } from 'react-router-dom';

export function MenuHeader() {
    return (
        <nav className="navbar navbar-expand-lg menu-header">
            <div className="container-fluid">
                <ul className="navbar-nav bottom-nav">
                    <li className="nav-item">
                        <Link to="/menu/appetizers" className="nav-link">APPETIZERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu/entrees" className="nav-link">ENTREES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu/combos" className="nav-link">COMBOS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu/ayce" className="nav-link">ALL YOU CAN EAT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu/sides" className="nav-link">SIDES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu/drinks" className="nav-link">DRINKS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu/specials" className="nav-link">SPECIALS</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

/*
| Menu Item |
Korean:
English:
description:
Price:

| Featured Items |
Title:
description:
Picture:


*/

const APPETIZER_ITEMS = [
    {
        korean: '감자튀김',
        english: 'FRENCH FRIES',
        price: 5.95
    },
    {
        korean: '계란찜',
        english: 'STEAMED EGG',
        price: 7.95
    },
    {
        korean: '해물파전',
        english: 'SEAFOOD PANCAKES',
        price: 15.95
    },
    {
        korean: '김치전',
        english: 'KIMCHI PANCAKE',
        price: 14.95
    },
    {
        korean: '마늘치킨',
        english: 'FRIED GARLIC WINGS',
        price: 15.95
    },
    {
        korean: '**NEW**',
        english: 'YUZU HOT WINGS',
        price: 16.95
    }
]

const APPETIZER_FEATURES = [
    {
        title: 'CUSTOMER\'S FAVORITE',
        description: 'Seafood pancake! It\'s crunchy, chewy, and delicious!',
        picture: '/images/pancake.jpg',
        alt: 'Seafood Pancake'
    },
    {
        title: 'YUZU HOT WINGS',
        description: 'Spicy, sweet, and tangy! You\'ll be craving these wings for days!',
        picture: '/images/yuzu.jpg',
        alt: 'Yuzu Hot Wings'
    }
]

const ENTREE_ITEMS = [
    {
        korean: '순두부찌개',
        english: 'SOFT TOFU SOUP',
        description: 'CHOICE OF BEEF OR PORK',
        price: 13.95
    },
    {
        korean: '김치찌개',
        english: 'KIMCHI SOUP',
        description: 'SPICY KIMCHI STEW WITH TOFU',
        price: 13.95
    },
    {
        korean: '김치 볶음밥',
        english: 'KIMCHI FRIED RICE',
        description: '',
        price: 13.95
    },
    {
        korean: '삼겹살 볶음밥',
        english: 'PORK BELLY FRIED RICE',
        description: '',
        price: 13.95
    },
    {
        korean: '매운치킨볶음밥',
        english: 'SPICY CHICKEN FRIED RICE',
        description: '',
        price: 13.95
    },
    {
        korean: '매운닭불고기',
        english: 'SPICY CHICKEN',
        description: '',
        price: 17.95
    },
    {
        korean: '불고기',
        english: 'BULGOGI',
        description: '',
        price: 17.95
    },
    {
        korean: '마늘 불고기',
        english: 'GARLIC BEEF',
        description: '',
        price: 17.95
    },
    {
        korean: '뼈없는 짧은 갈비',
        english: 'MARINATED BONELESS SHORT RIBS',
        description: '',
        price: 28.95
    },
    {
        korean: '비빔밥',
        english: 'BIBIMBAP',
        description: '*CONSUMING RAW OR UNDERCOOKED MEAT, POULTRY, SEAFOOD, SHELLFISH OR EGG MAY INCREASE YOUR RISK OF FOOD BORNE ILLNESS',
        price: 15.95
    }
]

const ENTREE_FEATURES = [
    {
        title: 'ALL COMBOS GET A FREE SOUP',
        description: 'Try our soft tofu soup. Spicy and delicious!',
        picture: '/images/hotpotentree.png',
        alt: 'Soondubu'
    }
]

export function AppetizersPage() {

    const appetizer_items = APPETIZER_ITEMS.map((item, index) => {
        return (
            <tr key={index}>
                <td id="korean">{item.korean}</td>
                <td id="english"><p className="combine">{item.english}</p>
                    <p className="description">{item.description}</p></td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const appetizer_features = APPETIZER_FEATURES.map((item, index) => {
        return (
            <article className="feature">
                <h3>{item.title}</h3>
                <div className="line-center"></div>
                <p className="normal">{item.description}</p>
                <div className="text-center">
                    <img src={item.picture} className="img-fluid" alt={item.alt} />
                </div>
            </article>
        )
    })

    return (
        <>
            <MenuHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="col menu">
                        <h1 id="menu-text">APPETIZERS</h1>
                        <hr />
                        <div id="container">
                            <table className="menu-items" width="100%">
                                <colgroup>
                                    <col span="1" style={{ width: '25%' }} />
                                </colgroup>
                                <tbody>
                                    {appetizer_items}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {appetizer_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export function EntreesPage() {

    const entree_items = ENTREE_ITEMS.map((item, index) => {
        return (
            <tr key={index}>
                <td id="korean">{item.korean}</td>
                <td id="english"><p className="combine">{item.english}</p>
                    <p className="description">{item.description}</p></td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const entree_features = ENTREE_FEATURES.map((item, index) => {
        return (
            <article className="feature" key={index}>
                <h3>{item.title}</h3>
                <div className="line-center"></div>
                <p className="normal">{item.description}</p>
                <div className="text-center">
                    <img src={item.picture} className="img-fluid" alt={item.alt} />
                </div>
            </article>
        );
    })

    return (
        <>
            <MenuHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="col menu">
                        <h1 id="menu-text">READY TO EAT ENTREES</h1>
                        <hr />
                        <div id="container">
                            <table className="menu-items" width="100%">
                                <colgroup>
                                    <col span="1" style={{ width: '25%' }} />
                                </colgroup>
                                <tbody>
                                    {entree_items}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {entree_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export function CombosPage() {

    const entree_items = COMBO_ITEMS.map((item, index) => {
        return (
            <tr key={index}>
                <td id="korean">{item.korean}</td>
                <td id="english"><p className="combine">{item.english}</p>
                    <p className="description">{item.description}</p></td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const entree_features = COMBO_FEATURES.map((item, index) => {
        return (
            <article className="feature" key={index}>
                <h3>{item.title}</h3>
                <div className="line-center"></div>
                <p className="normal">{item.description}</p>
                <div className="text-center">
                    <img src={item.picture} className="img-fluid" alt={item.alt} />
                </div>
            </article>
        );
    })

    return (
        <>
            <MenuHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="col menu">
                        <h1 id="menu-text">READY TO EAT ENTREES</h1>
                        <hr />
                        <div id="container">
                            <table className="menu-items" width="100%">
                                <colgroup>
                                    <col span="1" style={{ width: '25%' }} />
                                </colgroup>
                                <tbody>
                                    {entree_items}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {entree_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}


