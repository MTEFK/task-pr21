import './App.css';
import CardLevchenko from './components/CardLevchenko';
import CardShrol from './components/CardShrol';
import CardSloboda from './components/CardSloboda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='block1'>        <a className='App-link' href='http://college.mlyniv.rv.ua/'>
          МТЕФК
        </a>
        </div>
        <div className='block2'>
          <span>ГРУПА К41 </span>
        </div>
      </header>
      <main>
        <h2>Слобода Денис</h2>
        
        <CardShrol/>
        <CardLevchenko/>
        <CardSloboda/>
      
      </main>
    </div>
  );
}

export default App;
