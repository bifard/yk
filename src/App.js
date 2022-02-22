import React from 'react';
import './App.css';


//components
import { Streets } from './components/Streets';
import { Buildings } from './components/Buildings';
import { Flats } from './components/Flats';
import { Clients } from './components/Clients';
import { Layout } from 'antd';
import { Header } from 'antd/lib/layout/layout';


function App() {
  return (
    <Layout>
      <Header>
        <Streets/>
        <Buildings/>
        <Flats/>
      </Header>
      <Clients/>
    </Layout>
  );
}

export default App;
