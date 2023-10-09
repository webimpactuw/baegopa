import React from 'react';
import { MenuHeader } from './MenuPage';
import terms_data from './data/terms.json';

const TERMS = terms_data;

export default function TOS() {
    const terms = TERMS.map((term) => {
        return (
            <div class="container-fluid terms">
                <p class="heading">{term.header}</p>
                {term.rules.map((rule) => {
                    return (
                        <p>{rule}</p>
                    )
                })}
            </div>
        )
    })

    return (
        <>
            <MenuHeader />
            <main>
                <div class="image">
                    <img src="images/allyoucaneat.png" alt="Food" style={{ width: '100%', height: 'auto' }} />
                    <div class="top-text">
                        ALL YOU CAN EAT
                        <div class="text-center">
                            GUIDELINES
                        </div>
                    </div>
                </div>
                <div class="container-fluid terms">
                    {terms}
                </div>
            </main>
        </>

    )
};
