import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectCaseStudy } from './pages/ProjectCaseStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;

