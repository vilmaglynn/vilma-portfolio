
import React from 'react';

import styles from "./Home.module.css"
import { getImageUrl } from "../../utils"


const Home = () => {
	return (
		<div className={`hero-section container ${styles.container}`}>
			<div className="row align-items-center">
				{/* Text on the left */}
				<div className="col-md-6">
					<div >
						<h1 className={`display-4 ${styles.title}`}>Hello, I'm <span className={styles.titleName}>Vilma Hernandez</span></h1>
						<p className={`lead ${styles.description}`}>Frontend Software Developer -Javascript and React enthusiast 🔆</p>
						<a href="mailto:@gmail.com" className={styles.contactBtn}></a>
					</div>
				</div>
				{/* Image on the right */}
				<div className="col-md-6">
					<img src={getImageUrl("Avatar2.png")} alt="Hero Image" className={`img-fluid hero-image rounded-circle ${styles.heroImg}`} />
				</div>
			</div>
		</div>
	);
}

export default Home;
