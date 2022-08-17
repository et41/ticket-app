import events from "./../../eventData.json"
import eventsStyle from "./../../styles/Events.module.css"
import Image from "next/image"

export default function Events() {
	let eventsArray = events.slice(0,9)
	const css = {width:"100%", height: "auto"}
	return (
		<div className={eventsStyle.event}>
			{
				eventsArray.map(e => {
					return (
						<div className={eventsStyle.singleEvent}>
							<div className={eventsStyle.eventImage} >
								<Image  className={eventsStyle.image} layout="fill"  src={`${e.images.huge}`}/>
							</div>
							<p className={eventsStyle.title}>{e.title}</p>
							<p className={eventsStyle.venue}>{e.venue}</p>
						</div>
					)
			})
			}
		</div>
	)
}
