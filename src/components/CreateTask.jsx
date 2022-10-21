import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateTask = ({show, toggle, handleSubmit}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'taskName') {
            setTaskName(value)
        } else {
            setTaskDesc(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let obj = {
            'name': taskName,
            'desc': taskDesc
        }
        handleSubmit(obj)
    }
    return (
        <div>
            <Modal show={show} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание</Modal.Title>
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
                    <Button variant="success" onClick={handleSave}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateTask;
