import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './Alert';

function App() {
  const  [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{

    setAlert(
      {
        msg:message,
        type:type
        
      }
    )
  }

  const toggleMode = () => {
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has been enabled","Success")
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","Success")
    }
  }
  return (
    <>
    
<Navbar mode = {mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<Textform heading ="Enter text to analyze"mode = {mode} />

<div className="container my-3">
</div>
    </>
  );
}

export default App;
