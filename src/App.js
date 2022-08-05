import ResizePanel from "react-resize-panel";
import style from './App.css';
import classNames from 'classnames/bind';
import React, { Fragment, useRef, useEffect, useState, useCallback, useContext, useMemo } from 'react'
import Plist from './list/components/Plist.js';
import Window from './tjswindow/Window.js';

let cx = classNames.bind(style);

export default function App() {
  return (
    <div className={cx('container')}>
      <div className={cx('body')}>
        <ResizePanel direction="e" style={{ flexGrow: '1' }} >
          <div className={cx('sidebar', 'withMargin', 'panel')}>
            <Plist/>
          </div>
        </ResizePanel>

        <div className={cx('content', 'panel')}>
          <Window/>
        </div>
      </div>
    </div>
  )
}
