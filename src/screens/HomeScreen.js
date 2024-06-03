import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Home from "../components/Home";
import Logo from "../components/Logo";
import { useTheme } from '@react-navigation/native';

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Logo />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Box>
          <Home />
        </Box>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewContent: {
    paddingTop: 10, 
  },
});

export default HomeScreen;
