import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Contact = () => {
	return (
		<section id="contact" className="container mt-5">
			<div className="row">
				<div className="col-lg-6">
					<div className={styles.text}>
						<h2>Contact</h2>
						<p>Feel free to reach out!</p>
					</div>
					<ul className={styles.links}>
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
						<li className={styles.link}>
							<FontAwesomeIcon icon="fa-solid fa-phone" className={styles.icon} />
							<a href="tel:+1234567890">123-456-7890</a>
						</li>
						<li className={styles.link}>
							<FontAwesomeIcon icon="fa-solid fa-file-pdf" className={styles.icon} />
							<a href="/path/to/resume.pdf" download>Download Resume</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-6">
					<div className="row">
						<div className="col-lg-12 mx-auto" style={{ maxWidth: '500px' }}>
							<h2 className="mt-5">Send me a message</h2>
							<form>
								<div className="mb-3">
									<label htmlFor="name" className="form-label">Name:</label>
									<input type="text" className="form-control" id="name" name="name" required />
								</div>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">Email:</label>
									<input type="email" className="form-control" id="email" name="email" required />
								</div>
								<div className="mb-3">
									<label htmlFor="message" className="form-label">Message:</label>
									<textarea className="form-control" id="message" name="message" rows="4" required></textarea>
								</div>
								<button type="submit" className={`btn btn-primary ${styles.submitButton}`}>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
