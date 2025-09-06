import '../style.css';
import UseLocalStorage from "./useLocalStorage";
export default function Search({ tasks, onSearch }) {
  const [selectedStatus, setSelectedStatus] = UseLocalStorage('selectedStatus', 'All');
  const [title, setTitle] = UseLocalStorage('searchTitle', '');

   function handleSearch() {
    if (title.trim() === '') {
      onSearch(tasks);
      return;
    }
    const result = tasks.filter(t =>
      t.title?.toLowerCase().includes(title.toLowerCase())
    );
    onSearch(result);
  }
  function handleStatusChange(e) {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    if (newStatus === 'All') {
      onSearch(tasks);
    } else {
      const result = tasks.filter(t => t.status === newStatus);
      onSearch(result);
    }
  }


  return (
    <div>
      <h1>Search && Filter</h1>
      <h3>Filter by Status</h3>
      <div className='status-buttons'>
      <button value={'All'} onClick={handleStatusChange}>All</button>
      <button value={'Completed'} onClick={handleStatusChange}>Completed</button>
      <button value={'Pending'} onClick={handleStatusChange}>Pending</button>
    </div>
    <h3>Search by Title</h3>
      <input
      type='text'
        placeholder='Search Tasks...'
        value={title}
        onChange={e => setTitle(e.target.value)}
         onKeyDown={e => {
      if (e.key === 'Enter') handleSearch();
    }}
      />
      <button className='add-button' onClick={handleSearch}>Search</button>
    </div>
  );
}