import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleExpand = () => setIsExpanded(!isExpanded);
  const handleEdit = () => setEditMode(!editMode);
  const handleSave = () => {
    onUpdate(task.id, { ...task, title: newTitle, description: newDescription, updated_at: new Date().toISOString() });
    setEditMode(false);
  };
  

  return (
    <div className="task-item">
      <div className="task-header" onClick={handleExpand}>
        <h3>{task.title}</h3>
        <div>
          <button onClick={() => onUpdate(task.id, { ...task, completed: !task.completed })}>
            {task.completed ? 'Undo' : 'Done'}
          </button>
          <button onClick={handleEdit}>{editMode ? 'Cancel' : 'Edit'}</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      </div>
      {isExpanded && (
        <div className="task-details">
          {editMode ? (
            <div>
              <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
              <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <>
              <p>{task.description}</p>
              <p>Last updated: {new Date(task.updated_at).toLocaleString()}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
