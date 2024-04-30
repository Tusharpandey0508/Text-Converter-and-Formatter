import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const[mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert=(message,text)=>{
     setAlert({ 
       msg : message,
      text : text})
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  const toggledMode=()=>{
    if(mode ==='light'){
      setMode("dark");
      document.body.style.backgroundColor="rgb(0,0,26)";
      console.log(mode);
      showAlert("Dark Mode has been Enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      console.log(mode);
      showAlert("light Mode has been Enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Text Converter" about="About Us" mode={mode} toggledMode={toggledMode}/>
    <Alert alert={alert}/>
    <div className='container my-4'>
     <Textform showAlert={showAlert} heading="Enter Your Text Here" toggledMode={toggledMode} mode={mode} />
    </div>
    </>
  );
}

export default App;
