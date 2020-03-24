import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            result: 'spinning the chamber and pulling the trigger!...',
            chamber: null,
            spinningTheChamber: false,
            bulletInChamber: 8
        }
    }
    spinning = () => {
        console.log('chamber is spinning')
        this.setState({
            chamber: this.randomNumber,
            spinningTheChamber: false
        })
    }
    randomNumber = () => {
        Math.ceil(Math.random() * 8)
    }
    handleRouletteGun = () => {
        console.log('trigger was pulled!')
        this.setState = {
            spinningTheChamber: true,
        }
        this.timeout = setTimeout(() => {
            this.spinning
        }, 2000)
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.result}
                </p>
                <button onClick={this.handleRouletteGun}>Pull the trigger!</button>
            </div>
        )
    }    
}

export default RouletteGun