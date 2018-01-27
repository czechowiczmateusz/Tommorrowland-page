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
                    <h1>2017</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus, eius in libero velit veniam. Aperiam architecto, distinctio, est et expedita fuga harum id incidunt minima odio pariatur qui voluptas?
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam quasi reiciendis reprehenderit vel voluptatibus. Ad aspernatur autem, dolorem, explicabo facilis libero non officia porro praesentium recusandae, sapiente sequi ullam.
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consectetur consequatur dicta dolore earum fuga illo impedit modi, placeat praesentium quasi, quo, rem saepe sit sunt suscipit tenetur.
                    </p>
                </div>
            </section>
            <section className="twokseventeen">
                <div className="container"></div>
            </section>
            <section className="articles">
                <div className="container">
                    <h1>2016</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus, eius in libero velit veniam. Aperiam architecto, distinctio, est et expedita fuga harum id incidunt minima odio pariatur qui voluptas?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam quasi reiciendis reprehenderit vel voluptatibus. Ad aspernatur autem, dolorem, explicabo facilis libero non officia porro praesentium recusandae, sapiente sequi ullam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consectetur consequatur dicta dolore earum fuga illo impedit modi, placeat praesentium quasi, quo, rem saepe sit sunt suscipit tenetur.
                    </p>
                </div>
            </section>
            <section className="twoksixteen">
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