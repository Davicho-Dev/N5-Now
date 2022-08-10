import { FC, memo } from 'react'

import BtnInterface from './Btn.interface'

const Btn: FC<BtnInterface> = ({ cta, isDisabled, title }) => (
	<button
		className='leading-tight bg-neutral-900 disabled:bg-neutral-600 disabled:cursor-not-allowed py-1.5 px-3 rounded uppercase'
		onClick={cta}
		type='button'
		title={title}
		disabled={isDisabled}
	>
		{title}
	</button>
)

export default memo(Btn)
