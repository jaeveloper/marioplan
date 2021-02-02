import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './index.css';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/Navbar';
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';

const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Dashboard}></Route>
					<Route path='/project/:id' component={ProjectDetails}></Route>
					<Route path='/signin' component={SignIn}></Route>
					<Route path='/signup' component={SignUp}></Route>
					<Route path='/create' component={CreateProject}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
