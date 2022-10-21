import React, {useState} from 'react';
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import EditTask from "./EditTask";

const Card = ({obj, index, deleteTask, updateListArray}) => {
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]


    const [show, setShow] = useState(false);

    const toggle = () => setShow(!show);

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div className='card-wrapper mx-3'>
            <div className='card-top' style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className='card-holder px-2 py-2'>
                <span className='card-header' style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{obj.name}</span>
                <p className="mt-3">{obj.desc}</p>
                <div className='card-buttons'>
                    <button className='border-0'>
                        <AiOutlineEdit className='mx-2'
                                       style={{'width': '25px', 'height': '25px', "color" : colors[index%5].primaryColor}}
                                       onClick={()=> setShow(true)}/>
                    </button>
                    <button className='border-0' onClick={handleDelete}>
                        <AiOutlineDelete style={{'width': '25px', 'height': '25px', "color" : colors[index%5].primaryColor}}/>
                    </button>
                </div>
            </div>
            <EditTask show={show} toggle={toggle} updateTask={updateTask} obj={obj}/>
        </div>
    );
};

export default Card;
