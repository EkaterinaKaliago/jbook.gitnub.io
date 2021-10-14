import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import CodeSell from './components/code-selll';

const App = () => {
  return (
    <div>
      <CodeSell />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));