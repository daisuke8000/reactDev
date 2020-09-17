import React from "react";

const Article = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Order by {props.order}</p>
        </div>
    )
};

export default Article