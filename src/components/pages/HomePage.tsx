import { useEffect, useState } from 'react'

import { v4 } from 'uuid'

import {
	BreakingBadInterface,
	RickMortyResultsInterface,
} from '../../interfaces'
import { Btn } from '../atoms'
import { CharacterCard } from '../molecules'
import { getHarryPotterChars, getRickMortyChars } from '../../helpers'

const HomePage = () => {
	const [currentList, setCurrentList] = useState<number>(0)

	const [rickMortyData, setRickMortyData] = useState<
		RickMortyResultsInterface[]
	>([])
	const [breakingBadData, setBreakingBadData] = useState<
		BreakingBadInterface[]
	>([])

	useEffect(() => {
		getRickMortyChars().then(({ results }) => setRickMortyData(results))
		getHarryPotterChars().then((results) => setBreakingBadData(results))
	}, [])

	return (
		<>
			<nav className='flex gap-x-3 pb-2'>
				<Btn
					title='Rick & Morty'
					isDisabled={currentList === 0}
					cta={() => setCurrentList(0)}
				/>
				<Btn
					title='Breaking Bad'
					isDisabled={currentList === 1}
					cta={() => setCurrentList(1)}
				/>
			</nav>
			<section className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pb-3'>
				{currentList === 0 &&
					rickMortyData.map((character) => (
						<CharacterCard key={v4()} {...character} />
					))}
				{currentList === 1 &&
					breakingBadData.map((character) => (
						<CharacterCard key={v4()} {...character} />
					))}
			</section>
		</>
	)
}

export default HomePage
