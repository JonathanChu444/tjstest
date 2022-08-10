import ResizePanel from "react-resize-panel";
import style from './App.css';
import classNames from 'classnames/bind';
import React, { Component } from 'react'
import Plist from './list/components/Plist.js';
import Window from './tjswindow/Window.js';

let cx = classNames.bind(style);

class App extends Component {

  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      list: [],

      pendingItem: "",

      pendingEdit: {
        x: '',
        y: '',
        z: '',
      },

      pendingItemc: {
        x: '',
        y: '',
        z: '',
      },

      showEdit: false
    };
  }

  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('body')}>
          <ResizePanel direction="e" style={{ flexGrow: '1' }} >
            <div className={cx('sidebar', 'withMargin', 'panel')}>
              <Plist state={this.state}/>
            </div>
          </ResizePanel>

          <div className={cx('content', 'panel')}>
            <Window/>
          </div>
        </div>
      </div>
    )
  }
}
