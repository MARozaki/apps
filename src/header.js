//import { useState } from 'react'
export default function Header(props){
	
	return <div className="
					navbar  bg-info"	
					role="navigation">
		<div className="navbar-dark">
			<button 
				className="
					toggler
					navbar-toggler
					navbar-toggler-icon"
					data-toggle="collapse"
					data-target=".navbar-collapse">
				</button>
				<span className="
					brand
					navbar-brand">
				MyReactApp
			</span>
		</div>
		<nav className="bg-light
			collapsing
			navbar-collapse"
			style={{ position: "absolute",
				top: '100%',
				left: '0', right: '0',
				paddingRight: '15px',
				paddingLeft: '15px'
			 }}>
			<List />
		</nav>
	</div>
	
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