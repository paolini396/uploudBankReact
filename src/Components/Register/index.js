import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, Picker, Switch, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';



export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        { key: 1, tipo: 'Seu sexo...*'},
        { key: 2, tipo: 'Masculino'},
        { key: 3, tipo: 'Feminino'}
      ],
      limite: 100,
      estudante: false,

    };
    
    this.cadastrar = this.cadastrar.bind(this);
  }
  cadastrar(){
    if(this.state.nome === '' || this.state.idade === '' || this.state.sexos[this.state.sexo].tipo === 'Seu sexo...*' ){
      alert('Preencha todos os dados corretamente!')
      return;
    }

    alert(
      'Conta cadastrada com sucesso! \n\n' +
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexos[this.state.sexo].tipo + '\n' +
      'Limite de conta: R$ ' + this.state.limite.toFixed(0)+ ',00' + '\n' +
      'Conta Estudante: ' + ((this.state.estudante)? 'Sim' : 'Não')
    );

  }

  render() {

    let sexoTipo = this.state.sexos.map( (v, k) => {
      return <Picker.Item  ItemStyle={styles.picker} style={styles.picker} key={k} value={k} label={v.tipo} />
    })


    return[
      <View style={styles.Container} >
        <Text style={styles.header}>Banco React</Text>
        <Text style={styles.cadastro}>Cadastrar</Text>
        

        <View style={styles.flex}>
        
        
          <TextInput style={styles.input} 
          placeholder="Digite seu nome...*"
          placeholderTextColor="#8b10ae" 
          underlineColorAndroid="transparent"
          onChangeText={ (texto) => this.setState({nome: texto})}
          />


          <TextInput style={styles.input}
          placeholder="Digite sua idade...*"
          placeholderTextColor="#8b10ae"
          underlineColorAndroid="transparent"
          onChangeText={ (texto) => this.setState({idade: texto})}
          keyboardType="numeric" //deixar apenas números
          />


          <Picker 
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
          style={styles.picker}
          >
            {sexoTipo}
          </Picker>
          

          <Slider 
            style={styles.limite}
            minimumValue={100}
            maximumValue={1000}
            onValueChange={ (limiteSelecionado) => this.setState({limite: limiteSelecionado}) }
            value={this.state.limite}
            minimumTrackTintColor="#00FF00"
            maximumTrackTintColor="#FF0000"
            thumbTintColor='#8b10ae'
          />


          <Text style={styles.limite}> Limite: R$ {this.state.limite.toFixed(0)},00 </Text>


          <View style={styles.estudante}>
          <Switch 
            value={this.state.estudante}
            onValueChange={ (valorSwitch) => this.setState({estudante: valorSwitch})}
            trackColor="#00FF00"
            thumbColor="#8b10ae"
            />
          <Text style={styles.status}> {(this.state.estudante) ? "Sim," : "Não"}  </Text>
            <Text style={styles.status}>sou estudante </Text>     
         </View>


         <TouchableOpacity style={styles.botao} onPress={this.cadastrar}>
           <Text style={styles.txtbotao}>Abrir Conta</Text>
         </TouchableOpacity>

         </View >
      </View>
    
    ]
  }
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor: '#8b10ae'
  },
  header: {
    color: "#FFF",
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 30
  },
  input:{
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#8b10ae',
    margin: 30,
    fontSize: 15,
    padding: 10,
    marginVertical: 8,
    borderColor: '#8b10ae',
    marginTop: 30
  },

  cadastro: {
    color: "#FFF",
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
    
  },

 picker: {
   height: 40,
   textAlign: 'center',
   color: '#8b10ae',
   fontSize: 20,
   margin: 30,
   marginTop: 5,
   borderWidth: 5 
 },

 limite: {
   textAlign:'center',
   fontSize: 20,
   color: '#8b10ae',
   fontWeight: 'bold',
   backgroundColor: '#fff',
   height: 40,
   margin: 30,
   marginTop: -30,
   top: 15,
  
 },
 status: {
   fontSize: 20,
   color: '#8b10ae',
   fontWeight: 'bold', 
 },
 
 estudante: {
   flexDirection: 'row',
   textAlign: 'center',
   left: 45,
   margin: 30,
   marginTop: 10,
   left: 60
 },

 botao: {
   borderWidth: 2,
   borderRadius: 25,
   margin: 20,
   backgroundColor: '#8b10ae',
   borderColor: '#8b10ae',
 },

 txtbotao: {
   fontSize: 25,
   textAlign: 'center',
   padding: 5,
   color: '#FFF',
   fontWeight: 'bold'

 },
 flex: {
   flex: 1,
   borderWidth: 1,
   backgroundColor: '#FFF',
   borderRadius: 25,
   margin: 15,
   
 }
  
});
