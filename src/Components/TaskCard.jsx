import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <div className=" p-4 text-teal-900  rounded-lg shadow-lg p-8   rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-blue-100 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]  mb-4">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className=" mt-2 mb-4 line-clamp-3">{task.description}</p>
      <span
        className={`mt-2 inline-block px-3 py-1 rounded-full text-sm ${
          task.status === 'Done'
            ? 'bg-green-500'
            : task.status === 'In Progress'
            ? 'bg-yellow-500'
            : 'bg-blue-500'
        } `}
      >
        {task.status}
      </span>
      <p className="mt-2  text-sm">
        Created on: {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-red-500  rounded-lg hover:bg-red-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-2 py-2 bg-red-500  rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
       
      </div>
      
    </div>
  );
};

export default TaskCard;
