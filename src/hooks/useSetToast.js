import { useContext } from 'react'
import { Context } from '../context'

export const useSetToast = () => {
	const { setToast } = useContext(Context)
	return { setToast }
}
