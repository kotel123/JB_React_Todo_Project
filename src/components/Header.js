import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../images/LogoMakr.png'


  
export function Header() {
	
	return (
		<AppBar position="static">
        	<Toolbar className="d-flex justify-content-between">
				<Avatar alt="Logo" src={Logo} />
				<nav className="navbar navbar-expand-lg navbar-light">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active text-white" href="/">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/about">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="/todo">Todo List</a>
						</li>
					</ul>
				</nav>
			</Toolbar>
		</AppBar>
			
			/* header className="navbar bg-light d-flex justify-content-between">
			<img src="LogoMakr.png" height="100" />
			<nav className="navbar navbar-expand-lg navbar-light">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/todo">Todo List</a>
					</li>
				</ul>
			</nav> 
		</header>*/
	)
}
