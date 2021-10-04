import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../constans/Card'
import colors from '../constans/colors'

const GameOverScreen = props => {
	return (
		<Card style={styles.container}>
			<Text>The Game is Over! Your Number is:</Text>
			<NumberContainer>{props.userChoice}</NumberContainer>
			<Text>Rounds count is:</Text>
			<NumberContainer>{props.guessRounds}</NumberContainer>
			<Button
				title='START NEW GAME'
				color={colors.primary}
				onPress={props.hanleNewGame}
			/>
		</Card>
	)
}

export default GameOverScreen

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colors.accent,
		padding: 10,
		borderRadius: 10,
		margin: 10,
		alignItems: 'center',
	},
})
