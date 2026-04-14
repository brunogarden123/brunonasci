import {Link, Links} from 'react-router-dom'
function Menu() {
    return (
        <div>
            <menu className="horiz">
                <li><Link to='/'>Home</Link></li>
            </menu>
        </div>
    )
}
export default Menu;