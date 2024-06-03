import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const MyTheme = (isDarkMode) => {
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? DarkTheme.colors.background : 'white',
      primary: isDarkMode ? DarkTheme.colors.primary : '#425050', // 更改主要顏色為深灰色
    },
  };
};
export default MyTheme;
