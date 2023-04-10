import { View, Text, Button, Image } from 'react-native';

import styles from './styles';

export default function Rpg (props){
  return(
    <View style = {styles.container} > 
     <View style = {styles.viewImg}>
        <Image source = {{
            uri: props.rpg.imagem
        }} style = {styles.img}/>
     </View>
     <View style = {styles.viewData}>
      <Text style={styles.nome}> Nome do item: {props.rpg.nome}</Text>
      <Text style={styles.descricao}> <Text style = {styles.titulo}>Descrição do item</Text>: {props.rpg.descricao}</Text>
      <Button style= {styles.button} title= "trocar"></Button>
     </View>
    </View>
  );
}
    
