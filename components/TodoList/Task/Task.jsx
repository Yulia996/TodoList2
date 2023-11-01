import './style.css'
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask } from '../../../store/todoSlice';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Task({name, id, status}) {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteTask({id}))
  }

  const handleClickDone = () => {
    dispatch(doneTask({id}))
  }
  
  return (
    <li className={`todo ${status ? 'done' : ''}`}>
      <Link to={`description/${id}`}>{name}</Link>
      <button onClick={handleClickDone}>сделано</button>
      <button onClick={handleClickDelete}>удалить</button>
    </li>
  )
}  

export default Task;

Task.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired
}