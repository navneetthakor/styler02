import {
  SafeAreaView,
  ScrollView,
  } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElavatedCards from './components/ElavatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElavatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

