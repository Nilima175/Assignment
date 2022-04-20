function TaskForm(props){
    const { onCreateBtnClick } = props;

    const handleTaskCreate = () => {
        let taskname = " ";

        onCreateBtnClick(taskname);
    }
    return(
        <div className="form-group">
            <input type="text" />
            <button onClick={handleTaskCreate}>Create Task</button>
        </div>
    )
}
export default TaskForm;