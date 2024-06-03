import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectLikedProjects } from '../redux/accountSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

const LikeScreen = () => {

  const likedProjects = useSelector(selectLikedProjects);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleProjectPress = (title) => {
    switch (title) {
      case 'Day Dream':
        navigation.navigate('DayIntro');
        break;
      case 'Oat Milk Latte':
        navigation.navigate('OatIntro');
        break;
      case 'Playground':
        navigation.navigate('PlaygroundIntro');
        break;
      case 'Autumn Days':
        navigation.navigate('AutumnIntro');
        break;
      case 'Home Syokudou':
        navigation.navigate('SyokudouIntro');
        break;
      default:
        break;
    }
  };

  return (
    
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {likedProjects.length > 0 ? (
        likedProjects.map((project, index) => (
          <TouchableOpacity key={index} onPress={() => handleProjectPress(project.title)}>
            <View style={styles.projectContainer}>
              <Image source={project.imageSource} style={styles.projectImage} />
              <View style={styles.textContainer}>
                <Text style={[styles.projectTitle, { color: colors.text }]}>{project.title}</Text>
                <Text style={[styles.projectDescription, { color: colors.text }]}>{project.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>我的最愛中目前沒有產品</Text>
        <Icon name="heart" size={20} color="black" style={styles.icon} />
      </View>
      <Text style={styles.content}>
        只要按下，就能將喜愛的風格加入清單
      </Text>
    </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    marginLeft: 22,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    textAlign: 'left',
    fontSize: 20,
    marginRight: 6,
  },
  icon: {
    marginLeft: 0.2,
  },
  content: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 20,
  },
  projectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 14,
  },
});

export default LikeScreen;