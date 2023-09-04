import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Button} from "react-bootstrap";

function App() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        // console.log(value);
    }

    const addTodo = text => {
        const newTodos = [...todos, text]
        setTodos(newTodos)
        console.log(newTodos);
    }
    return (
        <div className="App">
            <Container>
                <h1 className="mt-4">Todo リスト</h1>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Form.Control type="text" value={value}
                        onChange={e => setValue(e.target.value)}/>
                        <Button type="submit" className="btn btn-primary">追加</Button>
                    </InputGroup>
                </Form>
            </Container>
        </div>
    );
}

export default App;
