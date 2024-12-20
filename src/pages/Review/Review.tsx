import { TextareaAutosize, TextField } from '@mui/material'
import { useActionState } from 'react'
import { ReviewState } from '../../types'
import BtnSubmit from '../../components/BtnSubmit/BtnSubmit.tsx'
import { fakeServer } from './FackeServer.ts'
import styles from './styles.module.css'

const Review = () => {
	const [state, submitAction] = useActionState(reviewBeans, {
		data: null,
		error: null
	})
	async function reviewBeans (prevState: ReviewState, formData: FormData ) {
		const email = formData.get('email')
		const password = formData.get('password')
		const text = formData.get('text')
		
		try {
			if (typeof email !== 'string' || typeof password !== 'string' || typeof text !== 'string') {
				return { ...prevState, error: 'All fields must be filled in correctly.' };
			}
			
			const response = await fakeServer({ email, password, text })
			return { data: response, error: null }
		} catch (e: any) {
			return { ...prevState, error: e.message }
		}
	}
	
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1>Review</h1>
				<form action={submitAction}>
					<div 	className={styles.Validate}>
						<TextField
							variant="standard"
							id='email'
							type='email'
							placeholder='Enter your email'
							name='email'
							fullWidth
							label='email'
						/>
					</div>
					<div 	className={styles.Validate}>
						<TextField
							variant="standard"
							id='password'
							type='password'
							fullWidth
							label='Password'
							placeholder='Enter your password'
							name='password'
						/>
					</div>
					<div 	className={styles.ValidateText}>
						<TextareaAutosize
							minRows={3} // Минимальное количество строк
							maxRows={10} // Максимальное количество строк (опционально)
							placeholder="Введите текст..."
							name='text'
							style={{
								width: '100%',
								padding: '8px',
								fontSize: '16px',
								borderRadius: '4px',
								border: '1px solid #ccc',
							}}
						/>
					</div>
					{state.data && <p style={{color: 'green', marginTop: '10px'}}>Complete</p>}
					<BtnSubmit />
				</form>
			</div>
		</div>
	)
}

export default Review
