import RickMortyResultsLocationInterface from '../../../interfaces/RickMorty/RickMortyResultsLocation.interface'

interface CharacterCardInterface {
	birthday?: string
	img?: string
	image?: string
	name?: string
	portrayed?: string
	species?: string
	status?: string
	origin?: RickMortyResultsLocationInterface
}

export default CharacterCardInterface
