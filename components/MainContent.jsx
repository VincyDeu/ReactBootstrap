import React, { Component } from "react";
import './MainContent.css';

class MainContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="contenthero">

                <p className="content-text">Questa è la mia Hero</p>
                <span>bla bla bla</span>
                <img src="..\assets\trunks.jpg" alt="" />

            </div>
        )
    }
}

export default MainContent;