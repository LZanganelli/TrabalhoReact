import React from 'react';
import{View, StyleSheet} from 'react-native';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    timingButton:{
        flex: 1,
        alignItems: 'center',
    },
});

const Timing = ({onChangeTime}) => {


    return (
        <View style={styles.container}>
        <View style={styles.timingButton}>
        <RoundedButton
            size={60}
            backgroundColor={colors.twitter}
            title='10'
            onPress={() =>onChangeTime(10)}
        />
        </View>
        <View style={styles.timingButton}>
        <RoundedButton
            size={60}
            backgroundColor={colors.twitter}
            title='15'
            onPress={()=>onChangeTime(15)}
        />
        </View>
        <View style={styles.timingButton}>
        <RoundedButton
            size={60}
            backgroundColor={colors.twitter}
            title='20'
            onPress={() =>onChangeTime(20)}
        />   
        </View>
    </View> 
    );
}

export default Timing;