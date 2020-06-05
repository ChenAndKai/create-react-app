import React from 'react'
class MyComponent extends React.Component{
    handleClick() {
        //使用原生的DOM API获取焦点
        this.refs.myInput.focus();
    }
    render() {
        //当组件插入到DOM后，ref属性添加一个组件的引用于到this.refs
        return (
            <div>
                <input type="text" ref="myInput" />
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}
export default MyComponent