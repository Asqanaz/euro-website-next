import React from "react"

function Spinner({ size, color }) {
	return (
		<div className={`lds-ring ${color === 1 ? "lds-ring1" : "lds-ring2"} ${size === 2 && "scale-[0.7]"}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Spinner
