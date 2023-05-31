import { useEffect, useState } from 'react';
import './todolist.css';

const pagination = {
    limit: 5,
    skip: 0,
    total: null
};
let api = 'https://dummyjson.com/todos';

export function ToDOLIst() {

    let [todos, setTodos] = useState([]);
useEffect(()=>{
    loadToDoList();
},[]); 

    const loadToDoList = () => {
        const url = `${api}?limit=${pagination.limit}&skip=${pagination.skip}`
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.todos);
            setTodos([...todos, ...data.todos]);
        });
        pagination.skip += pagination.limit;
    }
    return (
        < >
            <h2>To Do List:</h2>
            <table class="todolist">
                <tr>
                    <th>Number</th>
                    <th>Case description</th>
                    <th>Complited</th>
                </tr>
                {todos.map(t =>
                    <tr>
                        <td>{t.id}</td>
                        <td class="descrition">{t.todo}</td>
                        <td> {t.copleted ? "YES" : "NO"}</td>
                    </tr>
                )}

            </table>
            <button onClick={loadToDoList} >Load todolist</button>
        </>
    )
};