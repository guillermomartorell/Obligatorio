import React from 'react';
import { Link } from "react-router-dom";

//Props are:  bigImg = "" backImg = "" portImg = "" charName = "" lvl = "" race = "" class = "" campaignName = "" 

function CharCard (props){
    return (
    <li className="char_card_wrap">
        <div className="char_card" style={{backgroundImage: "url(" + props.backImg + ")"}}>
            <div className="char_card_header">
                <Link to="/NewCharacter"><img src={props.bigImg} alt="" className="hid_big"/></Link>
                <div><img src={props.portImg} alt=""/></div>
                <div>
                    <h3>{props.charName}</h3>
                    <span>Lvl {props.lvl} | {props.race} | {props.class}</span>
                </div>
            </div>
            <div className="campaign_link">
                <strong>Campaign:</strong>
                <Link to="#">{props.campaignName}</Link>    
                <Link className="red_highlight" to="#"><strong>Leave Campaign</strong></Link>
            </div>
            <div className="card_footer">
                <ul>
                    <li><Link to='/NewCharacter'><strong>View</strong></Link></li>
                    <li><Link to='/NewCharacter'><strong>Edit</strong></Link></li>
                    <li><Link to="/CharacterSelection#"><strong>Copy</strong></Link></li>
                    <li><Link to="/CharacterSelection#" className="red_highlight" href="#"><strong>Delete</strong></Link></li>
                </ul>
            </div>
        </div>
    </li>
    
    );
}

export default CharCard;