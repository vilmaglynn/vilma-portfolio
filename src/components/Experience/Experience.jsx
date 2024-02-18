import React from 'react';
import experiencesData from '../../data/experiences.json';
import styles from "./Experience.module.css"

const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const Experience = () => {
	return (
		<div className={styles.experience}>
			{experiencesData.map((experience) => (
				<div key={experience.id} className={styles.experienceitem}>
					<div className={styles.experiencedate}>
						<span>{formatDate(experience.startDate)}</span>
						<span> - </span>
						<span>{formatDate(experience.endDate)}</span>
					</div>
					<div className={styles.experienceinfo}>
						<h3>{experience.title}</h3>
						<h4>{experience.company}</h4>
						<p>{experience.location}</p>
						<p>{experience.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Experience;
