
import React from 'react';

import styles from "./Home.module.css"
import { getImageUrl } from "../../utils"

const Home = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hello, I'm Vilma</h1>
				<p className={styles.description}>Frontend Software Developer: A Javascript and React enthusiast 🔆</p>
				<a href="mailto:@gmail.com" className={styles.contactBtn}></a>
			</div>
			<img src={getImageUrl("Avatar2.png")} alt="" className={styles.heroImg} />
			<div className={styles.topBlur}></div>
			<div className={styles.bottomBlur}></div>
		</section>
	);
}

export default Home;
