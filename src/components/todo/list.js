import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {SettingsContext} from '../../contexts/settings';

const TodoList = (props) => {

  const list = props.list || [];

  function SettingsFromHook() {
    const context = useContext(SettingsContext);
  
    return(
      <>
        <h2>Static Context: {context.completed}</h2>
      </>
    )
  }

  return (
    <ul>
      { list.map(item => (
        <li
          className={`completed-${item.completed.toString()}`}
          key={item.id}
          onChange={SettingsFromHook} 
        >
          <span onClick={() => props.handleCompleted(item.id)} >
            {item.title}
          </span>
          <Link to={`/todo/${item.id}`}>
              Details
          </Link>
          <button onClick={() => props.handleDelete(item.id)}>
              Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
