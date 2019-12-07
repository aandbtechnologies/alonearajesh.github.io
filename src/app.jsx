import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <nav className="navHeader">
                    <div className="main-nav">
                        <div className="main-nav-logo"><span className="main-nav-img">Rajesh Alonea</span></div>
                    </div>
                </nav>
            </div>
        );
    }
}