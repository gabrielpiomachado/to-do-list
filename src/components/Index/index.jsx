import { useState } from 'react';
import './index.css';

export default function Index() {
  const [newTask, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="index">
      <h1>To-do List</h1>
      <h2>{newTask}</h2>

      <form action="#">
        <input onChange={handleChange} type="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
