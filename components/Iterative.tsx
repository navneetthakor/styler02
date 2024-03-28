import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react';

const list = [
    {
        uid: 1,
        uri: 'https://media.licdn.com/dms/image/D4D03AQHCtMUOZkGElg/profile-displayphoto-shrink_800_800/0/1695025292541?e=2147483647&v=beta&t=RZwYDvHosUcU2Zrw1NQCxlRUva6BDCCjvN0vBUjqANE',
        name: 'Navneet kumar',
        status: 'busy',
    },
    {
        uid: 2,
        uri: 'https://media.licdn.com/dms/image/C4D03AQGREQ80jVHf6g/profile-displayphoto-shrink_800_800/0/1660054982453?e=2147483647&v=beta&t=aWRrQZ0vR3wW_FnzclriOB_dgkCddPvRgz5Q7Zi0IJI',
        name: 'Rohashu Banodha',
        status: 'busy',
    },
    {
        uid: 3,
        uri: 'https://media.licdn.com/dms/image/D4D03AQHCtMUOZkGElg/profile-displayphoto-shrink_800_800/0/1695025292541?e=2147483647&v=beta&t=RZwYDvHosUcU2Zrw1NQCxlRUva6BDCCjvN0vBUjqANE',
        name: 'Navneet kumar',
        status: 'busy',
    },
    {
        uid: 4,
        uri: 'https://media.licdn.com/dms/image/C4D03AQGREQ80jVHf6g/profile-displayphoto-shrink_800_800/0/1660054982453?e=2147483647&v=beta&t=aWRrQZ0vR3wW_FnzclriOB_dgkCddPvRgz5Q7Zi0IJI',
        name: 'Rohashu Banodha',
        status: 'busy',
    },
    {
        uid: 5,
        uri: 'https://media.licdn.com/dms/image/D4D03AQHCtMUOZkGElg/profile-displayphoto-shrink_800_800/0/1695025292541?e=2147483647&v=beta&t=RZwYDvHosUcU2Zrw1NQCxlRUva6BDCCjvN0vBUjqANE',
        name: 'Navneet kumar',
        status: 'busy',
    },
    {
        uid: 6,
        uri: 'https://media.licdn.com/dms/image/C4D03AQGREQ80jVHf6g/profile-displayphoto-shrink_800_800/0/1660054982453?e=2147483647&v=beta&t=aWRrQZ0vR3wW_FnzclriOB_dgkCddPvRgz5Q7Zi0IJI',
        name: 'Rohashu Banodha',
        status: 'busy',
    },
];
const Iterative = () => {
  return (
    <View>
      <Text style={styles.h1Heading}>Iterative</Text>
      <ScrollView nestedScrollEnabled={true} style={styles.listContainer}>
        {list?.map((iteam)=>(
            <View style={styles.iteamContainer} key={iteam.uid}>
                <Image style={styles.imageStyles} source={{uri: iteam.uri}} />
                <View style={styles.iteamBody}>
                    <Text style={styles.iteamName}>{iteam.name}</Text>
                    <Text style={styles.iteamStatus}>{iteam.status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Iterative;

const styles = StyleSheet.create({
    h1Heading:{
        fontSize: 25,
        margin: 8,
    },
    listContainer:{
        height: 300,
        margin: 8,
    },
    iteamContainer:{
        height: 80,
        backgroundColor:'#3C40A6',
        marginHorizontal: 8,
        marginVertical: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    imageStyles:{
        width: 60,
        height:60,
        borderRadius: 60 / 2,
        margin: 5,
    },
    iteamBody:{
        marginLeft: 8,
    },
    iteamName:{
        fontSize: 20,
        fontWeight: '700',
    },
    iteamStatus:{
        fontStyle: 'italic',
    },
});
