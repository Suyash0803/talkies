import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box">
                <ul className="flex">
                    <li>Terms & Condition</li>
                    <li>Privacy Policies</li>
                    <li>Watch List</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
                <p>Reserved rights apply.All connected graphics and content, as well as all films and shows on this platform, are trademarks of Phoenix Inc.This cannot be copied or duplicated in any way.</p>
            </div>
            <div className="box">
                <h3>Follow Us</h3>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="box">
                <h3>Phoenix App</h3>
                {/* <div className="img flexSB"></div> */}
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer