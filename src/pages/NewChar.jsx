import React from 'react';
import {Link} from "react-router-dom";
import '../styles/NewChar.css';
import Skills from '../components/Skills'

function NewChar (){

    return (
        <div id="character_sheet_wrapper">   
            <header id="character_sheet_details">
                <section>
                    <img src="./img/pathfinder-logo-png.png" alt="Copyright Paizo.com"/>
                    <h1>Character Sheet<Link to="#" className="anchor" name="char_details"></Link></h1>
                </section>
                <div className="char_details">
                    <div style={{gridColumn : 'span 3'}}><input type="text" name="Character Name" id="char_name"/>Character Name</div>
                    <div className="span_col2"><input type="text" name="" id="char_alignment"/>Alignment</div>
                    <div style={{gridColumn : 'span 4'}}><input type="text" name="" id="player_name"/>Player</div>
                    <div style={{gridColumn : 'span 5'}}><input type="text" name="" id="char_lvl"/>Character Level</div>
                    <div className="span_col2"><input type="text" name="" id="char_deity"/>Deity</div>
                    <div className="span_col2"><input type="text" name="" id="char_homeland"/>Homeland</div>
                    <div className="span_col2"><input type="text" name="" id="char_race"/>Race</div>
                    <div><input type="text" name="" id="char_size"/>Size</div>
                    <div><input type="text" name="" id="char_gender"/>Gender</div>
                    <div><input type="text" name="" id="char_age"/>Age</div>
                    <div><input type="text" name="" id="char_height"/>Height</div>
                    <div><input type="text" name="" id="char_weight"/>Weight</div>
                    <div><input type="text" name="" id="char_hair"/>Hair</div>
                    <div><input type="text" name="" id="char_eyes"/>Eyes</div>
                </div>
            </header>
            <section className="sheet_left char_stats">
                <div className="stat_grid">
                    <span className="field_title">ABILITY NAME</span>
                    <span className="field_title">ABILITY<br/>SCORE</span>
                    <span className="field_title">ABILITY<br/>MODIFIER</span>
                    <span className="field_title">TEMP<br/>ADJUSTMENT</span>
                    <span className="field_title">TEMP<br/>MODIFIER</span>
                    <span className="ability_name"><strong>STR</strong>STRENGHT</span>
                    <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
                    <span className="ability_name"><strong>DEX</strong>DEXTERITY</span>
                    <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
                    <span className="ability_name"><strong>CON</strong>CONSTITUTION</span>
                    <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
                    <span className="ability_name"><strong>INT</strong>INTELLIGENCE</span>
                    <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
                    <span className="ability_name"><strong>WIS</strong>WISDOM</span>
                    <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
                    <span className="ability_name"><strong>CHA</strong>CHARISMA</span>
                    <input type="text"/><input type="text"/><input type="text"/><input type="text"/>
                </div>
                <div className="hp_cont">
                    <span className="ability_name"><strong>HP</strong>HIT POINTS</span>
                    <div>
                        <em className="inside_title">TOTAL</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <div>
                        <em className="inside_title">DR</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <span className="field_title">WOUNDS/CURRENT HP</span>
                    <textarea name="" id=""></textarea>
                    <span className="field_title">NONLETHAL DAMAGE</span>
                    <input type="text" name="" id=""/>
                </div>
                <div className="init_cont">   
                    <span className="ability_name"><strong>INITIATIVE</strong>MODIFIER</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="field_title">TOTAL</span>
                    <span className="field_title">DEX MODIFIER</span>
                    <span className="field_title">MISC MODIFIER</span>
                </div>
                <div className="ac">
                    <span className="ability_name"><h3>AC<Link to="/NewCharacter" className="anchor" name="ac"></Link></h3>ARMOR CLASS</span>
                    <input className="total" type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <span className="gap_symbol larger">10</span>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <div className="field_title"></div>
                    <span className="field_title">TOTAL</span>
                    <div className="field_title span_col3"></div>
                    <span className="field_title">ARMOR<br/>BONUS</span>
                    <span className="field_title span_col3">SHIELD<br/>BONUS</span>
                    <span className="field_title ">DEX<br/>BONUS</span>
                    <span className="field_title span_col3">SIZE<br/>MODIFIER</span>
                    <span className="field_title ">NATURAL<br/>ARMOR</span>
                    <span className="field_title span_col3">DEFLECTION<br/>MODIFIER</span>
                    <span className="field_title">MISC<br/>MODIFIER</span>
                </div>
                <div className="touch">
                    <span className="ability_name"><strong>TOUCH</strong>ARMOR CLASS</span>
                    <input type="text" name="" id=""/>
                    <span className="ability_name"><strong>FLAT-FOOTED</strong>ARMOR CLASS</span>
                    <input type="text" name="" id=""/>
                    <div>
                        <input type="text" name="" id=""/>
                        <em className="inside_title">MODIFIERS</em>
                    </div>
                </div>
                <div className="save">
                    <h3 className="field_title span_col3">SAVING THROWS<Link to="/NewCharacter" className="anchor" name="base_saves"></Link></h3>
                    <span className="field_title">TOTALS</span>
                    <span className="field_title span_col3">BASE<br/>SAVE</span>
                    <span className="field_title">ABBILITY<br/>MODIFIER</span>
                    <span className="field_title span_col3">MAGIC<br/>MODIFIER</span>
                    <span className="field_title">MISC<br/>MODIFIER</span>
                    <span className="field_title span_col3">TEMPORARY<br/>MODIFIER</span>
                    <div><em className="inside_title">MODIFIERS</em><textarea></textarea></div>
                    <span className="ability_name span_col3"><strong>FORTITUDE</strong>(CONSTITUTION)</span>
                    <input className="total"  type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="ability_name span_col3"><strong>REFLEXES</strong>(DEXTERITY)</span>
                    <input className="total" type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="ability_name span_col3"><strong>WILLPOWER</strong>(WISDOM)</span>
                    <input className="total"  type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                </div>
                <div className="bab">
                    <span className="ability_name span_col3"><h3>BASE ATTACK BONUS<Link to="/NewCharacter" className="anchor" name="bab"></Link></h3></span>
                    <input className="total span_col3" type="text" name="" id=""/>
                    <span className="ability_name"><strong>SPELL<br/>RESISTANCE</strong></span>
                    <input className="total span_col2" type="text" name="" id=""/>
                    <span className="ability_name span_row2"><strong>CMB</strong></span>
                    <input className="total" type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <div className="span_row2"><em className="inside_title">MODIFIERS</em><textarea></textarea></div>
                    <span className="field_title">TOTAL</span>
                    <span className="field_title span_col3">BASE ATTACK<br/>BONUS</span>
                    <span className="field_title">STRENGHT<br/>MODIFIER</span>
                    <span className="field_title span_col2">SIZE<br/>MODIFIER</span>
                    <span className="ability_name span_row2"><strong>CMD</strong></span>
                    <input className="total" type="text" name="" id=""/>
                    <span className="gap_symbol">=</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <input type="text" name="" id=""/>
                    <span className="gap_symbol">+</span>
                    <span className="gap_symbol larger">10</span>
                    <span className="field_title">TOTAL</span>
                    <span className="field_title span_col3">BASE ATTACK<br/>BONUS</span>
                    <span className="field_title">STRENGHT<br/>MODIFIER</span>
                    <span className="field_title span_col3">DEXTERITY<br/>MODIFIER</span>
                    <span className="field_title">SIZE<br/>MODIFIER</span>
                </div>
            </section>
            <section className="sheet_right">
                <div className="speed">
                    <span className="ability_name"><h3>SPEED<Link  to="/NewCharacter"  className="anchor" name="speed"></Link></h3>LAND</span>
                    <div className="span_col2">
                        <em className="inside_title inside_middle">FT.</em>
                        <em className="inside_title">SQ.</em>
                        <input className="total" type="text" name="" id=""/>
                    </div>
                    <div className="span_col2">
                        <em className="inside_title inside_middle">FT.</em>
                        <em className="inside_title">SQ.</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="span_row3">
                        <em className="inside_title">TEMP MODIFIERS</em>
                        <textarea></textarea>
                    </div>
                    <div></div>
                    <span className="field_title span_col2">BASE SPEED</span>
                    <span className="field_title span_col2">WITH ARMOR</span>
                    <div className="span_col2">
                        <em className="inside_title">FT.</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <div>
                        <em className="inside_title">FT.</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <div>
                        <em className="inside_title">FT.</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <div>
                        <em className="inside_title">FT.</em>
                        <input type="text" name="" id=""/>
                    </div>
                    <span className="field_title">FLY</span>
                    <span className="field_title">MANEUVERABILITY</span>
                    <span className="field_title">SWIM</span>
                    <span className="field_title">CLIMB</span>
                    <span className="field_title">BURROW</span>
                </div>
                <Skills/>
            </section>
    </div>
     );
    }
    
    export default NewChar;