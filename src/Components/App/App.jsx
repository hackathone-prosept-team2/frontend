import Register from '../Register/Register.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import { useChangeTitle } from 'Hooks';

function App() {
  // TODO: Временно
  useChangeTitle('Точка входа')
  
  return (
    <div className="app">
      <Main/>

      <Footer/>
    </div>
  )
}

export default App;
