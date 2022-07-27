import Image from "next/image";
import sliderStyle from "../../styles/Slider.module.css"

export default function SliderBtn() {
	return (
		<>		
		<div className={`${sliderStyle.btn} ${sliderStyle.right}`}>
				&#x3c;
		</div>
	
		<div className={`${sliderStyle.btn} ${sliderStyle.left}`}>
			&#x3e;
		</div>
		</>

	)
}
