import { FC, memo } from 'react'

import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import HeaderWrapperInterface from './HeaderWrapper.interface'
import { Btn } from '../../atoms'

const HeaderWrapper: FC<HeaderWrapperInterface> = ({ lang, setLang }) => {
	const { t } = useTranslation('header')

	return (
		<HeaderWrapperStyled className='flex py-2 justify-between'>
			<h1 className='text-2xl font-bold'>N5 Now - {t('title')}</h1>
			{lang === 'en' && <Btn title='es' cta={() => setLang('es')} />}
			{lang === 'es' && <Btn title='en' cta={() => setLang('en')} />}
		</HeaderWrapperStyled>
	)
}

const HeaderWrapperStyled = styled.header``

export default memo(HeaderWrapper)
