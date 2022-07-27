import hamburger from "../styles/Hamburger.module.css"

const Hamburger = ({ isOpen }) => {
	return (
		<div className={hamburger.hamburger}>
			<div className={`${hamburger.burger} ${isOpen ? hamburger.burger1true : hamburger.burger1false}`} />
			<div className={  `${hamburger.burger} ${isOpen ? hamburger.burger2true : hamburger.burger2false}` } />
			<div className={  `${hamburger.burger} ${isOpen ? hamburger.burger3true : hamburger.burger3false}`   } />
		</div>
	)
}

export default Hamburger;
