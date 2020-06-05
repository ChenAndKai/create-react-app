
import React from 'react'

//构造函数中bind方法
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};

//         //绑定是必要的，这样"this"才能再回调函数中使用
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
        
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn? "ON" : "OFF"}
//             </button>
//         ) 
//     }
// }


//箭头函数 属性初始化器语法
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};
//     }
//     //箭头函数确保了'this'绑定在了handleClick中
//     handleClick = () => {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         // console.log("this is:",this);
//     }
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 Click me---{this.state.isToggleOn?"ON":"OFF"}
//             </button>
//         );
//     }
// }

//每次渲染的时候都会创建一个不同的回调函数。如果这个回调函数作为一个属性值传入低阶组件，
//这些组件可能会进行额外的重新渲染，有性能问题
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         // console.log("this is:",this);
//     }
//     render() {
//         return (
//             <button onClick={(e) => this.handleClick(e)}>
//                 Click me---{this.state.isToggleOn?"ON":"OFF"}
//             </button>
//         );
//     }
// }


// class Toggle extends React.Component{
//     constructor(){
//         super();
//         this.state = {name: 'Hello World!'};
//     }
//     preventPop(name,e){ //事件对象e要放在最后
//         e.preventDefault();
//         alert(name);

//     }
//     render() {
//         return(
//             <div>
//                 <p>Hello</p>
//                 {/* 通过bind()方法传递参数 */}
//                 <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
//             </div>
//         )
//     }
// }



// class LogoutButton extends React.Component{
//     render() {
//         return (
//             <div>
//                 <button>退出</button>
//             </div>
//         )
//     }
// }
// class LoginButton extends React.Component{
//     render() {
//         return (
//             <div>
//                 <button>登录</button>
//             </div>
//         )
//     }
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn) {
//         return "欢迎回来"
//     } 
//     return "请先登录"
// }
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;

//         let button = null;
//         if(isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//         return (
//             <div>
//                 <Greeting isLoggedIn = {isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }


//&&运算符
// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     您有{unreadMessages.length}条未读信息。
//                 </h2>
//             }
//         </div>
//     );
// }
// const messages = ['React','Re:React','Re:Re:React'];

// class Toggle extends React.Component {
//     render() {
//         return(
//             <Mailbox unreadMessages={messages} />
//         )
//     }
// }

//阻止组件渲染
function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            警告！
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? '隐藏' : '显示'}
                </button>
            </div>
        );
    }
}


export default Page