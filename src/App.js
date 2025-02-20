import './App.css';
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
        <CardShrol></CardShrol>
      
      </main>
    </div>
  );
}

export default App;
