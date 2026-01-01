import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BotsPage from './pages/BotsPage';
import ClickSpark from './components/ClickSpark';
import './App.css';

function App() {
  return (
    <Router>
      <ClickSpark
        sparkColor="#A855F7"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bots" element={<BotsPage />} />
          </Routes>
        </div>
      </ClickSpark>
    </Router>
  );
}

export default App;
