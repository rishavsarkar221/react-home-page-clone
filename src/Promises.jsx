import React from 'react';

function Promises(props) {
    return(
        <div className="promises">
            <h1 className="promisesHeading">{props.heading}</h1>
            <h3 className="promisesContent">{props.content}</h3>
        </div>
    );
}

export default Promises;