import {Link, Links} from 'react-router-dom'
function Menu() {
    return (
        <div>
            <menu className="horiz">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/info/contacts'>Contatos</Link></li>
            </menu>
        </div>
    )
}
export default Menu;