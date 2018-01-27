import React from "react";
import ReactDOM from "react-dom";
require('.././styles/style.scss');

class App extends React.Component {
    render(){
        return <div>
            <header>
                <div className="container">
                    <h1>Tommorrowland</h1>
                    <ul>
                        <li>About</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </header>
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