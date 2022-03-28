import { motion } from "framer-motion";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <motion.a
          whileHover={{
            scale: 1.2,
            // transition: { duration: 1 },
          }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </motion.a>
      </header>
    </div>
  );
}

export default App;
