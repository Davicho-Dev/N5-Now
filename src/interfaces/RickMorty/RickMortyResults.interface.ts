import RickMortyResultsStatusEnum from './RickMortyResultsStatus.enum'
import RickMortyResultsSpeciesEnum from './RickMortyResultsSpecies.enum'
import RickMortyResultsGenderEnum from './RickMortyResultsGender.enum'
import RickMortyResultsLocationInterface from './RickMortyResultsLocation.interface'

interface RickMortyResultsInterface {
	id: number
	name: string
	status: RickMortyResultsStatusEnum
	species: RickMortyResultsSpeciesEnum
	type: string
	gender: RickMortyResultsGenderEnum
	origin: RickMortyResultsLocationInterface
	location: RickMortyResultsLocationInterface
	image: string
	episode: string[]
	url: string
	created: Date
}

export default RickMortyResultsInterface
