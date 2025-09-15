import React from "react";
import './Exploring.css';
import exploreImage from '../assets/image (3).png';


const Exploring = () =>{
    return(
        <div className="milestones">
            <h1>Our Milestones <br /> & Achievements</h1>


            <div className="Achievements">
                <div className="Achievements1">
                    <h1><span>01</span>Top 3 Global Shipping Company</h1>
                    <p>Recognized as one of the world's largest integrated logistics providers by container volume and global presence.</p>
                </div>

                <div className="Achievements1">
                    <h1><span>02</span>Smart Logistics Pioneer</h1>
                    <p>Among the first to implement Ai-driven route optimization and blockchain-enable cargo tracking</p>
                </div>

                <div className="Achievements1">
                    <img src={exploreImage} alt="" />
                </div>

                <div className="Achievements1">
                    <h1><span>03</span>21Million+ TEUs Handled Annually</h1>
                    <p>Efficiency moving millions of containers across borders, fueling international trade.</p>
                </div>

                <div className="Achievements1">
                    <h1><span>04</span>Sustainability Leadership</h1>
                    <p>Awarded for green shipping intiatives and fleet upgrades aimed at reducing carbon emissions.</p>
                </div>
            </div>


            <div className="questions">
                <h1>Still have questions <br /> We've got answers.</h1>

                <div className="questions_content">
                    <h1><span>01</span>What types of cargo does COSCO handle?</h1>
                    <p>We handle a wide range of cargo including containerized goods, bulk commodities, refrigerated items, oversized machinery, and dangerous goods — all with industry-standard compliance.</p>
                </div>
                <hr />
                <div className="questions_content">
                    <h1><span>02</span>Does COSCO offer air freight in addition to sea logistics?</h1>
                </div>
                <hr />
                <div className="questions_content">
                    <h1><span>03</span>How can I track my shipment?</h1>
                </div>
                <hr />
                <div className="questions_content">
                    <h1><span>04</span>Is customs clearance included in your service?</h1>
                </div>
                <hr />
                <div className="questions_content">
                    <h1><span>05</span>What are the payment options available for shipping?</h1>
                </div>
            </div>

            <h3>View More</h3>
        </div>


    );
};
export default Exploring;