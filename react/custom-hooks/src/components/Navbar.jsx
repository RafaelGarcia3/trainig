import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar(){
    return(
        <nav>
            <Link className='link' to='/'> Home </Link>
            <Link className='link' to='/example1'> Example 1: Screen Size </Link>
            <Link className='link' to='/example2'> Example 2: Counter </Link>
        </nav>
    );
}