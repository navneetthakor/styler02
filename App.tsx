import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElavatedCards from './components/ElavatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElavatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    fontSize: 14,
  },
});
