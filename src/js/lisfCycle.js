import React from 'react'

// class Hello extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {opacity: 1.0};
//     }
//     componentDidMount() {
//         this.timer = setInterval(function () {
//             var opacity = this.state.opacity;
//             opacity -= .05;
//             if(opacity < 0.1) {
//                 opacity = 1.0;
//             }
//             this.setState({
//                 opacity: opacity
//             });
//         }.bind(this),100);
//     }
//     render() {
//         return (
//             <div style={{opacity: this.state.opacity}}>
//                 Hello {this.props.name}
//             </div>
//         )
//     }
// }

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
        this.count =0;
    }
    setNewNumber() {
        // setInterval(() => {           
        //     this.setState({data: this.state.data + 1})
        // }, 2000);
        this.setState({data: this.state.data + 1})
        // this.count++;
        // console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log(`newProps:${newProps.myNumber}`)
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.myNumber===this.props.myNumber);
       return nextProps.myNumber !== this.props.myNumber;
    }
    componentWillUpdate(nextProps,nextState) {
        console.log(`nextProps:${nextProps.myNumber}`)
        console.log(`nextState:${nextState}`)
        console.log('Component WILL UPDATE!')
    }
    componentDidUpdate(prevProps,prevState) {
        console.log(`prevProps:${prevProps.myNumber}`)
        console.log(`prevState:${prevState}`)
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
export default Button