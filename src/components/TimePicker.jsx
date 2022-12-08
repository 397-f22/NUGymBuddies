import * as React from 'react';
import TimeButton from'./TimeButton';
import { useState } from 'react';
import '../styles/TimePicker.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const days = {
    Sunday: [0]*24,
    Monday: [0]*24,
    Tuesday: [0]*24,
    Wednesday: [0]*24,
    Thursday: [0]*24,
    Friday: [0]*24,
    Saturday: [0]*24,
}
//test
const TimePicker = ({setTime}) => {
    const [value, setValue] = useState([]);
    const [open,setOpen] = useState(false)
    const toggleTime = (id) =>{
        const newSelectArray = [...value];
        //console.log('state:',newSelectArray)
        const index = newSelectArray.indexOf(id);
        if (index === -1) {
            newSelectArray.push(id);
        } else {
            newSelectArray.splice(index, 1);
        }
        //console.log('new', selectArray);
        //console.log('state2',newSelectArray);
        setValue(newSelectArray)
        setTime(newSelectArray);
        
    }
    const openMenu = () =>{
        setOpen(!open)
    }
    return (
        <div className="dropdown">
            <div className="dropdownBlock">
                <button className = {open ? "openButton-open" : "openButton-close"} onClick={() => openMenu()} data-testid="time picker">
                    <span>Select Time</span> <i className="bi bi-caret-down-fill caret"></i></button>
                <div className={open ? "time-grid" : "time-grid-close"} >
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("6")}><TimeButton id= "6" label="6:00 am"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("8")}><TimeButton id= "8" label="8:00 am"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("7")}><TimeButton id= "7" label="7:00 am"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("9")}><TimeButton role="9AM" id= "9" label="9:00 am"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("10")}><TimeButton id= "10" label="10:00 am"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("11")}><TimeButton id= "11" label="11:00 am"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("12")}><TimeButton id= "12" label="12:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("13")}><TimeButton id= "13" label="1:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("14")}><TimeButton id= "14" label="2:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("15")}><TimeButton id= "15" label="3:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("16")}><TimeButton id= "16" label="4:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("17")}><TimeButton id= "17" label="5:00 pm"/></div>
                    <div className="marginAuto"data-testid="time slot"  onClick={() => toggleTime("18")}><TimeButton id= "18" label="6:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("19")}><TimeButton id= "19" label="7:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("20")}><TimeButton id= "20" label="8:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("21")}><TimeButton id= "21" label="9:00 pm"/></div>
                    <div className="marginAuto" data-testid="time slot" onClick={() => toggleTime("22")}><TimeButton id= "22" label="10:00 pm"/></div>
                </div>
            </div>
        </div>
    )
}
export default TimePicker;

