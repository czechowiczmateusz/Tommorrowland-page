import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <header>
                <div className="container">
                    <div className="searchbar">
                        <img src="https://images.contentful.com/9uj5p2yo1ox0/545FhqlS40mYEegoEOYIcu/487935385221aaf84f25649d9b17c407/TML_ICON_BLACK_OUTLINE.png" />
                        <form>
                            <input type="text" placeholder="Search..."/>
                        </form>
                    </div>
                    <ul>
                        <li>Tickets</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
