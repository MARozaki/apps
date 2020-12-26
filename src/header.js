import { useState } from 'react'
export default function Header(props){
	
	return <nav className="navbar  _bg-primary" role="navigation">
		<div className="navbar-header">
			<button 
				className="_navbar-toggler
					 _navbar-dark 
					_navbar-toggler-icon"
			data-toggle="collapse"
			data-target=".navbar-collapse">
				{'012'.split('').map( (v,i)=><span
					className="icon-bar"
					key={i}>---
				</span> )}
			</button>
			<span className=" navbar-brand">MyReactApp</span>
		</div>
		<div className="bg-dark collapse navbar-collapse"
			style={{ position: "absolute",
				top: '100%',
				left: '0', right: '0'
			 }}>
			<List />
		</div>
	</nav>
	
}

function List(props){
	const navigasi=[ "Home",  "About", "Fedback"]
	const url=[ "/index.html", "/about.html", "/fedback" ]
	
	return <ul
					className="nav navbar-nav">
		{navigasi.map((val,ind)=>{
			return <li key={ind}>
				<a className="nav-link"
					href={url[ ind ]}>{val}</a>
			</li>
		})}
	</ul>
}