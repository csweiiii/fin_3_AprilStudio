import React from 'react';
import { Box, Text, Button } from '@gluestack-ui/themed'; // 假设使用了 Box, Text 和 Button 组件

const SettingsScreen = ({ navigation }) => {
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#E0E0E0" // 设置背景色为灰色
    >
      <Box
        width={300}
        height={250}
        backgroundColor="#FFFFFF" // 设置方块背景色为白色
        borderRadius={10}
        padding={20}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="20px" fontWeight="bold" marginTop={20}>
          You need a login for this. Do you want to go to the login page?
        </Text>
        <Button
          marginTop={50} // 添加按钮与文字之间的间距
          marginBottom={20}
          backgroundColor="#E0E0E0"
          onPress={() => navigation.navigate('LoginScreen')}

        >
          <Text>Login</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsScreen;