import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditTask = ({show, toggle, obj, updateTask}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'taskName') {
            setTaskName(value)
        } else {
            setTaskDesc(value)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let tempObj = {}
        tempObj['name'] = taskName
        tempObj['desc'] = taskDesc
        updateTask(tempObj)
    }

    useEffect(() => {
        setTaskName(obj.name)
        setTaskDesc(obj.desc)
    }, [])
    return (
        <div>
            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменения</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                value={taskName}
                                onChange={handleChange}
                                name='taskName'
                                placeholder='Заголовок'
                                type="text"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                value={taskDesc}
                                onChange={handleChange}
                                name='tasDesc'
                                placeholder='Пример текста'
                                as="textarea"
                                rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={handleUpdate}>
                        Изменить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditTask;
