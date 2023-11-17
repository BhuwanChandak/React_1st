import './App.css';
import {Footer} from "./Components/Header";
import Head from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <Head name="Ethnus"/>
      <Nav age="10"/>
      <Nav age="40"/>
      <Footer brand="Facebook" />
    </div>
  );
}

export default App;
