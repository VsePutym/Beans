import { FakeServerProps } from '../../types'


export const fakeServer = ({ email, password, text }: FakeServerProps): Promise<FakeServerProps> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email && password && text) {
				console.log(({ email, password, text }))
				resolve({ email, password, text })
			} else {
				console.log('Error')
				reject({message: 'Error'})
			}
		}, 1000);
	});
};
