import React from 'react';
import { Center, Switch, HStack, Text } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const DisplaySettingScreen = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
     <Center
      shadow={2} width="90%"
      mt="$2" px="$2" py="$4"
      
      borderRadius={3} 
      alignSelf="center"
     >
      <HStack space={8} alignItems="center" >
         <Text size="lg" px="$2">Dark Mode</Text>
         <Switch
            name="Dark Mode"
            size='md'
            value={isDarkMode}
            onToggle={handleThemeToggle}
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
         />
      </HStack>        
     </Center>
  );
};

export default DisplaySettingScreen;
