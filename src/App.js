
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
{/*import{
  Route,
  Routes, 
} from'react-router-dom';*/}

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // it is state to set function

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'textUtils-Dark Mode';
      /*setInterval(() => {
        document.title='TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title='Intall TextUtils now';
      }, 1500);*/
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'textUtils-Light Mode';

    }
  }
  return (
    <>
      {/*<Navbar title="Suryawanshi Groups"aboutText="About" />*/}
      {/*<Navbar/>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {  /*    <Routes>*/}
        {/*      <Route exact path='/' element={ }/> */
        }
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <Route exact path='/About' element={<About />}/>
      </Routes>*/}
      </div>
    </>

  );
}

export default App;
