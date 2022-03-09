import React from 'react';
import './Item.css'
import {useRef} from "react";

function Item(props) {
    const type = props.type
    const placeHoler= props.placeholder
    const className = props.className
    const value = props.value
    const handleChangeUserName = (e) => {
        console.log(e)
    }

    return (
        <React.Fragment>
            <input type={type}
                   className={className}
                   onClick={()=> console.log(props)}
                   placeholder={placeHoler}
                   src={"/login"}
                   value={value}
            />
        </React.Fragment>
    );
}

export default Item;