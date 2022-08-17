import filterStyle from "../../styles/Filter.module.css"
export default function DateFilter() {
	return (
		<>
			<div className={`${filterStyle.dateFilter} ${filterStyle.mask}`}>
			<input type="date" className={filterStyle.input} value="DATE" placeholder="Date"/ >
				<p className={filterStyle.text}>DATE</p>
				<div className={filterStyle.sign}>

				<div className={filterStyle.circle}></div>
					<div className={filterStyle.line}></div>
					<div className={filterStyle.arrow}>

						<div className={filterStyle.arrowLine1}></div>

						<div className={filterStyle.arrowLine2}></div>
					</div>
				</div>
			</div>
			<div className={`${filterStyle.dateFilter} ${filterStyle.dateFilterLast} ${filterStyle.mask} `}>
		<input type="date" className={filterStyle.input} placeholder="Date"/ >
				<p className={filterStyle.text}>DATE</p>
			</div>
		</>

	)
}
