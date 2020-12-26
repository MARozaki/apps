//import {useState} from 'react'

export default function Content(props){
		return <div style={{ height: '500px' }} className="container bg-light">
			<article align="center" className="container">
				<h3>Login </h3>
				<AddDataForm add={props.setData} data={props.data} />
			</article>
		</div>
	}
	

function AddDataForm(props){
	const submit=e=>{
		let username=e.target[0],
		password=e.target[1]
		if(username.value === '' || password.value === ''){
				e.preventDefault()
				console.log(e)
			}
		//else, send data
		
	},
	style={ width: '100%' }
	return <form onSubmit={submit}
	className="form-horizontal">
		<input style={style} type="text"
			placeholder="Username" />
		<input style={style} type="password"
			placeholder="Password" />
		
		<button
			className="btn btn-primary"
			style={style} type="submit">
			Login
		</button>
	</form>
}
