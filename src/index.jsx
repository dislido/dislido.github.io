import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Layout from './layout';
import 'style/index.scss';

ReactDOM.render(<HashRouter><Layout /></HashRouter>, document.getElementById('app'));
