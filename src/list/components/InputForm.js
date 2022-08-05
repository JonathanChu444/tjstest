//These are the input forms at the top of the page
import React from "react";

const InputForm = props => {
    return (
        <form onSubmit={props.newItemSubmitHandler} className = "todoinputList">
            <center>
                <input
                    className = "inputList"
                    type = "text"
                    onChange = {props.handleItemInput}
                    value = {props.pendingItemc.x}
                    placeholder = "x"
                />
                
                <input
                    className = "inputList"
                    type = "text"
                    onChange = {props.handleItemInput}
                    value = {props.pendingItemc.y}
                    placeholder = "y"
                />
                
                <input
                    className = "inputList"
                    type = "text"
                    onChange = {props.handleItemInput}
                    value = {props.pendingItemc.z}
                    placeholder = "z"
                />
            </center>
            <button className = "buttonsubmitList" type = "submit" name = "submit" value = "submit" onSubmit={props.newItemSubmitHandler}>
                Add
            </button>
        </form>
    );
};

export default InputForm;