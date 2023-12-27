import'../Styles/Nav.css';
function Navbar() {
    return ( 
        <div >
            <nav>
                <ul className="Nav">
                    <li className='Li'>Home</li>
                    <li className='Li'>About</li>
                    <li className='Li'>Contact</li>
                    <li className='Li'>Resume</li>
                </ul>
                <ul>
                </ul>
            </nav>
        </div>
     );
}

export default Navbar;