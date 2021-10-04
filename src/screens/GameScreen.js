import React, { useState, useRef, useEffect } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../constans/Card'
import colors from '../constans/colors'

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	const rndNum = Math.floor(Math.random() * (max - min)) + min

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude)
	} else {
		return rndNum
	}
}

const GameScreen = props => {
	const [currGuess, setCurrGuess] = useState(
		generateRandomBetween(1, 100, props.userChoice)
	)
	const [rounds, setRounds] = useState(0)

	const currLow = useRef(1)
	const currHigh = useRef(100)

	const { userChoice, handleGameOver } = props

	useEffect(() => {
		if (currGuess === props.userChoice) {
			handleGameOver(rounds)
		}
	}, [currGuess, userChoice, handleGameOver])

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currGuess < props.userChoice) ||
			(direction === 'greater' && currGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong ...', [
				{ text: 'Sorry!', style: 'cancel' },
			])
			return
		}

		if (direction === 'lower') {
			currHigh.current = currGuess
		} else {
			currLow.current = currGuess
		}

		const nextNumber = generateRandomBetween(
			currLow.current,
			currHigh.current,
			currGuess
		)

		setCurrGuess(nextNumber)
		setRounds(curRounds => curRounds + 1)
	}

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button
						title='LOWER'
						color={colors.accent}
						onPress={nextGuessHandler.bind(this, 'lower')}
					/>
				</View>
				<View style={styles.button}>
					<Button
						title='GREATER'
						color={colors.primary}
						onPress={nextGuessHandler.bind(this, 'greater')}
					/>
				</View>
			</Card>
		</View>
	)
}

export default GameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
	button: {
		width: 100,
	},
})
