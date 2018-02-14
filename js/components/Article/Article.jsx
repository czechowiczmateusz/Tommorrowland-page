import React from 'react';

class Article extends React.Component {
    render(){
        AOS.init();
        return (
            <section className="articles">
                <div className="container" data-aos="fade-down">
                    <h1>{this.props.years}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus, eius in libero velit veniam. Aperiam architecto, distinctio, est et expedita fuga harum id incidunt minima odio pariatur qui voluptas?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam quasi reiciendis reprehenderit vel voluptatibus. Ad aspernatur autem, dolorem, explicabo facilis libero non officia porro praesentium recusandae, sapiente sequi ullam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut consectetur consequatur dicta dolore earum fuga illo impedit modi, placeat praesentium quasi, quo, rem saepe sit sunt suscipit tenetur.
                    </p>
                </div>
            </section>
        )
    }
}

export default Article
