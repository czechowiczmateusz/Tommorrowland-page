import React from "react";
import ReactDOM from "react-dom";
require('.././styles/style.scss');

class App extends React.Component {
    render(){
        return <div>
            <header>
                <div className="container">
                    <ul className="left">
                        <img src="https://images.contentful.com/9uj5p2yo1ox0/545FhqlS40mYEegoEOYIcu/487935385221aaf84f25649d9b17c407/TML_ICON_BLACK_OUTLINE.png" />
                        <li>Tommorrowland</li>
                    </ul>
                    <ul className="right">
                        <li>Tickets</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
            <section className="main">
                <div className="container"></div>
            </section>
            <section className="articles">
                <div className="container">

                </div>
            </section>
            <section className="main">
                <div className="container"></div>
            </section>
        </div>
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});