import React from 'react';

class Gallery extends React.Component {
    render() {
        return (
            <section className="slider">
                <div className="container">
                    <img src={require('./../../../styles/images/gallery1.jpg')}/>
                    <img src={require('./../../../styles/images/gallery2.jpg')}/>
                    <img src={require('./../../../styles/images/gallery3.jpg')}/>
                </div>
            </section>
        );
    }
}

export default Gallery
