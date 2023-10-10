import React from "react";
import './FillingAlert.css'

const FillingAlert = props => {
    return(
        <div className="filling-alert">
            <div className="filling-alert__box">
                <h3>WARNING!</h3>
                <p>Please fill out all the fields before clicking the Add Expense Button</p>
                <button type='button' onClick={props.onAccept}>Accept</button>
            </div>
        </div>
    )
}

export default FillingAlert