import React from 'react';

const Footer = () => (  
    <footer className="page-footer blue-grey lighten-4">
    <div className="container">
        <div className="row">
            <div className="col l6 s12">
                <h5 className="blue-grey-text text-darken-3">About Us</h5>
                <p className="blue-grey-text text-darken-3">The Run Day app was created for every running enthusiast. Registered user can create and manage running events.</p>
            </div>
            <div className="col l3 s12">
                <h5 className="blue-grey-text text-darken-3">SocialMedia</h5>
                <ul>
                    <li><a className="blue-grey-text text-darken-3" href="#!"><i className="fab fa-facebook-square"></i> Faccebook</a></li>
                    <li><a className="blue-grey-text text-darken-3" href="#!"><i className="fab fa-instagram"></i> Instagram</a></li>
                </ul>
            </div>
            <div className="col l3 s12">
                <h5 className="blue-grey-text text-darken-3">Nav links</h5>
                <ul>
                    <li><a className="blue-grey-text text-darken-3" href="#home">Home</a></li>
                    <li><a className="blue-grey-text text-darken-3" href="#functions">Function</a></li>
                    <li><a className="blue-grey-text text-darken-3" href="#team">Team</a></li>
                    <li><a className="blue-grey-text text-darken-3" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  <div className="footer-copyright">
      <div className="container blue-grey-text text-darken-3">
          © Copyright Run Day. Powered by Michał Kozak.
      </div>
  </div>
</footer>
)

export default Footer;