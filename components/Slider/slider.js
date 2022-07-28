import { useState } from "react";
import sliderStyle from "../../styles/Slider.module.css";
import Image from "next/image";
import SliderBtn from "./sliderbtn";
import data from "../../eventData.json";


export default function Slider(  ) {
	const [sliderIndex, setSliderIndex] = useState(0);
	const [isHover, setIsHover] = useState({0:true, 1:false, 2:false, 3:false, 4:false});


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

	const hoverHandler = (index) => {
		console.log("hoverHandler", index)
		let newHover = {
			...isHover,
			[index]: !isHover[index]
		}
		console.log("hover", newHover)
		setIsHover(newHover)
	}

	console.log("isHover", isHover)

	return (
		<div className={sliderStyle.slider}>
			{/*<SliderBtn />
			<div className={sliderStyle.slider}>
					<Image key={sliderIndex} src={`/images/event${sliderIndex}.jpg`} layout="fill" className={sliderIndex.image}/>
			</div>*/}
			{/*<div onClick={() => hoverHandler(0)} 
				className={`${sliderStyle.slider1} ${isHover[0] ? sliderStyle.active : sliderStyle.inactive}`}
			>
				<Image src={"/images/event0.jpg"} width={`20vw`} height={`20%`} layout={`responsive`} className={sliderStyle.imageActive} />
			</div>
			<div onClick={() => hoverHandler(1)}
				className={`${sliderStyle.slider2} ${isHover[1] ? sliderStyle.active : sliderStyle.inactive}`}
			>
				<Image src={"/images/event1.jpg"}  width={`20vw`} height={`20%`} layout={`responsive`}  />
			</div>
			<div onClick={() => hoverHandler(2)} 
				className={`${sliderStyle.slider3} ${isHover[2] ? sliderStyle.active : sliderStyle.inactive}`} >
				<Image src={"/images/event2.jpg"}  width={`20vw`} height={`20%`} layout={`responsive`} />
			</div>
			<div onClick={() => hoverHandler(3)} 
				className={`${sliderStyle.slider4} ${isHover[3] ? sliderStyle.active : sliderStyle.inactive}`} 
			>
				<Image src={"/images/event3.jpg"} width={`20vw`} height={`20%`} layout={`responsive`} />
			</div>
			<div onClick={() => hoverHandler(4)} 
				className={`${sliderStyle.slider5} ${isHover[4] ? sliderStyle.active : sliderStyle.inactive}`} 
			>
				<Image src={"/images/event4.jpg"}  width={`20vw`} height={`20%`} layout={`responsive`}  />
		</div>*/}
<div onClick={() => hoverHandler(0)} 
				className={`${sliderStyle.slider1} ${isHover[0] ? sliderStyle.active : sliderStyle.inactive}`}
			>
				<img src={"/images/event0.jpg"} className={sliderStyle.sliderImage0}/>
			</div>
			<div onClick={() => hoverHandler(1)}
				className={`${sliderStyle.slider2} ${isHover[1] ? sliderStyle.active : sliderStyle.inactive}`}
			>
				<img src={"/images/event1.jpg"} className={sliderStyle.sliderImage1} />
			</div>
			<div onClick={() => hoverHandler(2)} 
				className={`${sliderStyle.slider3} ${isHover[2] ? sliderStyle.active : sliderStyle.inactive}`} >
				<img src={"/images/event2.jpg"}  className={sliderStyle.sliderImage2}/>
			</div>
			<div onClick={() => hoverHandler(3)} 
				className={`${sliderStyle.slider4} ${isHover[3] ? sliderStyle.active : sliderStyle.inactive}`} 
			>
				<img src={"/images/event3.jpg"} className={sliderStyle.sliderImage3} />
			</div>
			<div onClick={() => hoverHandler(4)} 
				className={`${sliderStyle.slider5} ${isHover[4] ? sliderStyle.active : sliderStyle.inactive}`} 
			>
				<img src={"/images/event4.jpg"}  className={sliderStyle.sliderImage4}/>
		</div>
		


		</div>
	)
}
