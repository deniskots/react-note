import React, {useEffect, useState} from 'react';
import logo from '../assets/img/logo.gif'
import Button from 'react-bootstrap/Button';
import CreateTask from "./CreateTask";
import Card from "./Card";

const TodoList = () => {
    const [show, setShow] = useState(false);
    const [taskList, setTaskList] = useState([])

    const toggle = () => setShow(!show);
    const handleShow = () => setShow(true);

    const saveTask = (obj) => {
        let list = taskList
        list.push(obj)
        localStorage.setItem('list', JSON.stringify(list))
        setTaskList(list)
        setShow(false)
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem('list', JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("list", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    useEffect(() => {
        let array = localStorage.getItem('list')
        if (array) {
            let json = JSON.parse(array)
            setTaskList(json)
        }
    }, [])
    return (
        <div className='wrapper'>
            <div className='header text-center'>
                <div>
                    <img width='100' height='100' className='rounded-circle mb-4' src={logo} alt=""/>
                </div>
                <Button variant="success" onClick={handleShow}>Создай меня!</Button>
                <CreateTask show={show} toggle={toggle} handleSubmit={saveTask}/>
            </div>
            <div className='main-container'>
                {taskList.map((i, index) =>
                    <Card obj={i} index={index} deleteTask={deleteTask} updateListArray = {updateListArray}/>)}
            </div>
        </div>

    );
};

export default TodoList;
