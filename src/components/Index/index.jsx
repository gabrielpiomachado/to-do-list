import { useState, useEffect } from 'react';
import './index.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Index() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = newTask.trim();

    if (!trimmedTask) return;

    if (editIndex === -1) {
      setTasks([...tasks, trimmedTask]);
    } else {
      setTasks(tasks.map((task, i) => (i === editIndex ? trimmedTask : task)));
      setEditIndex(-1);
    }

    setNewTask('');
  };

  const handleEdit = (e, index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDelete = (e, index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <span>
              <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
              <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
