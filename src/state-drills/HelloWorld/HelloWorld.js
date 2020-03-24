import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: "world"
        }
    }
    handleWorldClick = () => {
        console.log('World clicked!')
        this.setState({
            who: 'world!'
        })
    }
    handleFriendClick = () => {
        console.log('Friend clicked!')
        this.setState({
            who: 'friend!'
        })
    }
    handleReactClick = () => {
        console.log('React clicked!')
        this.setState({
            who: 'react!'
        })
    }
    render() {
        return (
            <div>
                <p>
                    Hello, {this.state.who}
                </p>
                <button onClick={this.handleWorldClick}>World</button>
                <button onClick={this.handleFriendClick}>Friend</button>
                <button onClick={this.handleReactClick}>React</button>
            </div>
        )
    }    
}

export default HelloWorld