import { useState } from 'react';
import './index.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Index() {
  const [newTask, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = newTask.trim();

    if (!trimmedTask) return;

    setTasks([...tasks, trimmedTask]);
    setTask('');
  };

  return (
    <div className="index">
      <h1>To-do List</h1>

      <form onSubmit={handleSubmit} action="#" className="form">
        <input onChange={handleChange} type="text" value={newTask} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>

      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task}>
            {task}
            <span>
              <FaEdit onClick={handleEdit} className="edit" />
              <FaWindowClose onClick={handleDelete} className="delete" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
