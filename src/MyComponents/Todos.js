import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="my-3">Todos List</h3>
            {/* {props.todos[0]} */}
            {props.todos.length===0? "No todos To display":
            props.todos.map((todo)=>{

                return (
                    <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> {/* we are passing a function on delete to the TodoItem.js so when someonce clicks delete button te onDelete fnction runs and the todo is deleted */}
                </>
                )

            })
            }
        </div>
    )
}
