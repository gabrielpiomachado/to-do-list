import { useState } from 'react';
import './index.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Index() {
  const [newTask, setTask] = useState('');
  const [tasks, setTasks] = useState(['Fazer café', 'Beber agua', 'Estudar']);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="index">
      <h1>To-do List</h1>

      <form action="#" className="form">
        <input onChange={handleChange} type="text" value={newTask} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>

      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task}>
            {task}
            <div>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
