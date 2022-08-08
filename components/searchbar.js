import searchstyle from "../styles/Searchbar.module.css"
import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
export default function Searchbar() {

	const [isSearch, setIsSearch] = useState(false)
	
	const clickHandlerSearch = () => {
		setIsSearch(!isSearch)
	}

	console.log("isSearch", isSearch)

	return (
		<div className={`${searchstyle.searchbar} ${isSearch ? searchstyle.active : searchstyle.inactive}`} onClick={clickHandlerSearch}>
			< AiOutlineSearch className={searchstyle.icon}/>
			 <input placeholder="Search Tickets for Events " />
			 {isSearch && <div className={searchstyle.searchFull}></div>
			 }
		</div>
	)
}
