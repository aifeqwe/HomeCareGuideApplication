import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const handleSearch = () => {
    // Your search logic goes here
    // This is just a dummy data to demonstrate the functionality
    const data = [
      {
        name: 'Service 1',
        description: 'This is a description of service 1',
        tags: ['tag1', 'tag2', 'tag3'],
      },
      {
        name: 'Service 2',
        description: 'This is a description of service 2',
        tags: ['tag2', 'tag3', 'tag4'],
      },
      {
        name: 'Service 3',
        description: 'This is a description of service 3',
        tags: ['tag1', 'tag3', 'tag5'],
      },
    ];

    const results = data.filter((item) => {
      const tags = item.tags.map((tag) => tag.toLowerCase());
      return tags.includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search services"
        value={searchTerm}
        onChangeText={handleSearchTermChange}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {searchResults.length > 0 ? (
        <ScrollView style={styles.resultsContainer}>
          {searchResults.map((result, index) => (
            <View style={styles.result} key={index}>
              <Text style={styles.resultName}>{result.name}</Text>
              <Text style={styles.resultDescription}>{result.description}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No results found</Text>
        </View>
      )}
    </View>
  );
};

export default SearchPage;