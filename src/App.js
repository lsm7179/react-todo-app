import React, {useState} from "react";
import './App.css';
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        //페이지 리로드 되는것을 막아준다.
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false,
        };

        setTodoData(prev =>
            [...prev, newTodo]);
        setValue("");
    }

    return (<div className="container">
        <div className="todoBlock">
            <div className="title">
                <h1 className="text-3xl font-bold underline">할일 목록</h1>
            </div>
            <List todoData={todoData} setTodoData={setTodoData}/>
            <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
        </div>
    </div>);


}