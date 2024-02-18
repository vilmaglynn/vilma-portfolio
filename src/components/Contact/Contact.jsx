import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from "./Contact.module.css"

const Contact = () => {
	return (
		<div className="contact-section">
			<h2>Contact</h2>
			<ul className="contact-list">
				<li>
					<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</li>
				<li>
					<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</li>
			</ul>
			<div className="container">
				<h3>Contact Form</h3>
				<form className={styles.smallerForm}> {/* Add the custom class */}
					<div className="mb-3">
						<label htmlFor="name" className="form-label">Name</label>
						<input type="text" className="form-control" id="name" />
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="email" className="form-control" id="email" />
					</div>
					<div className="mb-3">
						<label htmlFor="message" className="form-label">Message</label>
						<textarea className="form-control" id="message" rows="3"></textarea>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
