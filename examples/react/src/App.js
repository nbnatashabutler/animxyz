import React, { useState } from 'react'
import { XyzTransition, XyzTransitionGroup, XyzVisible } from '@animxyz/react'

function App() {
	const [toggled, setToggled] = useState(false)

	function toggle () {
		setToggled(!toggled)
	}

	return (
		<div>
			<XyzTransitionGroup appear xyz="fade down duration-10 stagger">
				{[...Array(5)].map((e, index) => {
					return <div key={index}>Hello</div>
				})}
			</XyzTransitionGroup>

			<XyzTransition appear state={toggled} mode="out-in" xyz="fade turn-ccw duration-10">
				{!toggled && <button onClick={toggle}>Toggle</button>}
				{toggled && <button onClick={toggle}>Untoggle</button>}
			</XyzTransition>

			{[...Array(100)].map((e, index) => {
				return (
					<XyzVisible key={index} xyz="fade turn-ccw duration-10">
						<div>Visible</div>
					</XyzVisible>
				)
			})}
		</div>
	)
}

export default App
