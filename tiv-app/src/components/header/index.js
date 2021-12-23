import React, { useState, useEffect } from 'react';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		document.body.classList.toggle('sidebar-icon-only', isOpen);
	}, [isOpen])

	return (
		<nav className="navbar p-0 fixed-top d-flex flex-row">
			<div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
				<a className="navbar-brand brand-logo-mini" href="/">
					TIV
				</a>
			</div>
			<div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
					<span className="mdi mdi-menu"></span>
				</button>
				<ul className="navbar-nav w-100">
					<li className="nav-item w-100">
						<form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
							<input type="text" className="form-control" placeholder="Search products" />
						</form>
					</li>
				</ul>

				<button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
					data-toggle="offcanvas">
					<span className="mdi mdi-format-line-spacing"></span>
				</button>
			</div>
		</nav>
	)

}

export default Header;
