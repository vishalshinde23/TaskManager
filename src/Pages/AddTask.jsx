import React, { useState, useEffect } from 'react';
import InputField from '../Components/InputField';
import Button from '../Components/Button';

const AddTask = ({ showForm, setShowForm, onAddTask, taskToEdit, onUpdateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Todo');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSaveTask = (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      description,
      status,
      createdAt: taskToEdit ? taskToEdit.createdAt : new Date(), // keep original date if editing
    };

    if (taskToEdit) {
      onUpdateTask(updatedTask);
    } else {
      onAddTask(updatedTask);
    }

    // Clear form fields and hide form
    setTitle('');
    setDescription('');
    setStatus('Todo');
    setShowForm(false);
  };

  return (
    <div className="relative flex flex-col ">
      <div className=" inline-flex items-center justify-center   text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 absolute top-4 left-4 z-10">
        {!showForm && (
          <Button className="text-red-500" onClick={() => setShowForm(true)}>Add Task +</Button>
        )}
      </div>

      {showForm && (
        <div className="fixed text-teal-900  inset-0 flex items-center justify-center z-20">
          <div className="w-full max-w-lg   p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl text-teal-900  font-bold mb-6">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
            <form onSubmit={handleSaveTask}>
              <InputField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <InputField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border rounded-lg"
                >
                  <option value="Todo">Todo</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div className="flex justify-between">
                <Button className="m-2" type="submit">{taskToEdit ? 'Save Changes' : 'Add Task'}</Button>
                <Button onClick={() => setShowForm(false)} color="red">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
