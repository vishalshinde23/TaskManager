import React, { useState } from 'react';
import AddTask from './Pages/AddTask';
import TaskList from './Pages/TaskList';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import {toast} from 'react-hot-toast'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    toast.success('Task Added SuccessFully')
  };

  const handleEditTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.title === updatedTask.title ? updatedTask : task
      )
    );
    toast.success('Task Edited SuccessFully')
    setTaskToEdit(null)
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.title !== taskToDelete.title)
    );
    toast.success('Task Deleted SuccessFully')
  };

  const openEditForm = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  return (
    <div className="h-auto w-screen flex flex-col bg-gray-200 text-teal-900 ">
      <div>
        <Navbar/>
      </div>

      <AddTask
        onAddTask={handleAddTask}
        showForm={showForm}
        setShowForm={setShowForm}
        taskToEdit={taskToEdit}
        onUpdateTask={handleEditTask}
      />
      <div className={`flex-grow ${showForm ? 'blur-md' : ''} transition-all duration-300 w-full  max-w-6xl mx-auto mt-16`}>
        <TaskList
          tasks={tasks}
          onEditTask={openEditForm}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default App;
