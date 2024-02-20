import React from 'react';
import experienceData from '../../data/experiences.json';
import styles from "./Experience.module.css"


const Experience = () => {
	return (
		<div className="container">
			<section className="mt-5 mb-5">
				<div className={styles.experience}>
					<h2 className="text-center">Experience</h2>
					<div className={styles.experiencelist}>
						{experienceData.map((item) => {
							// Parse startDate and endDate as Date objects
							const startDate = new Date(item.startDate);
							const endDate = item.endDate === 'present' ? new Date() : new Date(item.endDate);

							// Format the dates
							const formattedStartDate = startDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
							const formattedEndDate = item.endDate === 'present' ? 'Present' : endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

							return (
								<div className={styles.experienceitem} key={item.id}>
									<div className={styles.date}>{formattedStartDate} - {formattedEndDate}  </div>
									<hr></hr>
									<div className={styles.content}>
										<h3>{item.title}</h3>
										<p>{item.location}</p>
										<p>{item.company}</p>
										<p>{item.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Experience;
