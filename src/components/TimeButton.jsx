import * as React from 'react';
import { useState } from 'react';
import '../styles/TimeButton.css';


const SizeButton = ({id, arr, label}) => {
    const [selected, setSelected] = useState(false)

    return (
        <button className={selected ? "selected" : "not-selected"} onClick={() => setSelected(!selected)}><span>{label}</span></button>
    )
}

export default SizeButton;