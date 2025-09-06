
import './App.css';
import './style.css';
import { useEffect } from 'react';
import TaskTable from './components/TaskTable';
import Search from './components/Search';
import Header from './components/Header'; 
import UseLocalStorage from './components/useLocalStorage';
import Sort from './components/SortByAlphabetically';


function App() {
    const [tasks, setTasks] = UseLocalStorage('tasks', []);


    const [filteredTasks, setFilteredTasks] =UseLocalStorage('filteredTasks', tasks);
     const [newTask, setNewTask] =UseLocalStorage('newTask', { title: '', status: 'Pending' });

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setFilteredTasks(tasks); 
  }, [tasks]);


  const handleEdit = (task, index) => {
    const updatedTitle = prompt('Edit Task Title:', task.title);
    if (updatedTitle && updatedTitle.trim() !== '') {
      setTasks(prev =>
        prev.map((t, i) => (i === index ? { ...t, title: updatedTitle.trim() } : t))
      );
    }
  };

 
  const handleDelete = (index) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    setTasks(prev => prev.filter((_, i) => i !== index));
  };
  function toggleStatus(index) {
  setTasks(prev =>
    prev.map((t, i) =>
      i === index
        ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' }
        : t
    )
  );
}
  function addTask() {
    const title = (newTask.title || '').trim();
    if (!title) return;

    setTasks(prev => [
      ...prev,
      { title, status: newTask.status || 'Pending' },
    ]);

    setNewTask({ title: '', status: 'Pending' });
  }

 return (<>
    <Header />
      <div className='contenair'>
        <div className='taskManager'>
          <div className='tasks'>
            <h1>My Tasks</h1>
            <div>
            <input
              placeholder='Enter a Task...'
              type='text'
              value={newTask.title}
              onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
              onKeyDown={e => {
                if (e.key === 'Enter') addTask();
              }}
            />
            <button className='add-button' onClick={addTask}>Add</button>
            
            </div>
            <TaskTable
              tasks={filteredTasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
              setTasks={setTasks}
              onToggle={toggleStatus}
              onSearch={setFilteredTasks}
            />
          </div>
          <div className='search'>
            <Search
              tasks={tasks}
              onSearch={setFilteredTasks} 
            />
          </div>
          <div className='sort'>
            <Sort
             onSearch={setFilteredTasks} 
            />
          </div>
        </div>
      </div>
</>
  );
}

export default App;
