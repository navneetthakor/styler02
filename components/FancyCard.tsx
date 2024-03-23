import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.h1Heading}>Fancy Card</Text>

      {/* view that hold all the detail of card  */}
      <View style={styles.container}>
        <Image style={styles.cardImage}
        source={{
            uri: 'https://1.bp.blogspot.com/-eXC28tjQoG8/UQ0gch0zxlI/AAAAAAAAASk/wgQ8PAWrCsI/s1600/vadodara05.jpg',
        }}
        />
        <Text style={[styles.cardHeading, styles.blackText]}>Ranchhodray Temple</Text>
        <Text style={[styles.blackText]}>Dakor, Gujarat</Text>
        <Text style={[styles.cardDescription, styles.blackText]}>This temple had very interesting story that, lord Krishna comes here in the year of 1200 AC. This story is building block for popularity and attraction of this temple</Text>
        <Text style={[styles.blackText, styles.cardFooter]}> -&gt; 13 Km away</Text>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
    h1Heading:{
        fontSize: 25,
        margin: 8,
    },
    container: {
        backgroundColor: 'white',
        color: 'black',
        padding: 8,
        margin: 10,
        borderRadius: 8,
    },
    cardImage:{
        borderRadius: 8,
        height: 180,
    },
    blackText: {
        color: 'black',
    },
    cardHeading:{
        marginTop: 5,
        fontSize: 20,
        fontWeight: '700',
    },
    cardDescription:{
        margin: 10,
    },
    cardFooter:{
        marginLeft: 10,
        fontWeight: '600',
    },
});
