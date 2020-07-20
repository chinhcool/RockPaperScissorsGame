import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameStatus from './components/GameStatus';
import ButtonGroup from './components/ButtonGroup';
import PlayerCard from './components/PlayerCard';

const CHOICES = [
  {
    name: 'Rock',
    uri: 'https://i.ibb.co/nQjhdgY/rock.jpg'
  },
  {
    name: 'Paper',
    uri: 'https://i.ibb.co/fMNBV5t/paper.jpg'
  },
  {
    name: 'Scissors',
    uri:
      'https://i.ibb.co/py009Fh/scissors.jpg'
  }
];


const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
    console.log('Result laaaaa: ');
    console.log(userChoice);
    console.log(computerChoice);
    // console.log(resultText);


    let resultText;
  
    if (userChoice === 'Rock') {
      resultText = computerChoice === 'Scissors' ? 'Victory!' : 'Defeat!';
    };
    if (userChoice === 'Paper') {
      resultText = computerChoice === 'Rock' ? 'Victory!' : 'Defeat!';
    };
    if (userChoice === 'Scissors') {
      resultText = computerChoice === 'Paper' ? 'Victory!' : 'Defeat!';
    };
  
    if (userChoice === computerChoice) 
      resultText = 'Tie game!';
    return resultText;
};

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playerChoice: {},
      computerChoice: {},
      result :'',
    };
  }
  onPressButton = playerChoice => {
    const foundChoice = CHOICES.find(choice => choice.name === playerChoice);
    const computerChoice = randomComputerChoice();
    const result =  getRoundOutcome(foundChoice.name, computerChoice.name)
    console.log(result);


    this.setState({
      playerChoice: foundChoice,
      computerChoice,
      result,
    });
  };


  render(){
    return (
        <View style={styles.container}>
            <View style={styles.gameStatusWrapper}>
              <GameStatus result={this.state.result} />
            </View>

            <View style={styles.gamePlayerWrapper}> 
              <PlayerCard playerName="Player" choice={this.state.playerChoice}/>
              <PlayerCard playerName="Computer" choice={this.state.computerChoice}/>
            </View>

            <View style={styles.buttonGroupWrapper}>
              <ButtonGroup onPressButton={this.onPressButton}/>
            </View>
          
        </View>
      )
    };
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbea8',
  },
  gameStatusWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamePlayerWrapper: {
    flex: 0.4,
    flexDirection: 'row',
  },
  buttonGroupWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7F3',
  },
});
