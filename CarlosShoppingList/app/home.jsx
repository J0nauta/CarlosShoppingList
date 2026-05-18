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
                                <TouchableOpacity style={styles.iconContainers} onPress={addProdutos}>
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

const styles = StyleSheet.create({
    header: {
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000c0',
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffffff'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000000c0',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30
    },
    inputContainer: {
        backgroundColor: '#000',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        justifyContent: 'center',
    },
    iconContainers: {
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: '#000',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})