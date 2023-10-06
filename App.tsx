import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LivroLista from './LivroLista';

export default function App() {
  return (
    <View style={styles.container}>
      

      <StatusBar style="auto" />
      
      <LivroLista></LivroLista>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
