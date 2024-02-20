import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
	return (
		<footer id="contact" className={`${styles.body} ${styles.container}`}>
			<div className={styles.text}>
				<h2>Contact</h2>
				<p>Feel free to reach out!</p>
			</div>
			<ul className={styles.links} >
				<li className={styles.link}>
					<FontAwesomeIcon icon="fa-solid fa-envelope" className={styles.icon} />
					<a href="mailto:myemail@email.com">myemail@email.com</a>
				</li>
				<li className={styles.link}>
					<FontAwesomeIcon icon="fa-brands fa-linkedin" className={styles.icon} />
					<a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
				</li>
				<li className={styles.link}>
					<FontAwesomeIcon icon="fa-brands fa-github" className={styles.icon} />
					<a href="https://www.github.com/myname">github.com/myname</a>
				</li>
			</ul>
		</footer>
	);
};

export default Contact;
