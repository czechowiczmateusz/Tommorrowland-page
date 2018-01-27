import React from "react";
import ReactDOM from "react-dom";
require('.././styles/style.scss');

class App extends React.Component {
    render(){
        return <div>
            <section>
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