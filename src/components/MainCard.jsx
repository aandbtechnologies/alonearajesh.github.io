import React from 'react';

export class MainCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card card-main">
                <div class="avatar">
                    <img className="img" src="https://avatars0.githubusercontent.com/u/30589898?s=120&v=4"></img>
                </div>
                <div className='card-body'>
                    <div className='card-title'></div>
                </div>
            </div>)
    }
}