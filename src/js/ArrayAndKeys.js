import React from 'react'
import '../scss/App.scss'

// function ListItems(props) {
//     return <li>{props.value}</li>
// }
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <ListItems key={number.toString()} value={number}/>
//     );
//     return (         
//         <ul className="Array">{listItems}</ul>
//     )
// }

function Blog(props) {
    const sidebar =(
        <ul>
            {props.posts.map((post) =>
                <li key={post.id} className="Array">
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id:1,title: "Hello World",content: "Welcome to learning React!"},
    {id:2,title: "Installation",content: "You can install React from npm."}
];

function NumberList() {
    return (
        <Blog posts={posts}/>
    )
}

export default NumberList;