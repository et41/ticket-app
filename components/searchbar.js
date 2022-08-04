import searchstyle from "../styles/Searchbar.module.css"

export default function Searchbar() {
	return (
		 <div className={searchstyle.searchbar}>
			 <input placeholder="Search Tickets for Events " />
	<span className="fa-solid fa-user"></span>
		 <i className="fa-solid fa-user"></i>

		 </div>
	)
}
