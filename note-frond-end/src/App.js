import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import LoginControl from './login/LoginControl';
import logo from './logo2.jpg';

function App() {
    return (
        <div className="App-note">
            <nav className="nav navbar navbar-dark bg-dark">
                <h1 className="titulo">
                    Note App
                    <img src={logo} className="App-logo"></img>
                </h1>
                
            </nav>
            <LoginControl/>
        </div>
        
    );
}
    
export default App;
    