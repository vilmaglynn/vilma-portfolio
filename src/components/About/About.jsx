// About.js
import React from 'react';

const About = () => {
	return (
		<div className="container about-section mt-5">
			<div className="row">
				<div className="col-lg-6">
					<h2>About Me</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna quis nisi ultrices condimentum. Donec eu eros sapien. Integer id dui sit amet est lobortis cursus nec at nulla. Proin a ligula vel felis euismod vulputate.
					</p>
					<p>
						Mauris non ex id leo vestibulum dapibus. Nullam pretium turpis ut massa varius, vel convallis leo tincidunt. Suspendisse vitae ex vitae libero posuere blandit. Nulla venenatis lorem vel odio tincidunt, nec efficitur lorem pharetra.
					</p>
				</div>
				<div className="col-lg-6">
					<img src="https://via.placeholder.com/400" alt="About Me" className="img-fluid about-image" />
				</div>
			</div>
		</div>
	);
}

export default About;
