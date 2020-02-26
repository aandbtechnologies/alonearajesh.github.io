import React from 'react';
import { MainCard } from '../components/mainCard';
import { Header } from '../components/Header';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container homeMain">
                    <MainCard />
                </div>
            </div>
        )
    }
}