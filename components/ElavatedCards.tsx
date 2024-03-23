import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElavatedCards = () => {
    return (
        <View>
            <Text style={styles.h1Heading}>Elavated Cards</Text>

            {/* division for cards  */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Rohanshu</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Meet</Text>
                    </View>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Raag</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Kartavya</Text>
                    </View>
            </ScrollView>
        </View>
    );
};

export default ElavatedCards;

const styles = StyleSheet.create({
    h1Heading:{
        fontSize: 25,
        margin: 8,
    },
    container: {
        height: 115,
        margin: 10,
        marginTop: 5,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginLeft: 8,
        borderRadius: 8,
    },
    cardOne: {
        backgroundColor: 'brown',
    },
    cardTwo: {
        backgroundColor: '#9E1235',
    },

});
