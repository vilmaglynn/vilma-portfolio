import React from 'react';
import experienceData from '../../data/experiences.json';
import styles from "./Experience.module.css"


const Experience = () => {
	return (
		<div className={styles.experience}>
			<h2>Experience</h2>
			<div className={styles.experiencelist}>
				{experienceData.map((item) => (
					<div className={styles.experienceitem} key={item.id}>
						<h3>{item.title}</h3>
						<p>{item.company}</p>
						<p>{item.location}</p>
						<p>{item.startDate} - {item.endDate}</p>
						<p>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
