
export default function TaskRow({ task, index, onToggle, onEdit, onDelete }) {
  const isCompleted = task.status === 'Completed';

  return (
    <tr>
      <td className={isCompleted ? 'strike' : ""}>
        {task.title}
      
        <input
          id={index}
          type='checkbox'
          checked={isCompleted}                
          onChange={() => onToggle(index)}      
        />
    
      </td>

      <td>{task.status}</td>

      <td>
        <div className='action-buttons'>
        <button className='edit-button' onClick={() => onEdit(task, index)}>
          Edit
        </button>
        <button className='delete-button' onClick={() => onDelete(index)}>
          Delete
        </button>
        </div>
      </td>
    </tr>
  );
}
