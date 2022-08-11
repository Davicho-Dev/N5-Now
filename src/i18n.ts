import i18next from 'i18next'
import Backend from 'i18next-locize-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		lng: 'en',
		fallbackLng: 'en',
		saveMissing: true,
		backend: {
			projectId: 'a1db5d55-cd2e-43e9-b9c0-8a824b587d46',
			apiKey: '2266bdfd-26aa-4560-b515-288d0fd7a7c1',
		},
	})
