import logo from './logo.svg';
import './App.css';
import BigInversion from './components/BigInversion';

function App() {
  return (
    <div className="App">
      <BigInversion firstName="Jane" lastName="Doe" hairColor="Black" currentAge={45}/>

      <BigInversion firstName="John" lastName="Smith" hairColor="Brown" currentAge={88}/>

      <BigInversion firstName="Millard" lastName="Fillmore" color="Brown"  currentAge={50}/>

      <BigInversion firstName="Maria" lastName="Smith" color="Brown"  currentAge={62}/>

    </div>
  );
}

export default App;
