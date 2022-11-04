import { random } from 'lodash';
import React from 'react';

export default function Rumi() {
    const quote = chooseRumiQuote()
    return (
        <div>
            <h2>Rumi Randomizer</h2>
            <NewlineText text={quote}/>
        </div>
    )
}

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }

function chooseRumiQuote() {
    const r = random(quotes.length - 1)
    return quotes[r]
}

const quotes = [
    'Your task is not to seek for love, \nbut merely to seek and find \nall the barriers within yourself \nthat you have built against it.',
    'Out beyond ideas \nof wrongdoing and rightdoing \nthere is a field. \nI\'ll meet you there.',
    'Dance, when you\'re broken open. \nDance, if you\'ve torn the bandage off. \nDance in the middle of the fighting. \nDance in your blood. \nDance when you\'re perfectly free.',
    'When I am with you, we stay up all night. \nWhen you\'re not here, I can\'t go to sleep. \nPraise God for those two insomnias! \nAnd the difference between them.',
    'Silence is the language of god, \nall else is poor translation.',
    'This being human is a guest house. \nEvery morning is a new arrival. \nA joy, a depression, a meanness, \nsome momentary awareness comes as an unexpected visitor...\n\nWelcome and entertain them all. \nTreat each guest honorably. \nThe dark thought, the shame, the malice, \nmeet them at the door laughing, and invite them in. \nBe grateful for whoever comes, \nbecause each has been sent as a guide from beyond.',
    'You are not a drop in the ocean. \nYou are the entire ocean in a drop.',
]