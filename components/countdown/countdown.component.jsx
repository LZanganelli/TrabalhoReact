import React, {useState, useEffect, useRef} from 'react';
import{ Text,View, StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';
import {spacing, fontSize} from '../../utils/sizes';

const minutesToMilis =(min) => min * 1000 * 60;
const formatTime = (time) => time <10 ? `0${time}` : time;

const styles = StyleSheet.create({
    text: {
        fontSize: fontSize.xxxl,
        fontWeight: 'bold',
        color: colors.white,
        padding: spacing.lg,
        backgroundColor: colors.twitter,
        borderRadius: 30,
        width: '50vh',
        textAlign: 'center',
    }
})

const CountDown = ({isPaused, minutes = 10, onProgress}) => {

    const interval = useRef(null);
    const[milis, setMilis] = useState(minutesToMilis(minutes));

    const countDown =() => {
        setMilis((time) =>  {
            if (time === 0) return time;
            const timeLeft = time - 1000;
            onProgress(timeLeft / minutesToMilis(minutes))
            return timeLeft;
        })
    }

    useEffect(() => {
        setMilis(minutesToMilis(minutes))
        
        if (isPaused){
            if(interval.current){
            clearInterval(interval.current);
        }
        return
        }
        interval.current = setInterval(countDown,1000);

        return () =>clearInterval(interval.current);
    }, [isPaused, minutes])


    const minute =Math.floor(milis / 1000 / 60) % 60;
    const seconds = Math.floor(milis/ 1000) % 60;

    return (
        <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    );
}

export default CountDown;