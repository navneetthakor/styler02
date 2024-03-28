import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ActionCard = () => {
    // to handle button press
    const openWebsite = async (websiteUrl: string) => {
            await Linking.openURL(websiteUrl);
    }
  return (
    <View>
      <Text style={styles.h1Heading}>Action Card</Text>

      {/* card  */}
      <View style={styles.card}>
        {/* heading  */}
        <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeading}> Did you visited Gujarat ? </Text>
        </View>
        <Image style={styles.cardImage} source={{
            uri: 'https://as2.ftcdn.net/v2/jpg/05/69/14/75/1000_F_569147528_I1bYqVf5sNBHvTz2Fry1Z4ko5BNwdOx3.jpg',
        }} />

        <View style={styles.cardBody}>
            <Text numberOfLines={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis deserunt ea labore earum sequi dolorum ex eos mollitia quia nulla delectus, eum enim cum expedita incidunt maiores tempora cupiditate. Beatae dicta cumque delectus consectetur illo atque perferendis quisquam expedita, quasi deleniti, doloribus obcaecati quod illum nisi quam autem officia?
            </Text>
        </View>

        {/* butttons  */}
        <View style={styles.cardFooter}>
        <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/navneetkumar-ceo/')} style={styles.cardButtons} >
            <Text style={styles.cardButtonText}>Read more</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard;

const styles = StyleSheet.create({
    h1Heading:{
        fontSize: 25,
        margin: 8,
    },
    card: {
        backgroundColor: '#AE1438',
        borderRadius: 8,
        margin: 10,
    },
    cardHeadingContainer: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardHeading: {
        fontSize: 20,
        fontWeight: '700',
    },
    cardImage: {
        height: 250,
    },
    cardBody:{
        marginHorizontal: 10,
        marginVertical: 8,
    },
    cardFooter:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: 5,
    },
    cardButtons: {
        padding: 8,
        backgroundColor:'#ffffff',
        borderRadius: 8,
    },
    cardButtonText: {
        color: '#AE1438',
    },
});
