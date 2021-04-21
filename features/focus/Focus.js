import React, {useState} from "react";
import { StyleSheet,Text, View} from 'react-native';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/custom-button/custom-button.component';
import RoundedButton from '../../components/rounded-button/rounded-button.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent:'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,

  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',

  }
});


const Focus = ( { addSubject }) => {

    const[tempItem, setTempItem] = useState(null);
    const handleOnPress = () => {

        addSubject(tempItem);
    }
  

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Não posso procrastinar:</Text>
                <View style={styles.inputContainer}>
                  <TextInput 
                    style={{flex:1, marginRight: 10}}
                    onSubmitEditing={({ nativeEvent }) => addSubject (nativeEvent.text)}
                    />
                  <RoundedButton 
                  title="+" 
                  size={50} 
                  style={{backgroundColor:'#bfc4dc'}} 
                  textStyle={{color:'black'}}
                  onPress={() => {}}
                  />
              </View>
          </View>
        </View>
    )
}


export default Focus;