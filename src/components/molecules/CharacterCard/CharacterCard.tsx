import { FC } from 'react'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import CharacterCardInterface from './CharacterCard.interface'

const CharacterCard: FC<CharacterCardInterface> = ({
	birthday,
	img,
	image,
	name,
	origin,
	portrayed,
	species,
	status,
}) => {
	const { t } = useTranslation('card')

	return (
		<CharacterCardStyled className='h-24 grid grid-flow-col gap-x-2 pr-2 rounded overflow-hidden relative bg-neutral-600'>
			<figure
				className={`w-full h-24 ${
					status?.toLowerCase() === 'deceased' && 'grayscale'
				} ${status?.toLowerCase() === 'unknown' && 'sepia'}`}
			>
				<img
					src={img ?? image}
					alt={name}
					title={name}
					className='w-full h-full object-cover object-top'
				/>
			</figure>
			<aside
				className={`w-full py-2 grid content-between character__card__description`}
			>
				<h5 className='text-xs uppercase font-bold character__card__description__label'>
					{t('name')}:
				</h5>
				<span className='w-full text-xs uppercase truncate character__card__description__content'>
					{name}
				</span>
				{species && (
					<>
						<h5 className='text-xs uppercase font-bold character__card__description__label'>
							{t('species')}:
						</h5>
						<span className='w-full text-xs uppercase truncate character__card__description__content'>
							{species}
						</span>
					</>
				)}
				{birthday && (
					<>
						<h5 className='text-xs uppercase font-bold character__card__description__label'>
							{t('birthday')}:
						</h5>
						<span className='w-full text-xs uppercase truncate character__card__description__content'>
							{birthday}
						</span>
					</>
				)}
				{origin && (
					<>
						<h5 className='text-xs uppercase font-bold character__card__description__label'>
							{t('origin')}:
						</h5>
						<span className='w-full text-xs uppercase truncate character__card__description__content'>
							{origin.name}
						</span>
					</>
				)}
				<h5 className='text-xs uppercase font-bold character__card__description__label'>
					{t('status')}:
				</h5>
				<span className='w-full text-xs uppercase truncate character__card__description__content'>
					{status}
				</span>
				{portrayed && (
					<>
						<h5 className='text-xs uppercase font-bold character__card__description__label'>
							{t('portrayed')}:
						</h5>
						<span className='w-full text-xs uppercase truncate character__card__description__content'>
							{portrayed}
						</span>
					</>
				)}
			</aside>
			{status?.toLowerCase() === 'alive' && (
				<span className='w-1.5 h-1.5 absolute top-2 right-2 rounded bg-green-600 character__card__description__badge' />
			)}

			{status?.toLowerCase() === 'presumed dead' && (
				<span className='w-1.5 h-1.5 absolute top-2 right-2 rounded bg-amber-600 character__card__description__badge' />
			)}

			{(status?.toLowerCase() === 'deceased' ||
				status?.toLowerCase() === 'dead') && (
				<span
					className={`w-1.5 h-1.5 absolute top-2 right-2 rounded bg-red-600 z-50 character__card__description__badge`}
				/>
			)}
		</CharacterCardStyled>
	)
}

const CharacterCardStyled = styled.article`
	grid-template-columns: 5rem 1fr;

	.character__card__description {
		grid-template-columns: 6rem 1fr;

		@media (min-width: 1024px) {
			grid-template-columns: repeat(2, 50%);
		}

		@media (min-width: 1536px) {
			grid-template-columns: 40% 1fr;
		}

		&__label {
		}

		&__content {
		}

		&__badge {
			animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
		}
	}
`

export default CharacterCard
