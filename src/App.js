import logo from './logo.svg';
import './App.css';
import Person from './Person';

function App() {
  const firstText = "kk klkk iewio j iiowe";
  const secondtText = "maha maha iewio j iiowe";
  return (
    <div className="App">
      <Person name="Hadeel" age="22" email="hadeel@gmail.com" text={firstText}/>
      <Person name="Maha" age="48" email="maha@gmail.com" text={secondtText}>
        <h1>Welcom</h1>
        <h1>sdfjk</h1>
      </Person>
      <Person name="Marwa" age="23" email="marwa@gmail.com">
        <p style={{backgroundColor:"purple"}}>Hello</p>
      </Person>
    </div>
  );
}

export default App;
