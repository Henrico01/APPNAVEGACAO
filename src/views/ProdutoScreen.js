import {View, Text, Button, FlatList, StyleSheet} from "react-native";

import produtos from "../dados/data/dados";
import { Divider, List } from "react-native-paper";

export default function ProdutoScreen(props) {
function getProdutoItem ({ item: prod}) {
    return (
      <View>
        <List.Item style={estilos.ListItem}
        title={prod.nome}
        descprtion={prod.preco}
        left={() => <List.Image variant="image"
        source={{ uri: prod.linkImagem}}
      />}
    />
    <Divider />
    </View>
  )
}

    return (
      <View style={estilos.container}>
       <FlatList
       data={produtos}
       keyExtractor={prod => prod.id}
       renderItem={getProdutoItem}
       style={estilos.FlatList}
       />
      </View>
    );
  }
  
  const estilos = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems:"center"
    },

    flatList: {
      width: "95%"
    }
  })