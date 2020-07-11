import React from 'react';
import { Link } from "react-router-dom";

//Props are: backImg = "" campName = ""

function CampCard(props) {
    return (
        <li className="char_card_wrap">
            <div className="char_card" style={{ backgroundImage: "url(" + props.backImg + ")" }}>
                <div className="char_card_header">
                    <Link to='/CharacterSelection'></Link>
                    <div>
                        <h3>
                            {props.campName}
                        </h3>
                        <span>N of Characters: {props.nChar}</span>
                    </div>

                </div>
                <div className="card_footer">
                    <ul>
                        <li><Link to='/CharacterSelection'><strong>View</strong></Link></li>
                        <li><Link to='/CharacterSelection'><strong>Edit</strong></Link></li>
                        <li><Link to="/CharacterSelection"><strong>Copy</strong></Link></li>
                        <li><Link to="/CharacterSelection" className="red_highlight" href="#"><strong>Delete</strong></Link></li>
                    </ul>
                </div>
            </div>
        </li>

    );
}

export default CampCard;