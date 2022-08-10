import { Outlet } from 'react-router-dom'

import { HeaderWrapper } from '../organisms'
import { useTranslation } from 'react-i18next'

const CommonLayout = () => {
	const { t, i18n } = useTranslation()

	return (
		<section className='sm:px-8 md:px-16 2xl:px-48'>
			{/*<section className='px-48'>*/}
			<HeaderWrapper
				lang={i18n.resolvedLanguage}
				setLang={i18n.changeLanguage}
			/>
			<Outlet />
		</section>
	)
}

export default CommonLayout
