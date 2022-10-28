import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = () => {
    let [todo, setTodo] = useState([]);
    useEffect( () =>{
        // API Calling

        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then((res)=>{
            setTodo(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const DeleteEvent =(id)=>{
        let DeleteId = "Delete ID is "+id;
        alert(DeleteId);
        // API Call Delete
    }
    const EditEvent =(id)=>{
        let EditId = "Edit ID is "+id;
        alert(EditId);
        // API Call Delete
    }
    const DetailsEvent =(id)=>{
        let DetailsId = "Details ID is "+id;
        alert(DetailsId);
        // API Call Delete
    }

    const myList = todo.map((list, i)=>{
       return(
        <tr className=''>
            <td>{list['userId']}</td>
            <td>{list['id']}</td>
            <td>{list['title']}</td>
            <td><button onClick={DeleteEvent.bind(this,list['id'])} className='btn btn-primary'>Edit</button></td>
            <td><button onClick={EditEvent.bind(this,list['id'])} className='btn btn-danger'>Delete</button></td>
            <td><button onClick={DetailsEvent.bind(this,list['id'])} className='btn btn-success'>Details</button></td>
        </tr>
       )
    })
    return (
        
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                        {myList}
                </tbody>
            </table>
        </div>
    );
};

export default Footer;