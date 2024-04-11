import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { List, ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';
import { useState } from 'react';
import { Input, InputGroup, Button, Label } from 'reactstrap';


const Todo = () => {
    const [arrayData, setArrayData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {

        if (inputValue.trim() !== '') {
            alert('New task added');
            setArrayData(prevArrayData => [...prevArrayData, { text: inputValue, completed: false }]);

        }
        setInputValue('');
    }

    const handleToggle = (index) => {
        setArrayData(prevArrayData => {
            const updatedArrayData = prevArrayData.map((item, i) => {
                if (i === index) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
            return updatedArrayData;
        });
    };

    const handleDelete = (index) => {
        setArrayData(prevArrayData => prevArrayData.filter((_, i) => i !== index));
    };

    return (
        <>
            <InputGroup size="md">
                <Button color='success' onClick={handleSearch}>
                    ADD T0D0
                </Button>
                <Input type='text' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            </InputGroup>

            <ListGroup>
                {arrayData.map((item, index) => (
                    <ListGroupItem key={index} className={item.completed ? 'completed' : ''}>
                        <input type='checkbox'
                            checked={item.completed}
                            onChange={() => { handleToggle(index) }} 
                            id='checkbox'
                            />
                            <span style={{ textDecoration: item.completed? "line-through" : ''}}>
                                 {item.text}
                            </span>      
                        <Button color="danger" size="sm" onClick={() => handleDelete(index)}>
                            Delete
                        </Button>
                    </ListGroupItem>
                ))}
            </ListGroup>

        </>

    )
}

export default Todo;