import React from 'react'
import { sidebarLinks } from './sidebar-const'
import { Link } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
  return (
		<div className='sidebar'>
			<div className='sidebar-container'>
				<header>
					{/* <Logo /> */}
				</header>
				<div className='links'>
					{sidebarLinks.map((link) => 
						<Link key={link.id} to={link.url} className='link-item'>
							<span className='link-icon'>{link.icon}</span>
							{link.title}
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default Sidebar