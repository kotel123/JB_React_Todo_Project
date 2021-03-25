import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export function Login() {
	const isLoading = false;
	
	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const data = await response.json();
		console.log(data);
	
	}
	
	return (
		<Paper elevation={3} >
			<form  className="p-3 " onSubmit={handleSubmit}>
				<div className="mb-3">
					<TextField type="email" className="mb-3 form-label form-control" id="outlined-basic" label="Email address" variant="outlined" />
					{/* <label className="form-label">Email address</label> 
					<input type="email" className="form-control" />	*/}
				</div>
				<div className="mb-3">
					<TextField type="password" className="mb-3 form-control" id="outlined-basic" label="Password" variant="outlined" />				
					{/* <label>Password</label> 
					<input type="password" className="form-control" />*/}
				</div>
				<Button 
					variant="contained" 
					color="primary"
					disabled={isLoading}
					type="submit" >
					Primary
				</Button>
				{/* <button 
					disabled={isLoading}
					type="submit" 
					className="btn btn-primary"
				>Submit</button> */}
				{
					isLoading && <h1>Loading...</h1>
				}
			</form>
		</ Paper >
	)
}