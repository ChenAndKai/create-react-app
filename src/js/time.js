import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    render() {
        return(
            <div>
                <h1>你好</h1>
                <h2>现在的时间是:{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
    componentDidMount(){
        this.timeId = setInterval(() => {
            this.tick()
        }, 1000);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }
}

export default Clock;