import axios from 'axios'

const getRickMortyChars = async () => {
	try {
		const { data } = await axios('https://rickandmortyapi.com/api/character')

		return data
	} catch (err) {
		return err
	}
}

export default getRickMortyChars
