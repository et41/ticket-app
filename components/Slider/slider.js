import { useState } from "react";
import sliderStyle from "../../styles/Slider.module.css";
import Image from "next/image";
import SliderBtn from "./sliderbtn";
import data from "../../eventData.json";


export default function Slider(  ) {
		const [sliderIndex, setSliderIndex] = useState(0)


	const importantEvents = [];
	for (let i = 0; i < 3; i++) {
		importantEvents.push(i);
	};
	const checkActive = (index) => {
		if( sliderIndex === index ) {
			return "image active"
		} else {
			return "image"
		}
	}

	const clickHandler = () => {
		console.log("clickHandler")
		setSliderIndex(prev => prev + 1)

	}

	console.log("importantEvents", `/images/event${sliderIndex}.jpg`, checkActive(1) );
	
	return (
		<div className={sliderStyle.slider}>
			{/*<SliderBtn />
			<div className={sliderStyle.slider}>
					<Image key={sliderIndex} src={`/images/event${sliderIndex}.jpg`} layout="fill" className={sliderIndex.image}/>
			</div>*/}
			<div className={sliderStyle.slider1} >
				<Image src={"/images/event0.jpg"} width={100} height={200} />
			</div>
			<div className={sliderStyle.slider2} >
				<Image src={"/images/event1.jpg"} width={100} height={200} />
			</div>
			<div className={sliderStyle.slider1} >
				<Image src={"/images/event2.jpg"} width={100} height={200} />
			</div>


		</div>
	)
}
