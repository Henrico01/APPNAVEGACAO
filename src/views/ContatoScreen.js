import {View, Text, Button} from "react-native";

export default function ContatoScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contato Screen</Text>
        <Button 
        title='Ir para Sobre'
        onPress={() => props.navigation.navigate('Home')}
      />
    <Button 
        title='Ir para Produtos'    
        onPress={() => props.navigation.navigate ('Sobre')}
    />
    <Button 
        title='Ir para Contato'    
        onPress={() => props.navigation.navigate ('Produtos')}
    />
      </View>
    );
  }
