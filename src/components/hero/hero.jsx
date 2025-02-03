import './hero.css';
import { CiDesktopMouse2 } from 'react-icons/ci';
import Speech from './Speech';
import { BsArrowUp } from 'react-icons/bs';
import { motion } from 'motion/react';
const awardsvaraints = {
	initial: { x: -100, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildren: 0.3 },
	},
};
const followvariants = {
	initial: { y: -100, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 1, staggerChildren: 0.3 },
	},
};
function Hero() {
	return (
		<div className='hero'>
			<div className='hSecttion left'>
				{/*title*/}
				<motion.h1
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className='htitle'>
					Hey There, <br />
					<span className='ititle'>I`m Magdi</span>
				</motion.h1>
				{/*awards*/}
				<motion.div
					variants={awardsvaraints}
					initial='initial'
					animate='animate'
					className='awards'>
					<motion.h1 variants={awardsvaraints}>Frontend Developer</motion.h1>
					<motion.p variants={awardsvaraints}>
						Proficient in building scalable, responsive web applications with a
						focus on performance,user experience, and accessibility.
					</motion.p>
					<motion.div
						variants={awardsvaraints}
						className='awardList'>
						<motion.img
							variants={awardsvaraints}
							src='/award1.png'
							alt=''
						/>
						<motion.img
							variants={awardsvaraints}
							src='/award2.png'
							alt=''
						/>
						<motion.img
							variants={awardsvaraints}
							src='/award3.png'
							alt=''
						/>
					</motion.div>
				</motion.div>
				{/*scroll svg*/}
				<motion.div
					animate={{ y: [0, 8], opacity: [0, 1, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
					<CiDesktopMouse2 className='scroll' />
				</motion.div>
			</div>
			<div className='hSecttion right'>
				<motion.div
					className='follow'
					variants={followvariants}
					initial='initial'
					animate='animate'>
					<motion.a
						variants={followvariants}
						href='/'>
						<img
							src='/instagram.png'
							alt=''
						/>
					</motion.a>
					<motion.a
						variants={followvariants}
						href='/'>
						<img
							src='/facebook.png'
							alt=''
						/>
					</motion.a>
					<motion.a
						variants={followvariants}
						href='/'>
						<img
							src='/youtube.png'
							alt=''
						/>
					</motion.a>
					<motion.div
						variants={followvariants}
						className='followtextcontainer'>
						<div className='followtext'>FOLLOW ME</div>
					</motion.div>
				</motion.div>

				{/*Bubble*/}
				<Speech />
				{/*certificate */}
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className='certificate'>
					<img
						src='/certificate.png'
						alt=''
					/>
					LAM CERTIFICATED <br />
					PROFETIONAL <br />
					UI DESIGNER
				</motion.div>
				{/*contact button*/}
				<motion.a
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					href='/#contact'
					className='contactLink'>
					<div className='contactButton'>
						<svg
							viewBox='0 0 200 200'
							width='150'
							height='150'>
							<circle
								cx='100'
								cy='100'
								r='90'
								fill='pink'
							/>
							<path
								id='innerCirclePath'
								fill='none'
								d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
							/>
							<text className='circleText'>
								<textPath href='#innerCirclePath'>Hire Now 🤗</textPath>
							</text>
							<text className='circleText'>
								<textPath
									href='#innerCirclePath '
									startOffset='45%'>
									Contact Me 👍
								</textPath>
							</text>
						</svg>
						<BsArrowUp className='arrow' />
					</div>
				</motion.a>
			</div>
			<div className='bg'>
				{/* 3d */}
				<div className='himg'>
					<img
						src='/hero.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
