import React, { useState, useEffect } from 'react';
// function Tick() {

//     const [time, setTime] = useState(new Date().toLocaleTimeString())  
//     useEffect(() => {
//       setInterval(() => setTime(new Date().toLocaleTimeString()) ,1000);
//     }, [])
//     const element = (
//         <div>
//           <h1>Hello,world!</h1>
//           <h2>现在是{time}.</h2>
//         </div>
//     )
//     return element;
//   }
//   export default Tick


//封装了展示部分的代码
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello,World!</h1>
//       <h2>现在是：{props.date}</h2>
//     </div>
//   );
// }


//ES6类的实现方法
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>现在是{this.props.date}</h2>
      </div>
    );
  }
}

function Tick() {
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {setTime(new Date().toLocaleTimeString())},1000)
  },[])
  return (
    <div>
      <Clock date={time}/>
    </div>
  )
}
export default Tick