import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './src/components/Header'
import GameOverScreen from './src/screens/GameOverScreen'
import GameScreen from './src/screens/GameScreen'
import StartGameScreen from './src/screens/StartGameScreen'

export default function App() {
	const [userNumber, setUserNumber] = useState()
	const [guessRounds, setGuessRounds] = useState(0)

	const handleStartGame = selectedNumber => {
		setUserNumber(selectedNumber)
		setGuessRounds(0)
	}

	const handleGameOver = numOfRounds => {
		setGuessRounds(numOfRounds)
	}

	const hanleNewGame = () => {
		setGuessRounds(0)
		setUserNumber(null)
	}

	const getContent = () => {
		if (userNumber && guessRounds <= 0) {
			return <GameScreen userChoice={userNumber} handleGameOver={handleGameOver} />
		} else if (guessRounds > 0) {
			return (
				<GameOverScreen
					userChoice={userNumber}
					hanleNewGame={hanleNewGame}
					guessRounds={guessRounds}
				/>
			)
		} else {
			return <StartGameScreen handleStartGame={handleStartGame} />
		}
	}

	return (
		<View style={styles.screen}>
			<Header title='Guess a Number' />
			{getContent()}
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
})
