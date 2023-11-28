import Todos from './TodoList/TodoList';
import { Routes, Route } from 'react-router-dom';
import TodoDetail from './TaskPage/TodoDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Todos/>}/>
      <Route path='description/:taskId' element={<TodoDetail/>}/>
    </Routes>  
  )    
}

export default App;