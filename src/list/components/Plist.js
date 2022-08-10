import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/Plist.css";

import InputForm from "./InputForm";

import List from './List';

// import EditItem from "./EditItem";

class Plist extends Component {
  //There are two objects, pendingEdit and pendingItemc, one for editing and one for submitting. They hold temporary coords that are later put into the official list via the newItemSubmitHandler and editHandler respectively.
  // constructor(props) {
  //   super(props);
  //
  //   // getInitialState
  //   this.props = {
  //     list: [],
  //
  //     pendingItem: "",
  //
  //     pendingEdit: {
  //       x: '',
  //       y: '',
  //       z: '',
  //     },
  //
  //     pendingItemc: {
  //       x: '',
  //       y: '',
  //       z: '',
  //     },
  //
  //     showEdit: false
  //   };
  // }



  /*handleSearch = e => {
    e.preventDefault();
    this.setState({
      list: this.props.list.map(item => {
        if(this.pendingItem2 === item.name) {
          return {...item, highlight: !item.highlight};
        }
        return item;
      })
    });
    console.log(this.props.list[0]);
  }*/

  render() {
    return (
      <div className="wrapperList">
        <InputForm
          newItemSubmitHandler = {this.props.newItemSubmitHandler}
          handleItemInput = {this.props.handleItemInput}
          pendingItem = {this.props.pendingItem}
          pendingItemc = {this.props.pendingItemc}
        />

        <List
          list = {this.props.list}
          showEdit = {this.props.showEdit}
          pendingEdit = {this.props.pendingEdit}
          handleRemove = {this.props.handleRemove}
          handleCheck = {this.props.handleCheck}
          handleEditClick = {this.props.handleEditClick}
          editHandler = {this.props.editHandler}
          handleItemEdit = {this.props.handleItemEdit}
        />

        <button className= "buttonList" onClick={this.props.handlecRemove}>
          Delete Checked
        </button>

        <br/>

        <button className = "buttonList" type = "submit" onClick={this.props.deleteall}>
          Delete All
        </button>

      </div>
    );
  }
}

export default Plist;
