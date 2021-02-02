import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/signup'>Signup</NavLink>
			</li>
			<li>
				<NavLink to='/signin'>LogIn</NavLink>
			</li>
		</ul>
	);
};

export default SignedOutLinks;