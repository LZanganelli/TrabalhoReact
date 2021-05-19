import React, {useState} from 'react';
import{
    View,
    Text,
    StyleSheet,
} from 'react-native';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import {colors} from '../../utils/colors';
import {spacing, fontSize} from '../../utils/sizes';
import CountDown from '../../components/countdown/countdown.component';
import { ProgressBar } from 'react-native-paper';
import Timing from './Timing';


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        color: colors.cinza,
        textAlign: 'center',
        fontSize: fontSize.xl,
    },
    task: {
        color: colors.cinza,
        fontWeight: 'bold',
        textAlign : 'center',
        fontSize: fontSize.xl,
    },
    countDown:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper:{
    flex: 0.4,
    flexDirection: 'row',
    padding:spacing.md,
    justifyContent:'center',
    alignItems: 'center',
    }
});

const DEFAULT_TIME = 0;

const Timer =({ focusSubject }) =>{

    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(null);
    const [minutes, setminutes] = useState(DEFAULT_TIME);

    const onProgress = (progress) => {
        setProgress(progress);
    }

    const onChangeTime = (min) => {
        setminutes(min);
        setProgress(1);
        setIsStarted(false);
    }
    
    //  valeu fezao

    return(
    <View style={styles.container}>
        <View style={styles.countDown}>
          <CountDown isPaused={isStarted}
          minutes={minutes}
          onProgress={onProgress}/>
        </View>
        <View style={{ paddingTop: spacing.xxxl }}>
            <Text style={styles.title}> Meu foco agora é: </Text>
            <Text style={styles.task}> {focusSubject} </Text>
            </View>
        <View style={{padding: spacing.sm}}>
                <ProgressBar
                    progress={progress}
                    color={colors.twitter}
                    style={{ height: 20}}
                    borderRadius={50}>
                </ProgressBar>
        </View>
        <View>
        <Timing
            theme = 'twitter'
            onChangeTime={onChangeTime}
        />
        </View>
        <View style={styles.buttonWrapper}>
            {isStarted ?
                (<RoundedButton 
                    title="Start"
                    backgroundColor ={colors.zap}
                    onPress={() => setIsStarted(false)}
                    />)
                :
                (<RoundedButton 
                    title="Pause"
                    backgroundColor={colors.youtube}
                    onPress={() => setIsStarted(true)}
                    />)
            }

        </View>
    </View>    
    )
}

export default Timer;