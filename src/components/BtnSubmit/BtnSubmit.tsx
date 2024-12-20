import { Button } from '@mui/material'
import { useFormStatus } from 'react-dom'

const BtnSubmit = () => {
	const { pending } = useFormStatus()
	return (
			<Button variant="contained" sx={{backgroundColor: 'white', color: 'black'}} type="submit" disabled={pending}>
				{pending ? 'Loading...' : 'Send'}
			</Button>
	)
}

export default BtnSubmit;