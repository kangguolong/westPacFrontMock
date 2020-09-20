import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../components/Header'
import CommentsComponent from '../components/CommentsComponent';
import WestpacFront from '../components/WestpacFront';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div style={{margin: "15px"}}>
                    <Header />
                    <Route exact path="/" component={WestpacFront} />
                    <Route path="/comments/:postNo" component={CommentsComponent} />
                </div>
            </Router>
        );
    }
}
