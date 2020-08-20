import React from 'react'
import './content.styles.css'
import BackgroundImage from '../../assets/images/badminton2.jpg'

const Content=()=>{
    return(
        <div className = 'main-content container-fluid'>
            
            <h1>TM BADMINTON CLUB</h1>

            <div className = 'row intro'>
                <div className = 'col-md-6 bg-image-div'>
                    <img src={BackgroundImage} alt="coverimage"/>
                </div>
                <div className = 'col-md-6 profile'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores ratione totam nobis, ipsam mollitia molestiae! Explicabo quibusdam iusto modi, omnis provident, veniam eaque ipsum nostrum iste nulla nihil delectus.</p>
                </div>
            </div>

            <section id="membershipSection">
                <h2>Membership Plans</h2>

                <div className="card-deck">

                <div className="wrapper">
                <div className="card">
                    <div className="card-body text-center">
                    <h3>Regular</h3>
                    <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5d249fd92758aea11a3619cb_Journey_London_Membership_Icons_Flex2.svg" width="100" alt=""/>
                    <div className="membership_price"><span className="text-span">£ 49.99</span> / month</div>
                    <p className="card-text">Features</p>
                    <ul>
                        <li>feature 1</li>
                        <li>feature 2</li>
                        <li>feature 3</li>
                    </ul>
                    <button className= "btn" type="submit">Register</button>
                    </div>
                </div>
                </div>

                <div className="wrapper">
                <div className="card">
                    <div className="card-body text-center">
                    <h3>Premium</h3>
                    <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5d24671b60878d89eb577633_Journey_London_Membership_Icons_AA1.svg" width="100" alt=""/>
                    <div className="membership_price"><span className="text-span">£ 99.99</span> / month</div>
                    <p className="card-text">Features</p>
                    <ul>
                        <li>feature 1</li>
                        <li>feature 2</li>
                        <li>feature 3</li>
                    </ul>
                    <button className= "btn" type="submit">Register</button>
                    </div>
                    </div>
                </div>
                <div className="wrapper">
                <div className="card">
                    <div className="card-body text-center">
                    <h3>Platinum</h3>
                    <img src="https://uploads-ssl.webflow.com/5d1dfaf3fdd1ef7aa068c605/5d249fa33c6cae50d209667d_Journey_London_Membership_Icons_OP3.svg" width="100" alt=""/>
                    <div className="membership_price"><span className="text-span">£ 199.99</span> / month</div>
                    <p className="card-text">Features</p>
                    <ul>
                        <li>feature 1</li>
                        <li>feature 2</li>
                        <li>feature 3</li>
                    </ul>
                    
                    <button className= "btn" type="submit">Register</button>
                    </div>
                </div>
                </div>
                </div>

            </section>

        </div>
    )
}

export default Content;