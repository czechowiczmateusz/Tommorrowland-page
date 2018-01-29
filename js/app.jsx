import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import AOS from 'aos'
require('.././styles/style.scss');

class SimpleSlider extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="image"><img src="https://starlightpr1.com/upload/blog_image/1516256012_tomorrowland-belgium-atmosphere-2016-billboard-1548.jpg"/></div>
                <div className="image"><img src="https://i.pinimg.com/564x/1d/4c/fd/1d4cfdc27b5db9de7c006d59ab7cb101--tomorrowland--tomorrowland-belgium.jpg"/></div>
                <div className="image"><img src="https://i.pinimg.com/originals/9e/60/08/9e600838a00c4c7d863a3fc47751025d.jpg"/></div>
            </Slider>
        );
    }
}

class App extends React.Component {
    render(){
        AOS.init();
        return <div>
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
            <section className="main">
                <div className="container"></div>
            </section>
            <section className="articles">
                <div className="container" data-aos="fade-down">
                    <h1>2017</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus, eius in libero velit veniam. Aperiam architecto, distinctio, est et expedita fuga harum id incidunt minima odio pariatur qui voluptas?
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam quasi reiciendis reprehenderit vel voluptatibus. Ad aspernatur autem, dolorem, explicabo facilis libero non officia porro praesentium recusandae, sapiente sequi ullam.
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consectetur consequatur dicta dolore earum fuga illo impedit modi, placeat praesentium quasi, quo, rem saepe sit sunt suscipit tenetur.
                    </p>
                </div>
            </section>
            <section className="firstbackground"></section>
            <section className="articles">
                <div className="container" data-aos="fade-down">
                    <h1>2016</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus, eius in libero velit veniam. Aperiam architecto, distinctio, est et expedita fuga harum id incidunt minima odio pariatur qui voluptas?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam quasi reiciendis reprehenderit vel voluptatibus. Ad aspernatur autem, dolorem, explicabo facilis libero non officia porro praesentium recusandae, sapiente sequi ullam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consectetur consequatur dicta dolore earum fuga illo impedit modi, placeat praesentium quasi, quo, rem saepe sit sunt suscipit tenetur.
                    </p>
                </div>
            </section>
            <section className="secondbackground"></section>
            <section className="slider">
                <div className="container">
                    <SimpleSlider></SimpleSlider>
                </div>
            </section>
            <section className="thirdbackground"></section>
            <footer>
                <div className="container">
                <ul>
                    <li><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</li>
                    <li><i className="fa fa-instagram" aria-hidden="true"></i>Twitter</li>
                    <li><i className="fa fa-twitter" aria-hidden="true"></i>Instagram</li>
                </ul>
                </div>
            </footer>
        </div>
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});