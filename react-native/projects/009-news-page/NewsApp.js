import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

const NewsApp = () => {
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.head}>
        Fenerbahce Transfer News
      </Text>
       <Image source ={require('./news1.jpg')}
      style={{width: 350, height: 200, alignSelf: 'center'}} />
      <Text style={styles.news1}>
        Transfer Talk: Ozil wanted by Fenerbahce to end Arsenal nightmare 
      </Text>
      <Text style={styles.news1content}>
        Turkish power Fenerbahce are serious about making the moves neccessary to bring Mesut Ozil from Arsenal. Transfer Talk has the latest. 
      </Text>
      <Image source ={require('./perotti.jpg')}
      style={{width: 350, height: 200, alignSelf: 'center'}} />
      <Text style={styles.news2}>
        New Bomb: Diego Perotti 
      </Text>
      <Text style={styles.news2content}>
        One of Canary's biggest bombs in this transfer period was Diego Perotti. The 32-year-old winger was the last to sign for Fenerbahçe in the summer. 
      </Text>
      <Image source ={require('./samatta.jpg')}
      style={{width: 350, height: 200, alignSelf: 'center'}} />
      <Text style={styles.news3}>
        Nightmare of the Goalkeapers: Mbwana Samatta 
      </Text>
      <Text style={styles.news3content}>
        In Fenerbahçe, Tanzanian striker Mbwana Samatta became a star with two goals in the Karagümrük match, and a congratulatory message came from the African Football Confederation. 
      </Text>
    </View>
  </ScrollView>
  
   
      
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
   },

   head: {
     
     marginTop:24,
     marginBottom:24,
     paddingLeft:3,
     fontSize: 32,
     fontWeight: 'bold',
     textAlign: 'left',
   },
   news1:{
     
     fontSize: 24,
     fontWeight:'bold',
     paddingLeft: 3,

   }, 
   news2: {
     
     fontSize: 24,
     fontWeight:'bold',
     paddingLeft: 3,

   },
  
   news3: {
     
     fontSize: 24,
     fontWeight:'bold',
     paddingLeft: 3,

   },
    news1content: {
      
     fontSize: 18,
     marginBottom: 20,
     paddingLeft: 3,
   }, 
    
    news2content: {
      
     fontSize: 18,
     marginBottom: 20,
     paddingLeft: 3,
   },
    news3content: {
      
     fontSize: 18,
     marginBottom: 20,
     paddingLeft: 3,
   },
});

export default NewsApp;
