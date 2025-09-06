
import React from "react";
import '../style.css'
import TaskRow from "./TaskRow";
import TableHeader from "./TablelHeader";

export default function TaskTable({ tasks = [], onEdit, onDelete, onToggle}) {

    if(tasks.length === 0) {
        return <p>No tasks available. Please add a task.</p>;
    }
  return (
    <table className='task-table'>
      <thead className="table-header">
        <TableHeader/>
      </thead>
 <tbody>
       {
          tasks.map((task, index) => (
            <TaskRow
              key={task.id ?? index}
              task={task}
              index={index}
              onToggle={onToggle}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )
        )}
      </tbody>
    </table>
  )
}
