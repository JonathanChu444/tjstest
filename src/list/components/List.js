//This is the list where all the ListItem.js items are stored
import React from "react";
import ListItem from "./ListItem";

const List = props => {
    return (
        <div className = "mainlist">
            <ul className = "ulList">
                {props.list.map((item, index) => (
                    <ListItem
                        handleCheck = {props.handleCheck}
                        key={index}
                        itemIndex={index}
                        handleRemove={props.handleRemove}
                        item = {item}
                        handleItemEdit = {props.handleItemEdit}
                        handleEditClick = {props.handleEditClick}
                    />
                ))}
            </ul>
        </div>

    );
  };

export default List;