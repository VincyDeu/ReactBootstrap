import React, { Component } from "react";
import Navbar from "./components/navbar";
import MainContent from './components/MainContent';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

      render() {
        return (
              <>
                <Navbar/>
                <MainContent />
                <Footer />
              </>
          )
      }
}

export default App;
