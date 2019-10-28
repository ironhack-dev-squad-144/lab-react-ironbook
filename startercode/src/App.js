import React from 'react';
import logo from './logo.svg';
import './App.css';

import ContactTable from './ContactTable'

import { Container } from 'reactstrap';


function App() {
  return (
    <div className="App">
    <Container>
    <h1 className="m-5">IRON BOOKS</h1>
    <ContactTable />
    </Container>
    </div>
  );
}

export default App;
