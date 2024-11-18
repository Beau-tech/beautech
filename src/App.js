import styled from 'styled-components';
import Navbar from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';

const GlobalStyle = styled.body`
    background: #121212;
    margin: 0px;
    padding: 0px;
    color: beige;
    height: 100vh;
    overflow-y: auto;
`;

function App() {
  return (
    <Router>
      <GlobalStyle>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </GlobalStyle>
    </Router>
  );
}

export default App;

