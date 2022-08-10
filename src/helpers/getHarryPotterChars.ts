import axios from 'axios'

const getHarryPotterChars = async () => {
	try {
		const { data } = await axios(
			'https://www.breakingbadapi.com/api/characters'
		)

		return data
	} catch (err) {
		return err
	}
}

export default getHarryPotterChars
