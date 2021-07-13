import React, {useState} from 'react'


export const AddTodo = ({addTodo}) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit=(e)=>{

        e.preventDefault();
        if(!title || !desc)
        {
            alert("title or description cannot be blank");
        }
        else
        {
        addTodo(title,desc);
       setTitle("");
       setDesc("");
    }


    }
    return (
        <div  className="container">
            <h3>Add a Todo</h3>

        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" sName="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter your title"/>
            </div>


            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <div>
                <input type="type" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter Todo Description"/>
            </div>
            </div>

            <div className="col-auto">
                <button type="submit" className="btn btn-sm btn-success mb-3">Add Todo</button>
            </div>
        </form>

        </div>
            )
}
