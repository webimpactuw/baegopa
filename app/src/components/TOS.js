import React from 'react';
import { MenuHeader } from './MenuPage';

const TERMS = [
    {
        header: "Does every party member get charged AYCE?",
        rules: ["Due to the frequent incidents.. tables who order the all you can eat option, every single guest will be charged for the all you can eat price (no exceptions). Those who would not like to eat or are vegetarians will also be charged if they are sitting at the table**"]
    },
    { 
        header: "Is free rice available for AYCE customers?",
        rules: ["Please let our staff know you would like rice. We have seen an increase amount of food waste for NOT eating your rice. To reduce food waste we will no longer provide rice unless asked."]
    },
    {
        header: "When does the AYCE close?",
        rules: ["For the best experience (1.5 hours), we will take AYCE customers up to 1.5 hour prior to closing\" All customers coming in after will be offered our a la carte, ready to eat, and combos selections."]
    },
    {
        header: "GENERAL RULES:",
        rules: [
            "Time limit 1.5 hrs",
            "Everyone at the table must order AYCE",
            "Minimum of 2 AYCE orders",
            "Must finish all plates before ordering more",
            "Only 4 items can be ordered at a time",
            "Take out is not allowed",
            "Extra charge of $1.50 for each rice bowl or soup left over",
            "Extra charge of $5 per person for any meat leftover",
            "Food can not be taken to-go",
            "**Friday-Sunday We look forward to serving your party and ensuring you have a great time and experience at Baegopa! Due to the limited seating capacity, we will need to limit the experience to 2 hours per table so we may allow everyone an equal opportunity to enjoy their time at Baegopa.**",
            "Thank you for your understanding."
        ]
    }
]

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
