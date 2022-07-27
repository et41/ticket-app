import filterStyle from "../../styles/Filter.module.css"
export default function DateFilter() {
	return (
		<input type="date" className={filterStyle.dateFilter} placeholder="Date"/ >
	)
}
