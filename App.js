import React, { Component } from 'react';
import { ScrollView,StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: '#000080',
    fontWeight: 'bold',
  },
  font: {
    color: '#000080',
    paddingLeft: 10,
    fontSize: 12,
  },
});

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://media.licdn.com/dms/image/C5103AQG4Kbz0BwMPqQ/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=8bmMCT3jh21uVEi2H_gtuAkCcUDN17THjXFWWtyRpx0'
    };
    return (
      <ScrollView style={{backgroundColor: '#8AAAE5'}}>
        <View style={{flex: 1, marginLeft: 10,marginTop: 27,marginRight:10,flexDirection: 'row', backgroundColor: '#FFFFFF', }}>
           <Image source={pic} style={{width: 93, height: 93,}}/>
           <View style={{paddingTop: 36, paddingLeft: 12}}>
           <Text style={ styles.bigBlue}>Saswat Panda</Text>
           <Text style={styles.font}>BTech, CSE</Text>
           </View>
        </View>
        <View style={{marginTop: 15,marginLeft: 10,marginRight:10,backgroundColor: '#FFFFFF', }}>
           <Text style={{}, styles.bigBlue}>About</Text>
           <Text style={{paddingTop: 5,color: '#000080',}}>My journey so far has taught me not to wait for a comfortable situation to start the work that can have positive impact on your life as well as the world.</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>I supersede and believe in this quote, "All I ask is that TODAY, YOU do the BEST WORK of your entire life". I admire Steve Jobs and Elon Musk to a great extent.</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>I advanced to national level in National children's science congress. I have won school level gold medals in National Science Olympiad and International Mathematics Olympiad.</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>I can code quite comfortably in programming languages like Python, C++, C and Java.</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>I am passionate about coding. And am very much interested in internships,  and would like to intern as a web and an app developer.</Text>
           <Text style={{color: '#000080',}}>I would also like to intern as a manager.</Text>
        </View>
        <View style={{marginTop: 15,marginLeft: 10,marginRight:10,backgroundColor: '#FFFFFF', }}>
           <Text style={ styles.bigBlue}>Academic Achievements</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>Above 90% in 10th and 12th board</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>Received Child Scientist Award in 9th grade from NCSC</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>CGPA of 9.46 at VIT Chennai</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>8 'S' grades out of 16 courses registered at VIT Chennai</Text>
        </View>
        <View style={{marginTop: 15,marginLeft: 10,marginBottom: 10,marginRight:10,backgroundColor: '#FFFFFF', }}>
           <Text style={ styles.bigBlue}>Projects</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>E-Accountant - an android app that keeps track of all your expenses</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>sane_time - a Time Management app that helps you build your perfect timetable</Text>
           <Text style={{paddingTop: 3,color: '#000080',}}>Supermarket - an app that lets you view and buy things from a Supermarket</Text>
        </View>
     </ScrollView>
      
    );
  }
  
  
}
