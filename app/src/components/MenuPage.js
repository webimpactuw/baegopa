import React from 'react';
import { Link } from 'react-router-dom';
import appetizer_items_data from './data/appetizer_items.json';
import appetizer_features_data from './data/appetizer_features.json';
import entree_items_data from './data/entree_items.json';
import entree_features_data from './data/entree_features.json';
import alacarte_items_data from './data/alacarte_items.json';
import combos_data from './data/combos.json';
import combo_features_data from './data/combo_features.json';
import ayce_items_data from './data/ayce_items.json';
import ayce_features_data from './data/ayce_features.json';
import side_items_data from './data/side_items.json';
import side_features_data from './data/side_features.json';
import drink_items_data from './data/drinks.json';
import drink_features_data from './data/drink_features.json';

const APPETIZER_ITEMS = appetizer_items_data;

const APPETIZER_FEATURES = appetizer_features_data;

const ENTREE_ITEMS = entree_items_data;

const ENTREE_FEATURES = entree_features_data;

const ALACARTE_ITEMS = alacarte_items_data;

const COMBOS = combos_data;

const COMBO_FEATURES = combo_features_data;

const AYCE_ITEMS = ayce_items_data;

const AYCE_FEATURES = ayce_features_data;

const SIDE_ITEMS = side_items_data;

const SIDE_FEATURES = side_features_data;

const BEER = drink_items_data.beer;

const SOJU = drink_items_data.soju;

const FLAVORED_SOJU = drink_items_data.flavored_soju;

const MAKGEOLLI = drink_items_data.makgeolli;

const NON_ALCOHOLIC = drink_items_data.non_alcoholic;

const DRINK_FEATURES = drink_features_data;

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
            <div className="menu-section" key={index}>
                <h1 id="menu-text">{combo.sectionName}<span class="price">{combo.price}</span></h1>
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
                        <div className="menu-section">
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
    const beer = BEER.map((item, index) => {
        return (
            <tr key={index}>
                <td id="english"><p className="combine">{item.english}</p>
                    <p className="description">{item.description}</p></td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const soju = SOJU.items.map((item, index) => {
        return (
            <tr key={index}>
                <td id="english">{item}</td>
                <td id="price">{SOJU.price}</td>
            </tr>
        );
    })

    const flavored_soju = FLAVORED_SOJU.items.map((item, index) => {
        return (
            <tr key={index}>
                <td id="english">{item}</td>
                <td id="price">{FLAVORED_SOJU.price}</td>
            </tr>
        );
    })

    const makgeolli = MAKGEOLLI.map((item, index) => {
        return (
            <tr key={index}>
                <td id="english"><p className="combine">{item.english}</p>
                    <p className="description">{item.description}</p></td>
                <td id="price">{item.price}</td>
            </tr>
        );
    })

    const non_alcoholic = NON_ALCOHOLIC.map((item, index) => {
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
                        <div className="menu-section">
                            <h1 id="menu-text">BEER</h1>
                            <hr />
                            <div id="container">
                                <table className="menu-items" width="100%">
                                    <colgroup>
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <tbody>
                                        {beer}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="menu-section">
                            <h1 id="menu-text">SOJU<span class="price">{soju.price}</span></h1>
                            <hr />
                            <div id="container">
                                <table className="menu-items" width="100%">
                                    <colgroup>
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <tbody>
                                        {soju}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="menu-section">
                            <h1 id="menu-text">FLAVORED SOJU<span class="price">{flavored_soju.price}</span></h1>
                            <hr />
                            <div id="container">
                                <table className="menu-items" width="100%">
                                    <colgroup>
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <tbody>
                                        {flavored_soju}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="menu-section">
                            <h1 id="menu-text">MAKGEOLLI</h1>
                            <hr />
                            <div id="container">
                                <table className="menu-items" width="100%">
                                    <colgroup>
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <tbody>
                                        {makgeolli}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="menu-section">
                            <h1 id="menu-text">NON-ALCOHOLIC</h1>
                            <hr />
                            <div id="container">
                                <table className="menu-items" width="100%">
                                    <colgroup>
                                        <col span="1" style={{ width: '25%' }} />
                                    </colgroup>
                                    <tbody>
                                        {non_alcoholic}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center recommendation">
                        <section>
                            {drink_features}
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export function SpecialsPage() {
    return (
        <>
            <MenuHeader />
            <div class="container-fluid">
                <div class="row">
                    <div class="col menu">
                        <section>
                            <article>
                                <h1 id="menu-text">SIDES</h1>
                                <hr />
                                <img class="img-fluid" src="\images/okonomiyaki.png" />
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}


