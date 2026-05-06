import React from 'react'
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {

    function addProdutos() {
        Alert.alert("Adicionar Produtos");
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <ImageBackground
                source={require('../assets/backgroud.jpg')}
                resizeMode='repeat'
                style={{ flex: 1, justifyContent: 'flex-start' }}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Lista de compras
                        <Ionicons name='trash' size={32} color="#fff"></Ionicons>
                    </Text>
                </View>


                <View style={styles.footer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                        color="#fff"
                        fontSize={18}
                        placeholder='Digite o nome do produto...'
                        placeholderTextColor="#aeaeae"
                                >
                        

                         <View>
                            <TouchableOpacity style={styles.iconContainers} >
                                <Ionicons name="add" size={36} color="#fff" />
                            </TouchableOpacity>
                         </View>
                   </TextInput>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})