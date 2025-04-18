import './App.css';
import Card from './components/Cards/cards';
import Counter from './components/Counter/counter';
import NameForm from './components/NameForm/nameform';
import ToggleButton from './components/ToggleButton/togglebutton';
import CounterEffect from './components/CounterEffect/countereffect';

function App() {
  const items = ['Colombia','Estados unidos','Brasil','Ecuador']

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <Card title={"Cards"} description={"Card description"}/>
        <Card title={"Cards 2"} description={"Card 2 description"}/>
        <ul>
          {
            items.map((item,index ) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
        <Counter/>
        <ToggleButton/>
        <h1>Formulario de nombre</h1>
        <NameForm/>       
        <CounterEffect/>   
      </header>
    </div>
  );
}

export default App;
