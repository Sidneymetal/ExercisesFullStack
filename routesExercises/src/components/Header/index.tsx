import { Link } from 'react-router-dom'
import './home.css'

function Header () {
    return (
        <div>
            <h1>Meu Site</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
            </div>
        </div>
    )
}

export default Header