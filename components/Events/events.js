import events from "./../../eventData.json"
import eventsStyle from "./../../styles/Events.module.css"

export default function Events() {
	let eventsArray = events.slice(0,9)
	return (
		<div className={eventsStyle.event}>
			{
				eventsArray.map(e => {
					return (
						<div className={eventsStyle.singleEvent}>
							<img className={eventsStyle.image} src={`${e.images.huge}`}/>

							<p className={eventsStyle.title}>{e.title}</p>
							<p className={eventsStyle.venue}>{e.venue}</p>
						</div>
					)
			})
			}
		</div>
	)
}
