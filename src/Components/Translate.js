import React, { useState } from 'react';
import { spellNumber } from './../Routines/Routines'

export const Translate = () => {

    const [toTranslate, setToTranslate] = useState(0);
    const [displayValue, setDisplayValue] = useState("0");
    const translateLanguages = ['RU', 'EN'];
    const translateResults = [];

    translateLanguages.forEach((item) => {
        translateResults.push(spellNumber(item, toTranslate))
    })

    const onChangeHandler = (event) => {
        let num = 0;
        let statusString = '';

        if (isNaN(event.target.value)) {
            statusString = 'Incorrect input'
        } else {
            num = event.target.value * 1;
            statusString = num.toLocaleString();
        }

        setToTranslate(event.target.value);
        setDisplayValue(statusString)
    }


    const submitHandler = async (event) => {
        console.log('toTranslate :>> ', toTranslate);
    }

    return (
        <div>
            <div className="input-field col s6">
                <input
                    placeholder="Amount to spell"
                    id="srcNumber"
                    type="text"
                    className="validate"
                    onChange={onChangeHandler} />
                <label htmlFor="scrNumber">Please enter value to spell</label>
                <button className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={submitHandler}
                >Submit
                        <i className="material-icons right">send</i>
                </button>
            </div>

            <span>
                <strong>
                    {displayValue}
                </strong>
            </span>
            <table className="highlight"  >
                <thead>
                    <tr>
                        <th style={{ width: "10%" }}>Language</th>
                        <th>Result</th>
                    </tr>
                </thead>

                <tbody>
                    {translateResults.map((item, index) => {
                        return (
                            <tr key={translateLanguages[index]}>
                                <td> {translateLanguages[index]} </td>
                                <td> {item} </td>
                            </tr>);
                    })}

                </tbody>
            </table>



        </div>
    );
}