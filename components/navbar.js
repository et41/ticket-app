import navbarStyle  from "../styles/Navbar.module.css"
import {useState} from "react"
import Image from "next/image";
import Hamburger from "./hamburger";
import cn from "classnames"

export default function Navbar() {
	const [hamburgerOpen, setHambugerOpen] = useState(false);

	const toggleHamburger = () => {
		console.log("toggle", hamburgerOpen)
		setHambugerOpen(!hamburgerOpen);
	}
		
	return (
		<nav className={navbarStyle.nav}>
			<div className={navbarStyle.logo}>
				<p>LOGO</p>
			</div>
			<div className={cn(navbarStyle.listopen,{
				[navbarStyle.hide] : hamburgerOpen === false,
				[navbarStyle.show] : hamburgerOpen === true,
			}
				)}>
				<a>Concert</a>
				<a>Theatre</a>
				<a>Sport</a>
				<a>Comedy</a>
			</div>
			<div  
				className={navbarStyle.hamburgercontainer} 
				onClick={toggleHamburger}
			>
				<Hamburger isOpen={hamburgerOpen} / >
			</div>
			<div className={navbarStyle.userPanel}>
				<div className={navbarStyle.userPanelMenu}>
					<div className={navbarStyle.userPanelLine}></div>
					<div className={navbarStyle.userPanelLine}></div>
					<div className={navbarStyle.userPanelLine}></div>
				</div>
					<img className={navbarStyle.userIcon} src={`./icons/image7.png`} />
			</div>

		</nav>

	)
}
