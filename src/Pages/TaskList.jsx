import React, { useState } from 'react';
import TaskCard from '../Components/TaskCard';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (new Date(a[sortBy]) > new Date(b[sortBy]) ? -1 : 1));

  const todoTasks = filteredTasks.filter((task) => task.status === 'Todo');
  const inProgressTasks = filteredTasks.filter((task) => task.status === 'In Progress');
  const doneTasks = filteredTasks.filter((task) => task.status === 'Done');

  return (
    <div className="min-h-screen  text-teal-900   dark: flex flex-col p-2 overflow-x-hidden ">
      <div className="w-full max-w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]   p-8 rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">Task List</h2>
        <div className="flex flex-col   md:flex-row justify-between mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={handleSearch}
            className="w-full md:w-1/2  shadow-md text-black dark: px-4 py-2 mb-4 md:mb-0 border rounded-lg"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full shadow-md md:w-1/4  text-black dark: px-4 py-2 border rounded-lg"
          >
            <option value="createdAt">Sort by Date</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Todo</h3>
            {todoTasks.map((task) => (
              <TaskCard
                key={task.title}
                task={task}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">In Progress</h3>
            {inProgressTasks.map((task) => (
              <TaskCard
                key={task.title}
                task={task}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Done</h3>
            {doneTasks.map((task) => (
              <TaskCard
                key={task.title}
                task={task}
                onEdit={onEditTask}
                onDelete={onDeleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
