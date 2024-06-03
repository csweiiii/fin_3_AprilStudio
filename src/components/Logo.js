import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../img/Logo.png')} style={styles.logo} />
      </View>
      <SearchBar />
    </View>
  );
};

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
    marginTop: 60,
    zIndex: 1,
  },
  logoContainer: {
    position: 'relative',
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '95%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});

export default Logo;