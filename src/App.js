import React, { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./App.css"
import { TiArrowDownOutline } from "react-icons/ti"

function App() {
	const scene = useRef()
	const tlScrollScene = useRef()
	const q = gsap.utils.selector(scene)

	gsap.registerPlugin(ScrollTrigger)

	useLayoutEffect(() => {
		tlScrollScene.current = gsap
			.timeline({
				defaults: { ease: "none", duration: 1 },
			})
			.to(q("#scroll"), {
				opacity: 0,
				duration: 0.3,
			})
			.to(q(".moon"), {
				scale: 3,
				opacity: 0,
				duration: 1.3,
			})
			.to(q(".para"), {
				yPercent: -25,
				xPercent: -6,
				delay: -0.5,
				duration: 1.2,
				opacity: 1,
			})
			.to(q("#wilderness"), {
				yPercent: 160,
				opacity: 0,
				duration: 1.2,
			})
			.to(q(".forest"), {
				scale: 2.1,
				opacity: 0,
				delay: -0.2,
				duration: 1.4,
			})
			.to(q(".mountain"), {
				opacity: 0,
				yPercent: 15,
				scale: 1.2,
				delay: -0.7,
			})
			.to(q(".lake"), {
				scale: 2,
				opacity: 0,
				delay: -0.98,
			})
			.to(q(".para"), {
				opacity: 0,
				delay: -0.2,
				duration: 0.2,
				ease: "power1.out",
			})
			.to(q(".sky"), {
				opacity: 0,
				scale: 2,
				duration: 1.6,
			})
		ScrollTrigger.create({
			id: "st-scene",
			trigger: ".scene",
			animation: tlScrollScene.current,
			start: "top top",
			scrub: true,
			end: "+=4000 100%",
			pin: true,
			anticipatePin: 1,
		})
		return () => {
			const stId = ScrollTrigger.getById("st-scene")
			if (stId) {
				stId.kill()
				tlScrollScene.current.kill()
			}
		}
	}, [q])

	return (
		<>
			<div className='scene' ref={scene}>
				<h1 className='dev' id='wilderness'>
					Wilderness
				</h1>
				<h6 id='scroll'>
					SCROLL DOWN <TiArrowDownOutline />
				</h6>
				<img
					src={process.env.PUBLIC_URL + "./images/forest.png"}
					alt='forest'
					className='forest'
				/>
				<img
					src={process.env.PUBLIC_URL + "./images/lake.png"}
					alt='lake'
					className='lake'
				/>
				<img
					src={process.env.PUBLIC_URL + "./images/sky.png"}
					alt='sky'
					className='sky'
				/>
				<img
					src={process.env.PUBLIC_URL + "./images/mountain.png"}
					alt='mountain'
					className='mountain'
				/>
				<img
					src={process.env.PUBLIC_URL + "./images/moon.png"}
					alt='moon'
					className='moon'
				/>
				<img
					src={process.env.PUBLIC_URL + "./images/para.png"}
					alt='paraglider'
					className='para'
				/>
			</div>
			<div className='part1'>
				<h2>Coding Wilderness</h2>
				<p>
					Hi there, I'm <b> Romain GIOUX </b> an inspired self-taught
					<b> Web Developer </b> based in Zurich, Switzerland. I love
					discovering new technologies and
					<b> Solving Digital Puzzles. </b>
					Aiming for a career reconversion, since the last 2 years, I didn't
					stop to learn how <b> the Web is Built </b> and how I can contribute
					to make it <b> a Pleasant Space. </b>
				</p>
				<p id='last-p'>
					<b> My challenge</b> is to turn this enthusiasm and commitment into a
					professional activity, gain experiences by
					<b> Creating Complex Projects </b> and join an
					<b> Ambitious Team. </b>
				</p>
				<img
					src={process.env.PUBLIC_URL + "./images/forest.png"}
					alt='forest'
					className='forest-2'
				/>
			</div>
			<h3>Designed and Built by Romain GIOUX - Web Developer </h3>
			<div className='links'>
				<a href='https://romaingioux.dev'>Portfolio </a>
				<a href='https://github.com/nordend4000'>Git Hub </a>
				<a href='https://www.linkedin.com/in/romain-gioux/'>Linkedin </a>
				<a href='https://romaingioux.dev/contact'>romaingiouxdev@gmail.com </a>
			</div>
		</>
	)
}

export default App
