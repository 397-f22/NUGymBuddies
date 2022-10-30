import * as React from 'react';
import { useState } from 'react';

const Dropdown = ({grid}) => {
    const [open,setOpen] = useState(false)
    const openMenu = () =>{
        setOpen(!open)
    }
    return (
        <div className="dropdown" onClick={() => openMenu()}>
        </div>
    )
}
export default Dropdown;