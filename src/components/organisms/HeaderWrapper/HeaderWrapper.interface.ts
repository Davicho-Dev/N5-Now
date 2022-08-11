import { Callback, TFunction } from 'i18next'

interface HeaderWrapperInterface {
	lang: string
	setLang: (
		lng?: string | undefined,
		callback?: Callback | undefined
	) => Promise<TFunction>
}

export default HeaderWrapperInterface
