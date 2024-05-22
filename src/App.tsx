import Home from './components/Home';
import './app.css';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
