import React, {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Button, Table} from "react-bootstrap";

function App() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        // console.log(value);
    }

    const addTodo = text => {
        const newTodos = [...todos, { text, complete: false }]
        setTodos(newTodos)
        setValue("")
        console.log(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].complete = !newTodos[index].complete
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
            <Container>
                <Table>
                    <tbody>
                        {todos && todos.map((todo, index) => (
                            <tr key={index}>
                                <th className="text-left" style={{ textDecoration: todo.complete ? "line-through" : "" }}>{todo.text}</th>
                                <td className="text-end">
                                    <Button
                                        className={todo.complete ? "btn btn-success me-2" : "btn btn-succsess me-2"}
                                        onClick={() => completeTodo(index)}>
                                        {todo.complete ? '完了' : '未完了'}
                                    </Button>
                                    <Button
                                        className="btn btn-danger"
                                        onClick={() => removeTodo(index)}>
                                        削除
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;
