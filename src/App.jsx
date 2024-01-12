import { useState } from 'react'
import '../src/style/App.css'
import diet from './files/diet.json';

import Header from './components/Header'
import FormLogin from "./components/FormLogin"
import Tabs from './components/Tabs'
import Footer from './components/Footer';

function App() {

  const [count, setCount] = useState(0)
  const [tabSelected, setTabSelected] = useState(0);
  const handleTabChange = (id) => {
    setTabSelected(id);
  };

  return (
    <div className="bodyApp">
      <Header/>
      {/*
          <FormLogin/>
      */}    
        <Tabs
          diet={diet}
          value={tabSelected}
          onTabChange={handleTabChange}
        />
      <br/>
      <Footer/>
    </div>
  )
}

export default App
