import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div className="container">
                    <ul>
                        <li><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i>Twitter</li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i>Instagram</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
