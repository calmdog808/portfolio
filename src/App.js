import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import {Typography} from "@mui/material";



function App() {
  return (
    <main>
      <About />
      <Projects />
      <Typography variant="body1" align="center" sx={{ my: 2 }}>made with ❤️‍🔥</Typography>

      {/* <p style={text-align:center">🥐
      </p> */}
 
    </main>
  );
}

export default App;
