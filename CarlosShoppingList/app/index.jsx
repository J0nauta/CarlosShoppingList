import { link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <image 
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Carlos Shopping List </Text>
        <Text style={styles.text}>
          Monte sua lista de compras e não esqueça mais oque precisa comprar ao sair de casa!!
        </Text>
        <Link style={styles.button} href={"/home"}>
        <Text style={styles.buttonText}>Acessar</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 115,
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopStartRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 20,
    fonteWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
  bottom: '15%',
  alinSelf: 'center',
  borderRadius: 50,
  paddingVertical: 15,
  width: '60%',
  textAlign: 'center',
},
buttonText: {
    fontSize: 22,
    color: '#ffffff',
    fonteWeight: 'bold'
}
});
