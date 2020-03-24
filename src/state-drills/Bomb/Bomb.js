import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        console.log('hello')
        this.state = {
            count: 0,
            countdown: 'countdown'
        }
    }
    tickTockBoom = () => {
        let currentCount = this.state.count
        this.setState({
            count: currentCount + 1
        })

        if (currentCount < 7) {
            if (currentCount % 2) {
                this.setState({
                    countdown: 'tick'
                })
            } else if (!(currentCount % 2)) {
                this.setState({
                    countdown: 'tock'
                })
            }
        } else {
            this.setState({
                countdown: 'BOOM!!!!'
            })
                clearInterval(this.interval)
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.tickTockBoom()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                <p>
                    {this.state.count}
                </p>
                <p>
                    {this.state.countdown}
                </p>
            </div>
        )
    }
}

export default Bomb