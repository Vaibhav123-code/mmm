import React, { useEffect, useState } from 'react';
import './Note.css'
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';

const Note = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const [color, setColor] = useState(todo.color);

  const handleEdit = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '10px', borderRadius: '5px', position: 'relative' }}>
      {isEditing ? (
        <div className='edit-input'>
          <input
            className='input'
            type="text"
            value={editedTodo.title}
            placeholder='edit title'
            onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
          />
          <textarea
            className='input'
            value={editedTodo.content}
            placeholder='edit content'
            onChange={(e) => setEditedTodo({ ...editedTodo, content: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div className='todo'>
          <div>
          <h3>{editedTodo.title}</h3>
          <p>{editedTodo.content}</p>
          </div>
          <div className='btns'>
          <button onClick={() => setIsEditing(true)} className='special'><ModeEditOutlineRoundedIcon className='icons'/></button>
          <button onClick={onDelete} className='icons special'>  <DeleteForeverRoundedIcon className='icons'/></button>
          <div className='color-picker'>
            <label>
            <ColorLensRoundedIcon style={{ backgroundColor: {color}}} className='icons' />
              <input type='color' onChange={(e) => setColor(e.target.value)} style={{ display: 'none' }} />
            </label>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
