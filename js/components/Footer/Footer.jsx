import React from 'react';

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div className="container">
                    <form>
                        <h2>Contact us</h2>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Phone"/>
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        <input type="submit" value="Submit" disabled/>
                    </form>
                    <ul>
                        <li><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</li>
                        <li><i className="fa fa-instagram" aria-hidden="true"></i>Instagram</li>
                        <li><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer
