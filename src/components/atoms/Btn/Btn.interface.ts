import { MouseEventHandler } from 'react'

interface BtnInterface {
	cta: MouseEventHandler<HTMLButtonElement>
	isDisabled: boolean
	title: string
}

export default BtnInterface
