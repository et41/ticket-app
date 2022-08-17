import filterStyle from "./../../styles/Filter.module.css";


export default function CategoryFilter() {
	return (
		<div className={filterStyle.categoryFilter}>
			<p className={filterStyle.categoryTitle}>Category</p>
			<div className={filterStyle.IconDiv}>
				<img className={filterStyle.Icon} src={`./icons/image1.png`}/>
				<p className={filterStyle.iconText}>Concert</p>
			</div>
			<div className={filterStyle.IconDiv}>
				<img className={filterStyle.Icon} src={`./icons/image2.png`}/>
				<p className={filterStyle.iconText}>Sport</p>
			</div>
			<div className={filterStyle.IconDiv}>
				<img className={filterStyle.Icon} src={`./icons/image3.png`}/>
				<p className={filterStyle.iconText}>Comedy</p>
			</div>

			<div className={filterStyle.IconDiv}>
				<img className={filterStyle.Icon} src={`./icons/image4.png`}/>
				<p className={filterStyle.iconText}>Theatre</p>
			</div>


		</div>
	)
}
