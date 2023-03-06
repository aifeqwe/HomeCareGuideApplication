import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

const SearchResultPage = ({ route }) => {
  const { keyword } = route.params;
  return (
    <View style={styles.container}>
      <Header title="Search Results" />
      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>Results for "{keyword}"</Text>
        <Text style={styles.resultText}>Result 1</Text>
        <Text style={styles.resultText}>Result 2</Text>
        <Text style={styles.resultText}>Result 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  }
});

export default SearchResultPage;