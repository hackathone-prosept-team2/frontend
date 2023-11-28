import Register from '../Register/Register.jsx';
import { useChangeTitle } from 'Hooks';

function App() {
  // TODO: Временно
  useChangeTitle('Точка входа')
  
  return (
    <div className="app">
      <Register/>
    </div>
  )
}

export default App;
