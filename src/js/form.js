import React from 'react'

//输入框
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input type="text" value={this.props.myDataProp} onChange={
//                     this.props.updateStateProp}/>
//                     <h4>{this.props.myDataProp}</h4>
//                 }
//             </div>
//         )
//     }
// }

// class HelloMessage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'Hello world'};
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//     render() {
//         var value = this.state.value;
//         return (
//             <div>
//                 <Content myDataProp = {value} updateStateProp = {this.handleChange}/>
//             </div>
//         )
//     }
// }


//下拉菜单
// class Selection extends React.Component {
//     render() {
//         return (
//             <form onSubmit={this.props.handleSubmit}>
//                 <label>
//                     选择您最喜欢的网站
//                     <select value={this.props.value} onChange={this.props.handleChange}>
//                         <option value="gg">Goole</option>
//                         <option value="rn">axihe</option>
//                         <option value="tb">Taobao</option>
//                         <option value="fb">Facebook</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }

// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//     handleSubmit(event) {
//         alert('Your favorite flavor is:' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <Selection value={this.state.value} handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}/>
//         )
//     }
// }

//多个Input元素
class Inputs extends React.Component {
    render() {
        return (
            <form>
                <label>
                    是否离开：
                    <input  name="isGoing" type="checkbox" 
                    checked={this.props.checked} onChange={this.props.onChange} />
                </label>
                <br />
                <label>
                    访客数：
                    <input name="numberOfGuests" type="number"
                    value={this.props.value} onChange={this.props.onChange} />
                </label>
            </form>
        );
    }
}
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <Inputs checked={this.state.isGoing} onChange={this.handleInputChange}
            value={this.state.numberOfGuests}/>
        )
    }
}
export default Reservation