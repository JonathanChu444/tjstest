//this is the individual item in the List.js. There are input form text boxes that edit the coordinate directly 
import React from "react";

const ListItem = props => {
  //props.highlight
    /*let X = parseFloat(props.item.coords.x);
    let Y = parseFloat(props.item.coords.y);
    let Z = parseFloat(props.item.coords.z);*/

    let X = props.item.coords.x;
    let Y = props.item.coords.y;
    let Z = props.item.coords.z; 
    /*if (props.item.coords.x.length > 6) {
      X = X.toExponential();
    }
    if (props.item.coords.y.length > 6) {
      Y = Y.toExponential();
    }
    if (props.item.coords.z.length > 6) {
      Z = Z.toExponential();
    }*/

    return (
      <li className = "liList" style={{backgroundColor: ( props.item.highlight ) ? "yellow":"white"}}>
        <style>
        </style>

        <table className="tableinputlist" border="7" cellSpacing="7">
          <tbody>
          <tr>
            <td>
                <input className="checkboxinputlarger" type="checkbox" checked={props.item.check} value={props.itemIndex} onChange={() => {props.handleCheck(props.itemIndex)}}/>
            </td>
            <td className="todoInputList">
              <center>
                <input
                    className = "inputList"
                    type = "text"
                    iindex = {props.itemIndex}
                    onChange = {props.handleItemEdit}
                    value = {X}
                    placeholder = "x"
                />

                <input
                    className = "inputList"
                    type = "text"
                    iindex = {props.itemIndex}
                    onChange = {props.handleItemEdit}
                    value = {Y}
                    placeholder = "y"
                />

                <input
                    className = "inputList"
                    type = "text"
                    iindex = {props.itemIndex}
                    onChange = {props.handleItemEdit}
                    value = {Z}
                    placeholder = "z"
                />
            
                {/*
                <button className="buttonlistitem" onClick={() => {props.handleEditClick(props.itemIndex)}}>
                  {X}, 
                  <br/>{Y},
                  <br/>{Z}
                </button>*/
                }
              </center>
            </td>
            
            <td>
              <button className="buttonlistitem" onClick={
                () => {props.handleRemove(props.itemIndex)}
                }>
                  ❌
              </button>
            </td>

          </tr>
          </tbody>
        </table>
      </li>
    );
};

export default ListItem;