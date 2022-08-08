import { useState } from "react";
import sliderStyle from "../../styles/Slider.module.css";
import importantEventsData from  "./images/importantEvents.json"
import Image from "next/image";
import SliderBtn from "./sliderbtn";
import data from "../../eventData.json";


export default function Slider(  ) {
	const [sliderIndex, setSliderIndex] = useState(0);
	const [isHover, setIsHover] = useState({0:true, 1:false, 2:false, 3:false, 4:false});
	const [scrolled, setScrolled] = useState(0);
	

	const checkActive = (index) => {
		if( sliderIndex === index ) {
			return "image active"
		} else {
			return "image"
		}
	}
	console.log("IMPORTANT", importantEventsData)
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
	const scrollHandlerToRight = (e) => {
		let el = document.getElementById("slider")
		el.scroll({
			left: scrolled + 400,
			behavior: "smooth",

		})
		if ( el.scrollWidth - el.clientWidth <= el.scrollLeft )	{
			setScrolled(0)
		}
		else {
			setScrolled(scrolled + 400)
		}


		console.log("scrollHandler", el.scrollWidth - el.clientWidth, el.scrollLeft)
	}

	const scrollHandlerToLeft = (e) => {

		let el = document.getElementById("slider")

		console.log("scrollHandler", el.scrollWidth - el.clientWidth, el.scrollLeft)
		el.scroll({
			left : scrolled - 400,
			behavior: "smooth",
		})
		if ( el.scrollWidth - el.clientWidth >= el.scrollLeft)	{
			setScrolled(0)
		}
		else {
			setScrolled(scrolled - 400)
		}
	}

	return (
		<div id="slider" className={sliderStyle.slider}>
			<h2>Popular Tickets</h2>
		<div onClick={scrollHandlerToLeft} className={sliderStyle.slideBarLeft}	 >
			<a className={`${sliderStyle.arrow} ${sliderStyle.prev}`}></a>
		</div>
		{
			importantEventsData.map((e, i)=> {
				return (
				<div key={i}
					onClick={() => hoverHandler(0)} 
					className={`${sliderStyle.slider1}  ${isHover[i] ? sliderStyle.active : sliderStyle.inactive}`}
				>
					<img src={`${e.images.huge}`} className={`${sliderStyle.sliderImage1}`}/>
					<div className={sliderStyle.content}>
						<p>{e.title}</p>
						<p className={sliderStyle.address}>{e.address}</p>
					</div>
				</div>
					)
			})
		}
		<div onClick={scrollHandlerToRight} className={sliderStyle.slideBarRight}>
				<div className={`${sliderStyle.arrow} ${sliderStyle.next}`}></div>
			</div>
		</div>
	) 
}
