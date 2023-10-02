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

const ALACARTE_ITEMS = {
    sectionName: 'A LA CARTE',
    description: 'MINIMUM OF 2 ORDERS TO BBQ. COMES WTH 1 SIDE SALAD (NO REFILL ON SALAD OR RICE)',
    items: [
        {
            korean: '**NEW** 오징어',
            english: 'SQUID',
            price: 30.95
        },
        {
            korean: '뼈없는 짧은 갈비',
            english: 'MARINATED BONELESS SHORT RIBS',
            price: 40.95
        },
        {
            korean: '차돌백이',
            english: 'PRIME BEEF BRISKET',
            price: 28.75
        },
        {
            korean: '마늘 돼지 고기',
            english: 'GARLIC PORK',
            price: 28.85
        },
        {
            korean: '마늘 불고기',
            english: 'GARLIC BEEF',
            price: 28.75
        },
        {
            korean: '불고기',
            english: 'MARINATED BEEF BRISKET',
            price: 28.75
        },
        {
            korean: '삼겹살',
            english: 'PORK BELLY',
            price: 26.95
        },
        {
            korean: '매운 닭불고기',
            english: 'SPICY CHICKEN',
            price: 26.95
        }

    ]
}

const COMBOS = [
    {
        sectionName: 'COMBO 1',
        description: '(RECOMMENDED 3-4 PEOPLE) COMES WITH 1 SIDE SALAD & 1 SIDE SOUP (NO REFILL ON SALAD/SOUP/RICE)',
        price: '115.95',
        items: [
            {
                korean: '차돌백이',
                english: 'PRIME SLICE OF MARBLED BEEF BRISKET (2)'
            },
            {
                korean: '삼겹살',
                english: 'PORK BELLY'
            },
            {
                korean: '뼈없는 짧은 갈비',
                english: 'MARINATED BONELESS SHORT RIBS'
            },
            {
                korean: '순두부찌개',
                english: 'SOFT TOFU SOUP (BEEF OR PORK)'
            },
            {
                korean: '',
                english: 'SIDE SALAD'
            }
        ]
    },
    {
        sectionName: 'COMBO 2',
        description: '(RECOMMENDED 3-4 PEOPLE) COMES WITH 1 SIDE SALAD (NO REFILL ON SALAD OR RICE)',
        price: '79.95',
        items: [
            {
                korean: '차돌백이',
                english: 'PRIME SLICE OF MARBLED BEEF BRISKET (2)'
            },
            {
                korean: '불고기',
                english: 'MARINATED BEEF BRISKET'
            },
            {
                korean: '삼겹살',
                english: 'PORK BELLY'
            },
            {
                korean: '',
                english: 'SIDE SALAD'
            }
        ]
    },
    {
        sectionName: 'COMBO 3',
        description: '(RECOMMENDED 2-3 PEOPLE) COMES WITH 1 SIDE SOUP (NO REFILL ON SOUP OR RICE)',
        price: '58.95',
        items: [
            {
                korean: '삼겹살',
                english: 'PORK BELLY'
            },
            {
                korean: '매운 닭불고기',
                english: 'SPICY CHICKEN'
            },
            {
                korean: '순두부찌개',
                english: 'SOFT TOFU SOUP (BEEF OR PORK)'
            },
            {
                korean: '차돌백이',
                english: 'PRIME SLICE OF MARBLED BEEF BRISKET (2)'
            }
        ]
    }
]

const COMBO_FEATURES = [
    {
        title: 'ADD YOUR FAVORITE SOJU!',
        description: 'Perfect drink for any dish! We have all your favorite flavors from apple to yogurt.',
        picture: '/images/drinking.png',
        alt: 'Soju bottles'
    },
    {
        title: 'SOONDUBU',
        description: 'Try our soft tofu soup. Spicy and delicious!',
        picture: '/images/tofusoup.png',
        alt: 'Soondubu'
    },
    {
        title: 'NOT ENOUGH FOOD? CONSIDER AYCE!',
        description: '',
        picture: '/images/AYCE.png',
        alt: 'banchan'
    }
]

const AYCE_ITEMS = {
    price: 'ADULT 36.95 / KIDS (3-7 YR) 15.95',
    items: [
        {
            korean: '**NEW** 오징어',
            english: 'SQUID'
        },
        {
            korean: '뼈없는 짧은 갈비',
            english: 'MARINATED BONELESS SHORT RIBS'
        },
        {
            korean: '새우',
            english: 'SHRIMP'
        },
        {
            korean: '라이스페이퍼',
            english: 'RICE PAPER SHEETS'
        },
        {
            korean: '마늘 돼지고기',
            english: 'GARLIC PORK'
        },
        {
            korean: '마늘 불고기',
            english: 'GARLIC BEEF'
        },
        {
            korean: '차돌박이',
            english: 'PRIME SLICE OF MARBLED BEEF BRISKET'
        },
        {
            korean: '매운닭불고기',
            english: 'SPICY CHICKEN'
        },
        {
            korean: '삼겹살',
            english: 'SLICES OF PORK BELLY'
        },
        {
            korean: '불고기',
            english: 'MARINATED BEEF BRISKET'
        },
        {
            korean: '순두부찌개',
            english: 'SOFT TOFU SOUP'
        },
        {
            korean: '된장찌개',
            english: 'SOYBEAN PASTE SOUP'
        },
        {
            korean: '**LIMITED TIME ONLY**',
            english: 'NON-MARINATED RIBEYE'
        },
        {
            korean: '**LIMITED TIME ONLY**',
            english: 'MARINATED RIBEYE'
        }
    ]
}

const AYCE_FEATURES = [
    {
        title: 'ALL YOU CAN EAT MEAT TIER',
        description: 'We have a variety of meats to choose from!',
        picture: '/images/meats.png',
        alt: 'all you can eat meats'
    },
    {
        title: 'ENJOY A NEW SUMMER DRINK!',
        description: 'Fresh Mango and Strawberry Makgeolli Slush! Refreshing and Delicious!',
        picture: '/images/mangomakgeolli.png',
        alt: 'mango makgeolli'
    }
]

const SIDE_ITEMS = [
    {
        english: "LETTUCE",
        price: "3.50"
    },
    {
        english: "SALAD",
        price: "3.50"
    },
    {
        english: "RICE PAPER SHEETS",
        price: "1.99"
    },
    {
        english: "RICE",
        price: "1.99"
    }
]

const SIDE_FEATURES = [
    {
        title: 'AYCE COMES WITH FREE SALAD AND SIDES',
        description: '',
        picture: '/images/sides.png',
        alt: 'salad and sides'
    }
]

const DRINKS = {
    category: 'BEER',
    items: [
        {
            english: 'KIRIN 5%',
            description: '',
            price: 7.75
        },
        {
            english: 'TERRA 4.6% (500 ML)',
            description: '',
            price: 8.55
        },
        {
            english: 'BEER PITCHER',
            description: '',
            price: 22.95
        },
        {
            english: 'SOMAEK TOWER',
            description: 'A COMBINATION OF BEER AND SOJU FLAVOR OF YOUR CHOICE',
            price: 32.95
        }
    ]
}

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
            <article className="feature" key={index}>
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

    const alacarte_items = ALACARTE_ITEMS.items.map((item, index) => {
        return (
            <tr key={index}>
                <td id="korean">{item.korean}</td>
                <td id="english">{item.english}</td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const combo_items = COMBOS.map((combo, index) => {
        const items = combo.items.map((item, index) => {
            return (
                <tr key={index}>
                    <td id="korean">{item.korean}</td>
                    <td id="english">{item.english}</td>
                </tr>
            );
        })
        return (
            <div className="combo" key={index}>
                <h1 id="menu-text">{combo.sectionName}</h1>
                <hr />
                <p id="menu-subheader">{combo.description}</p>
                <div id="container">
                    <table className="menu-items" width="100%">
                        <colgroup>
                            <col span="1" style={{ width: '25%' }} />
                        </colgroup>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    })

    const combo_features = COMBO_FEATURES.map((item, index) => {
        return (
            <article className="feature" key={index}>
                <h3>{item.title}</h3>
                <div className="line-center"></div>
                <p className="normal">{item.description}</p>
                <div className="text-center">
                    <img src={item.picture} className="img-fluid" alt={item.alt}
                        onError={(e) => {
                            console.error('Image load error:', e.target.src);
                        }} />
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
                        <div>
                            <h1 id="menu-text">A LA CARTE</h1>
                            <hr />
                            <p id="menu-subheader">MINIMUM OF 2 ORDERS TO BBQ. COMES WTH 1 SIDE SALAD (NO REFILL ON SALAD OR RICE)</p>
                            <div id="container">
                                <table className="menu-items" width="100%">
                                    <colgroup>
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <tbody>
                                        {alacarte_items}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            {combo_items}
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {combo_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export function AYCEPage() {

    const ayce_items = AYCE_ITEMS.items.map((item, index) => {
        return (
            <tr key={index}>
                <td id="korean">{item.korean}</td>
                <td id="english">{item.english}</td>
            </tr>
        );
    })

    const ayce_features = AYCE_FEATURES.map((item, index) => {
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
                        <h1 id="menu-text">ALL YOU CAN EAT</h1>
                        <hr />
                        <p id="ayce-price">{AYCE_ITEMS.price}</p>
                        <Link to="/TOS" className="nav-link tos-link"><p className='underline'>PLEASE LOOK AT AYCE POLICY BEFORE ORDERING</p></Link>
                        <div id="container">
                            <table className="menu-items" width="100%">
                                <colgroup>
                                    <col span="1" style={{ width: '25%' }} />
                                </colgroup>
                                <tbody>
                                    {ayce_items}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {ayce_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export function SidesPage() {
    const side_items = SIDE_ITEMS.map((item, index) => {
        return (
            <tr key={index}>
                <td id="english">{item.english}</td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const side_features = SIDE_FEATURES.map((item, index) => {
        return (
            <article className="feature" key={index}>
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
                        <h1 id="menu-text">SIDES</h1>
                        <hr />
                        <div id="container">
                            <table className="menu-items" width="100%">
                                <colgroup>
                                    <col span="1" style={{ width: '25%' }} />
                                </colgroup>
                                <tbody>
                                    {side_items}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {side_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export function DrinksPage() {
    const drinks = DRINKS.map((item, index) => {
        return (
            <tr key={index}>
                <td id="english"><p className="combine">{item.english}</p>
                    <p className="description">{item.description}</p></td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const drink_features = DRINK_FEATURES.map((item, index) => {
        return (
            <article className="feature" key={index}>
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
                        <h1 id="menu-text">SIDES</h1>
                        <hr />
                        <div id="container">
                            <table className="menu-items" width="100%">
                                <colgroup>
                                    <col span="1" style={{ width: '25%' }} />
                                </colgroup>
                                <tbody>
                                    {/* {sides_items} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {/* {sides_features} */}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}


