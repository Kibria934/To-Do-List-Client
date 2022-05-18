import React from 'react';
import { useQuery } from 'react-query';

const ToDoList = () => {
const{data:ToDo,isLoading,error,refetch}= useQuery('repoData', () =>
fetch('http://localhost:5000/allToDo').then(res =>
  res.json()
)
)
if(isLoading){
    return <p>Loading...</p>
}
   
    return (
        <div>
            <h4>My data i :{ToDo.length}</h4>
        </div>
    );
};

export default ToDoList;