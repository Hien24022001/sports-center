import React, { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearStore, toggleSidebar } from '../features/user/userSlice';
import './navbar.css'

function Navbar() {
	const [showLogout, setShowLogout] = useState(false);
	// const { user } = useSelector((state) => state.user);
	// const dispatch = useDispatch();

	return (
		<div className='navbar'>
			{/* <button 
				className='toggle-btn'
				onClick={() => dispatch(toggleSidebar())}
			> 
				<FaAlignLeft /> 
			</button>
			<div>
				<Logo />
				<h3 className='logo-text'>dashboard</h3>
			</div> */}
            <div></div>
			<div className='btn-container'>
				<button onClick={() => setShowLogout(!showLogout)} className='user-btn btn'>
					<FaUserCircle />
					Admin
					<FaCaretDown />
				</button>
				<div className={showLogout ? 'logout show-logout' : 'logout'} >
					<button onClick={() => {}} className='btn'>
						Logout
					</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar