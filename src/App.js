import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Login} from './components/Login'
import {Footer} from './components/Footer'
import {TodoList} from './components/TodoList'


function App() {
  return (
    
    <div className="h-100 d-flex flex-column justify-content-between">
		<Header />
		
		<div className="container mt-3">
			<div className="row justify-content-center">
				<div className="col-4">
					<Login />
				</div>
			</div>
			
			<div className="row justify-content-center mt-5">
				<div className="col-4">
					<TodoList />
				</div>
			</div>
		</div>	
		
		<Footer />		
	</div>

      /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
