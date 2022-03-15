import React, { useState } from 'react'
import Share from 'react-native-share'
import {
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
} from 'react-native'

const App = () => {
	const [sharedText, setSharedText] = useState()
	const [success, setSuccess] = useState()

	const onSharePress = async () => {
		console.log('Hello world')

		setSuccess(false)

		const image =
			'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='

		const shareText = 'Hallo'

		const result = await Share.open({
			message: shareText,
			url: image,
			type: 'image/*',
		})

		console.log(result)

		setSharedText(result.message)

		if (!result.message) {
			return
		}

		if (
			!result.message.match(/whatsapp/i) &&
			!result.message.match(/instagram/i) &&
			!result.message.match(/linkedin/i) &&
			!result.message.match(/facebook/i) &&
			!result.message.match(/twitter/i)
		) {
			return
		}

		setSuccess(true)
	}

	return (
		<SafeAreaView>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
			>				
				<TouchableOpacity
					onPress={onSharePress}
					style={{
						padding: 20,
						backgroundColor: 'red',
					}}
				>
					<Text style={{color: 'white'}}>Hello world</Text>
				</TouchableOpacity>

				{sharedText && <Text>{sharedText}</Text>}
				{success && <Text>HET WERKT JONGUH!!!</Text>}
			</ScrollView>
		</SafeAreaView>
	)
}

export default App
