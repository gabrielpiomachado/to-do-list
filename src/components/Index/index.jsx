import { useState, useEffect } from 'react';
import Form from '../Form';
import Tasks from '../Tasks';
import './index.css';

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

      <Form handleSubmit={handleSubmit} handleChange={handleChange} newTask={newTask} />

      <Tasks handleEdit={handleEdit} handleDelete={handleDelete} tasks={tasks} />
    </div>
  );
}
