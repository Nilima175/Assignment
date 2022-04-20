import React from 'react';
import TaskForm from './TaskForm'

class ToDoList extends React.Component{

    handleCreateButton = (taskName) => {
        console.log("create task" , taskName );
    }
    

    render(){
        return(
            <TaskForm onCreateBtnClick = {this.handleCreateButton} />
        )
    }
}
export default ToDoList;