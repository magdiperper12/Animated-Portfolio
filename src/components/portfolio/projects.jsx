import './project.css';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Project = ({ name, desc, image, live, github }) => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-200px' });

	const listVariant = {
		initial: {
			x: 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				staggerChildren: 0.4,
			},
		},
	};

	return (
		<motion.div
			className='project'
			ref={ref}
			variants={listVariant}
			initial='initial'
			animate={isInView ? 'animate' : 'initial'}>
			<motion.img
				src={image}
				variants={listVariant}
			/>
			<motion.div
				className='desc'
				variants={listVariant}
				initial='initial'
				animate={isInView ? 'animate' : 'initial'}>
				<motion.h1 variants={listVariant}>{name}</motion.h1>
				<motion.p variants={listVariant}>{desc}</motion.p>
				<motion.div
					variants={listVariant}
					className='btn'>
					<motion.a
						className='anchor'
						href={live}
						variants={listVariant}>
						Live
					</motion.a>
					<motion.a
						className='anchor'
						href={github}
						variants={listVariant}>
						GitHub
					</motion.a>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Project;
