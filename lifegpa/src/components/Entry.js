import React from "react";

const Entry = props => {
    return (
        <p>
            Item: {props.todo.item}
        </p>
    );
};

export default Entry;