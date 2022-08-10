import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/Plist.css";

import InputForm from "./InputForm";

import List from './List';

import EditItem from "./EditItem";

const Plist = props => {
  //There are two objects, pendingEdit and pendingItemc, one for editing and one for submitting. They hold temporary coords that are later put into the official list via the newItemSubmitHandler and editHandler respectively.
  // constructor(props) {
  //   super(props);
  //
  //   // getInitialState
  //   this.state = {
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

  //checkvalues checks the values in the three input forms so that the newItemSubmitHandler doesn't submit any non-integers
  checkvalues = (X,Y,Z) => {
    if (X !== "" && Y !== "" && Z !== "" && this.checkValue(X) && this.checkValue(Y) && this.checkValue(Z)){
      return true;
    }
    else{
      return false;
    }
  }

  //newItemSubmitHandler takes in the inputted values from InputForm.js and adds a new item to the main list via setState
  newItemSubmitHandler = e => {
    e.preventDefault();
    if (this.checkvalues(this.state.pendingItemc.x, this.state.pendingItemc.y, this.state.pendingItemc.z) === false) return;
    this.setState({
      list: [
        {
          name:this.state.pendingItem,
          check: false,
          highlight: false,
          coords: {
            x:this.state.pendingItemc.x,
            y:this.state.pendingItemc.y,
            z:this.state.pendingItemc.z,
          }
        },
        ...this.state.list
      ],
      pendingItemc: {
        x:"",
        y:"",
        z:"",
      },

      pendingItem:""
    });
    console.log(this.state.pendingItem);
  };

  //editHandler takes in the inputted values from ListItem.js and edits the main list via setState at that specific index
  editHandler = e => {
    e.preventDefault();
    if (this.checkvalues(this.state.pendingEdit.x, this.state.pendingEdit.y, this.state.pendingEdit.z) === false) return;
    const newState = this.state.list;

    for(let i = 0; i < newState.length; i++) {
      if(newState[i].highlight) {
        newState[i].coords.x = this.state.pendingEdit.x;
        newState[i].coords.y = this.state.pendingEdit.y;
        newState[i].coords.z = this.state.pendingEdit.z;
      }
    }

    this.setState({
      list: newState
    });
  }

  //when a text box is selected on the itemList, handleEditClick will copy the values from the selected item at that index and put it into the pendingEdit object to be editted.
  handleEditClick = index => {
    const newState = this.state.list;

    /*
    newState.forEach(item=>{
      item.highlight = false;
    })
    */
    /*let isHighlighted = false
    if(newState[index].highlight) {
      isHighlighted = true
    }

    for(let i = 0; i < newState.length; i++) {
      newState[i].highlight = false;
    }

    newState[index].highlight = !isHighlighted;

    this.state.showEdit = newState[index].highlight;*/

    this.setState({
      list: newState,
      pendingEdit: {
        x: newState[index].coords.x,
        y: newState[index].coords.y,
        z: newState[index].coords.z
      },
    });
  }

  //this sets the values in the input boxes
  handleItemInput = e => {
    let value = e.target.value
    let type = e.target.placeholder;
    if (type === "Item")
      this.setState({
        pendingItem: e.target.value
      });
    else
    //otherwise type can either be x, y, z
      this.setState(prevState => ({
        pendingItemc : {
          ...prevState.pendingItemc,
          [type]: value
        }
      }));
  }

  //this checks a singular value for whether or not it is a real integer or not, doesn't accept any characters
  checkValue = val =>{
    if(val === '.' || val === '0-' || val === '-' || !isNaN(val)){
      return true;
    }
    else{
      return false;
    }
  }

  //this edits a value at the specific index and coord type (x,y, or z ) by getting the iindex attribute.
  handleItemEdit = e => {
    let value = e.target.value;
    let itemIndex = e.target.getAttribute("iindex");
    let type = e.target.getAttribute("placeholder");
    window.tempt = e.target;
    /*this.setState(prevState => ({
      pendingEdit : {
        ...prevState.pendingEdit,
        [type]: value
      }
    }));*/
    if (this.checkValue(value) === false) return;


    const newState = this.state.list;
    //const tempNegState = this.state.pendingEdit;
    var splicedValue = value.split('');
    var combinedNumber = 0;
    /*console.log(itemIndex);
    console.log(e.target);
    console.log(type);*/
    if(value === '0-'){
      newState[itemIndex].coords[type] = '-0';
    }
    else if (value === '' || value === '-'){
      newState[itemIndex].coords[type] = 0;
    }
    else if (value === '0.'){
      newState[itemIndex].coords[type] = value;
    }
    else if (value === '-01' || value === '-02' || value === '-03' || value === '-04' || value === '-05' || value === '-06' || value === '-07' || value === '-08' || value === '-09'){
      splicedValue = splicedValue[2];
      combinedNumber = splicedValue.toString();
      newState[itemIndex].coords[type] = '-' + combinedNumber;
    }
    else if (newState[itemIndex].coords[type] === 0){
      splicedValue = splicedValue[1];
      combinedNumber = splicedValue.toString();
      newState[itemIndex].coords[type] = combinedNumber;
    }
    else{
      newState[itemIndex].coords[type] = value;
    }
    this.setState({
      list: newState
    });
  }

  //handles the removal of items that are checked
  handlecRemove = e => {
    const newState = this.state.list.filter(item => item.check !== true);
    this.setState({
      list: newState
    });
  }

  //handles the removal of items that have been clicked on their delete button
  handleRemove = index => {
    const newState = this.state.list.filter(item => this.state.list.indexOf(item) !== index);
    this.setState({
      list: newState
    });
  };

  /*handleRemove2 = index => {
    list: this.state.list.map(item => {
      if(box === 'checked') {
      }
    })
  });*/

  //deletes every item in the list
  deleteall = e => {
    e.preventDefault();
    this.setState({
      list: []
    });
  };

  //changes the status of whether or not an item is checked
  handleCheck = index => {
    var newlist = this.state.list;
    newlist[index].check = !newlist[index].check;
    this.setState({
      list: newlist
    });
  };

  /*handleSearch = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.map(item => {
        if(this.pendingItem2 === item.name) {
          return {...item, highlight: !item.highlight};
        }
        return item;
      })
    });
    console.log(this.state.list[0]);
  }*/

  return (
    <div className="wrapperList">
      <InputForm
        newItemSubmitHandler = {this.newItemSubmitHandler}
        handleItemInput = {this.handleItemInput}
        pendingItem = {this.state.pendingItem}
        pendingItemc = {this.state.pendingItemc}
      />

      <List
        list = {this.state.list}
        handleRemove = {this.handleRemove}
        handleCheck = {this.handleCheck}
        handleEditClick = {this.handleEditClick}
        showEdit = {this.state.showEdit}
        editHandler = {this.editHandler}
        handleItemEdit = {this.handleItemEdit}
        pendingEdit = {this.state.pendingEdit}
      />

      <button className= "buttonList" onClick={this.handlecRemove}>
        Delete Checked
      </button>

      <br/>

      <button className = "buttonList" type = "submit" onClick={this.deleteall}>
        Delete All
      </button>

    </div>
  );
}

export default Plist;
