import LocationFilter from "./Filters/locationFilter";
import DateFilter from "./Filters/dateFilter.js";
import CategoryFilter from "./Filters/categoryFilter";
import filterStyle from "./../styles/Filter.module.css";

export default function Filter () {
	return(
		<div className={filterStyle.filter}>
			<LocationFilter />
			<DateFilter />
			<CategoryFilter />
		</div>
	)
}
