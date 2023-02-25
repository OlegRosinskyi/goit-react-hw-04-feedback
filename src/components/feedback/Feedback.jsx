import React, { useState } from "react";

import ButtonSingl from "./button/Button";
import { BoxButton } from "./Feedback.styled";
import { StatisticsList } from "./Feedback.styled";
const arrayNameButtons = ["Good", "Neutral", "Bad"];
let activId = 'nan';

export default function BlokButtonSelect(){
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [buttonActiv, setButtonActiv] = useState('');

    const updateStatistic = event => {
        setTimeout(() => { setButtonActiv('') }, 100);
        activId = event.target.id;
        if (activId === '0') { setGood(good + 1); setButtonActiv(arrayNameButtons[0]); };
        if (activId === '1') { setNeutral(neutral + 1); setButtonActiv(arrayNameButtons[1]); };
        if (activId === '2') { setBad(bad + 1); setButtonActiv(arrayNameButtons[2]); }; 
    }
return (
            <>
            <BoxButton>
                    {arrayNameButtons.map((NameButton, i) => <ButtonSingl key={NameButton} id={i} NameButton={NameButton}
                        activeStateHandler={updateStatistic}  buttonActiv={buttonActiv} />)}
            </BoxButton>
                <div>
                    {(good === 0 && neutral === 0 && bad === 0)? ( <p>No feedbask given</p> ) : (
                <>
                    <h3>Statistics</h3>
                    <StatisticsList>
                        <li>Good: {good} </li>
                        <li>Neutral: {neutral} </li>
                        <li>Bad: {bad}</li>
                        <li>Total: {good + neutral + bad}</li>
                        <li>Positive feedback: { Math.round(100 * good/(good + neutral + bad))} % </li>  
                    </StatisticsList> </>)}
                </div>
            </> )  
};


