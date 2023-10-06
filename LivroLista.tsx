import React, { useState, useEffect } from 'react';
import { View, FlatList,StyleSheet } from 'react-native';
import axios from 'axios';
import { Button,Text, Card, Avatar } from 'react-native-paper';

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  useEffect(() => {
    // Fazendo uma solicitação GET para a API de livros
    axios.get('https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi')
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // O array vazio faz com que o useEffect seja executado apenas uma vez, após a renderização inicial

  return (
    <View>
      <Text>Lista de Livros:</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id.toString()}
        renderItem=
        {
            ({ item }) => 
        
            <Card mode='elevated' style={estilocard.container}  >
            <Card.Title title={item.autorPrincipal}   />
            <Card.Content>
              <Text variant="titleLarge">{item.titulo}</Text>
              <Text variant="bodyMedium">{item.autorPrincipal}</Text>
            </Card.Content>
            <Card.Cover style={estilocard.imagem}  resizeMode='contain' source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${item.imagem}` }} />

          </Card>
         } // Supondo que cada livro tenha uma propriedade 'titulo'
      />
    </View>
  );
};


const estilocard = StyleSheet.create({
    container: {
      margin: 10,
      height: 'auto',
    },
    imagem:{
      justifyContent: 'center',
      maxWidth: '100%',
      width:200,
      height:200,
    }
  });