import React from "react";
import Article from "./Article";


class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const authorName = 'DaisukeSasaki'
        return (
            <>
                <Article title={"How to use React"} order={1}/>
                <Article title={"How to use JSX"} order={2}/>
                <Article title={"Let's build on environment"} order={3}/>
            </>
        )
    }
}

export default Blog