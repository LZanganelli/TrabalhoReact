import React, {useEffect, useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    } from 'react-native';
import CustomButton from '../../components/custom-button/custom-button.component';    

    const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        }
      });

const Hooks = () => {

    let [contador, setContador] = useState(10);
    let [outroContador, setOutroContador] = useState(100);

    const handleCount  = () => {
        setContador(contador++)
    };

    const handleOutro  = () => {
        setOutroContador(outroContador--)
    };

    useEffect(() =>{
        console.log('useEffect')
    }, [outroContador])

    
    return(
        <View style={styles.container}>
            <Text>Valor: {contador}</Text>
            <CustomButton title='Contar' onPress=
            {handleCount}/>
            <Text>Outro: {outroContador}</Text>
            <CustomButton title='Descontar' onPress=
            {handleOutro}/>
        </View>
    )
}

export default Hooks;