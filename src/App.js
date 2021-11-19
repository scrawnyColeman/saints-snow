import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <PageLayout />
      </div>
    </Router>
  );
}

export default App;
