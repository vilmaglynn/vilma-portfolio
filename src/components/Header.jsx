// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" to="/">Portfolio</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to="/experience">Experience</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
