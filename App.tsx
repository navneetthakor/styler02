import {
  SafeAreaView,
  ScrollView,
  } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElavatedCards from './components/ElavatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import Iterative from './components/Iterative';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElavatedCards />
        <FancyCard />
        <Iterative />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

