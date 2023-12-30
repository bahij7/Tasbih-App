import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className="cards-container">
        <Card dikr="اللــــــه اكــــــبــــــــــــر"/>
        <Card dikr="الحمــــــــــــــــــدللــــــه"/>
        <Card dikr="ســــــــــــبحــــــان اللــــــه"/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
