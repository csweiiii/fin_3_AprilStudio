import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike, selectLikedProjects } from '../redux/accountSlice';
import { Card } from '@gluestack-ui/themed';
import { useTheme } from '@react-navigation/native';


const IdeasScreen = () => {
  const dispatch = useDispatch();
  const likedProjects = useSelector(selectLikedProjects);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { colors } = useTheme(); 
  

  const data = [
    { key: "北歐", description: "北歐度假風" },
    { key: "韓系", description: "韓系清新風" },
    { key: "簡約", description: "簡約木質風" },
    { key: "木質", description: "簡約木質風" },
    { key: "清新", description: "韓系清新風" },
    { key: "復古", description: "歐式復古風" },
    { key: "日式", description: "日式木質風" },
    { key: "度假", description: "北歐度假風" }
  ];

  const handleLike = (project) => {
    if (likedProjects.find(item => item.title === project.title)) {
      dispatch(removeLike(project));
    } else {
      dispatch(addLike(project));
    }
  };

  const handleCategoryPress = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  

  const cardData = [
    { imageSource: require('../img/Day-Dream.jpg'), title: "Day Dream", description: "北歐度假風／一房", customWidth: 180 },
    { imageSource: require('../img/Oat-Milk-Latte.jpg'), title: "Oat Milk Latte", description: "日式木質風／一房", customWidth: 180 },
    { imageSource: require('../img/Playground.jpg'), title: "Playground", description: "木質度假風／一廳", customWidth: 180 },
    { imageSource: require('../img/Autumn-Days.jpg'), title: "Autumn Days", description: "北歐木質風／一房一廳", customWidth: 180 },
    { imageSource: require('../img/Home-Syokudou.jpg'), title: "Home Syokudou", description: "日系綠植風／兩房一廳", customWidth: 180 },
    { imageSource: require('../img/Morning-In-Seoul-02.jpg'), title: "Morning In Seoul", description: "韓系清新風／一房", customWidth: 180 },
    { imageSource: require('../img/Spring-in-Room.jpg'), title: "Spring in Room", description: "北歐清新風", customWidth: 180 },
    { imageSource: require('../img/Le-Coin-De-Chiao.jpg'), title: "Le-Coin-De-Chiao", description: "歐式復古風／一房", customWidth: 180 },
    { imageSource: require('../img/Nordic-Wooden.jpg'), title: "Nordic Wooden", description: "簡約木質風／一房一廳", customWidth: 180 }
  ];

  const filteredCards = selectedCategory
    ? cardData.filter(card => card.description.includes(selectedCategory))
    : cardData;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Design by style</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem 
            text={item.key} 
            onPress={() => handleCategoryPress(item.key)}
          />
        )}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <CardGroup 
          likedProjects={likedProjects} 
          handleLike={handleLike} 
          cards={filteredCards} 
        />
      </ScrollView>
    </View>
  );
}

const ListItem = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
      </View>
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
  );
}

const CardGroup = ({ likedProjects, handleLike, cards }) => {
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 2) {
    groupedCards.push(cards.slice(i, i + 2));
  }

  return (
    <View style={styles.cardGroup}>
      {groupedCards.map((group, index) => (
        <View key={index} style={styles.cardContainer}>
          {group.map(card => (
            <CardWithImage
              key={card.title}
              imageSource={card.imageSource}
              title={card.title}
              description={card.description}
              customWidth={card.customWidth}
              likedProjects={likedProjects}
              handleLike={handleLike}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const CardWithImage = ({ imageSource, title, description, customWidth, likedProjects, handleLike }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
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

  const project = { imageSource, title, description, customWidth };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={[styles.card, { width: customWidth ? customWidth : 180 }]}>
        <Image source={imageSource} style={styles.cardImage} />
        <Text style={styles.cardText}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={() => handleLike(project)} style={styles.heartIcon}>
          <Icon name="heart" size={20} color={likedProjects.find(item => item.title === title) ? 'darkred' : 'gray'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  text: {
    color:'black',
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  itemText: {
    position: 'absolute',
    top: 21,
    left: 30,
    zIndex: 1,
  },
  box: {
    width: 60,
    height: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    margin: -8,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
  cardGroup: {
    marginTop: 20,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: 180,
    height: 270,
    marginLeft: 8,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    marginTop: -5,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default IdeasScreen;