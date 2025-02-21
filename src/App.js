import './App.css';
import CardKhomych from './components/CardKhomych';
import CardLevchenko from './components/CardLevchenko';
import CardShrol from './components/CardShrol';

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
        <CardKhomych/>
      </main>
    </div>
  );
}

export default App;
