import filterStyle from "../../styles/Filter.module.css"
export default function LocationFilter() {
	return (
		<div type="text" placeholder="Location" className={filterStyle.locationFilter}>
			<img className={filterStyle.locationIcon} src={`./icons/location.png`}/>
			<p className={filterStyle.locationText}>Location</p>
		</div>
	)
}
