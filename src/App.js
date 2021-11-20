// import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Form from "./components/forms/BasicForm";
import List from "./components/list";
import { Routes as Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact element={<List />} />
        <Route path="/add-item" element={<Form />} />
      </Switch>
    </div>
  );
}

export default App;
