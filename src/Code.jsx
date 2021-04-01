import React from 'react';

function Code(props) {
    return(
        <div className="code">
            <h1 className="codeHeading">{props.codeHeading}</h1>
            <h3 className="codeContent">{props.codeContent}</h3>
            <img className="codeImg" src={props.codeImg} alt="Code Image" />
        </div>
    );
}

export default Code;