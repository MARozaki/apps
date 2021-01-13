//import {useState} from 'react'

export default function Content(props){
		return <main style={{
			justifyContent: 'center',
			alignItem: "center",
			display: "flex",
			flexDirection: 'column',
	        paddingTop:"20px",
			paddingBottom:"20px"
		}}
		className="container bg-light">
			<h3 align="center"
				className="">Login </h3>
			<section className="container"
				style={{
					
				}}>
				<Form />
				<span>Belum punya akun? <a href="sign">Sign</a></span>
			</section>
		</main>
	}
	

function Form(props){
	const submit=e=>{
		let username=e.target[0],
		password=e.target[1]
		if(username.value === '' || password.value === ''){
				e.preventDefault()
				//console.log(e)
			}
		//else, send data
		
	}
	return <form onSubmit={submit}
	action=""
	method=""
	className="">
		<div className="form-group">
			<input type="text"
				className="form-control"
				id="username"
				placeholder="@exsample" />
				
			<input type="password"
				id="password"
				className="form-control"
				placeholder="Password" />
		</div>
		
		<button
			className="btn btn-primary btn-block"
			type="submit">
			Login
		</button>
		
	</form>
}
