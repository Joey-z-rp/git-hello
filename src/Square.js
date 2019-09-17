import React from 'react';

function Square(props) {
    const clickHandler = () => {
        alert('click');
    };

    return (
        <button className="square" onClick={clickHandler}>
            {props.value}
        </button>
    );
}

export default Square;
