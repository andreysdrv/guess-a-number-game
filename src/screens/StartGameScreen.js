import React, { useState } from 'react'
import {
	Button,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import Card from '../constans/Card'
import colors from '../constans/colors'

const StartGameScreen = ({ handleStartGame }) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [confirmed, setConfirmed] = useState(false)
	const [selectedNumber, setSelectedNumber] = useState()

	const handleNumberInput = inputText => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''))
	}

	const handleResetInput = () => {
		setEnteredValue('')
		setConfirmed(false)
	}

	const handleConfirmInput = () => {
		const chosenNumber = parseInt(enteredValue)
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				'Invalid number!',
				'Number has to be a number between 1 and 99',
				[{ text: 'OK', style: 'default', onPress: handleResetInput }]
			)
			return
		}
		setConfirmed(true)
		setSelectedNumber(chosenNumber)
		setEnteredValue('')
		Keyboard.dismiss()
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New game!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='number-pad'
						maxLength={2}
						value={enteredValue}
						onChangeText={handleNumberInput}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button title='Reset' color={colors.accent} onPress={handleResetInput} />
						</View>
						<View style={styles.button}>
							<Button
								title='Confirm'
								color={colors.primary}
								onPress={handleConfirmInput}
							/>
						</View>
					</View>
				</Card>
				{confirmed && (
					<Card style={styles.summaryContainer}>
						<Text>You selected</Text>
						<NumberContainer>{selectedNumber}</NumberContainer>
						<Button
							color={colors.primary}
							title='START GAME'
							onPress={() => handleStartGame(selectedNumber)}
						/>
					</Card>
				)}
			</View>
		</TouchableWithoutFeedback>
	)
}

export default StartGameScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
})
