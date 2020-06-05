import React from 'react';

//e.preventDefault阻止链接默认打开一个新页面
function handleClick(e){
    e.preventDefault();
    //console.log('链接被点击');
}
class test extends React.Component{
    render(){
        return (
            <a href="http://www.baidu.com" onClick={handleClick}>
                点我
            </a>
        )
    }
}

export default test