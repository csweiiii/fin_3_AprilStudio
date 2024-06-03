import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView , TouchableOpacity} from 'react-native';
import Logo from "../components/Logo";
import { Box, Card } from "@gluestack-ui/themed";

const ArticleScreen = () => {
  return (
    <ScrollView>
      <Box>
        <Logo />
          <View style={styles.verticalCardsContainer}>
          <TouchableOpacity style={styles.card} activeOpacity={0.5}>
            <Card style={styles.card}>
              <Image source={require('../img/Article-1.png')} style={styles.verticalImage} />
              <Text style={styles.cardText}>室內設計知識</Text>
              <Text style={styles.cardTitle}>軟裝設計是什麼？與硬裝差在哪裡？服務內容有哪些？</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} activeOpacity={0.5}>
            <Card style={styles.card}>
              <Image source={require('../img/Article-2.png')} style={styles.verticalImage} />
              <Text style={styles.cardText}>室內設計知識，老屋設計</Text>
              <Text style={styles.cardTitle}>軟裝改造臥室該怎麼做？4 步驟打造韓系粉色房間</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} activeOpacity={0.5}>
            <Card style={styles.card}>
              <Image source={require('../img/Article-3.png')} style={styles.verticalImage} />
              <Text style={styles.cardText}>室內設計風格，室內設計知識</Text>
              <Text style={styles.cardTitle}>北歐侘寂風 Japandi 跟侘寂風居然不一樣？ 3 款 Japandi 案例分享</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} activeOpacity={0.5}>
            <Card style={styles.card}>
              <Image source={require('../img/Article-4.png')} style={styles.verticalImage} />
              <Text style={styles.cardText}>室內設計風格</Text>
              <Text style={styles.cardTitle}>什麼是波希米亞風格？五大重點特色歸納</Text>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} activeOpacity={0.5}>
            <Card style={styles.card}>
              <Image source={require('../img/Article-5.png')} style={styles.verticalImage} />
              <Text style={styles.cardText}>品牌好物推薦</Text>
              <Text style={styles.cardTitle}>Standard Products 台北首店開幕！7 樣 200 元內的質感商品推薦</Text>
            </Card>
            </TouchableOpacity>
          </View>
   
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    height: Dimensions.get('window').height * 0.3,
  },
  bottomContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
  },
 
  card: {
    width: Dimensions.get('window').width - 20, // Adjust width to fit screen with some padding
    marginVertical: 10,
    alignItems: 'center',
    padding: 5,
    borderRadius:5,
    marginLeft:6
  },
  verticalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain', // Use 'contain' to maintain aspect ratio
    borderRadius:5,
  },
  cardText: {
    marginTop: 8,
    marginLeft:30,
    textAlign: 'left', // Align text to the left
    alignSelf: 'flex-start', // Align self to the start (left) within the card
  },
  cardTitle: {
    marginTop: 10,
    marginLeft:30,
    fontSize:18,
    textAlign: 'left', // Align text to the left
    alignSelf: 'flex-start', // Align self to the start (left) within the card
  },
});

export default ArticleScreen;