import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.h1Heading}>FlatCards</Text>

            {/* division for cards  */}
            <View style={styles.container}>
                    <View style={[styles.card]}>
                        <Text style={styles.cardText}>Rohanshu</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text style={styles.cardText}>Meet</Text>
                    </View>
                    <View style={[styles.card]}>
                        <Text style={styles.cardText}>Raag</Text>
                    </View>
            </View>
        </View>
    );
};

export default FlatCards;

const styles = StyleSheet.create({
    h1Heading:{
        fontSize: 25,
        margin: 8,
    },
    container: {
        height: 115,
        margin: 10,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginLeft: 8,
        borderRadius: 8,
        backgroundColor: 'lightgray',
    },
    cardText: {
        color: 'black',
    },
});
