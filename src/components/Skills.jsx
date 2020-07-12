import React from 'react';
import NewCharSkill from './NewCharSkill'
import NewCharSkillInner from './NewCharSkillInner'
import {Link} from "react-router-dom";

function Skills (){

return (
    <div className="skills">
        <span className="ability_name"><h3>SKILLS<Link className="anchor" name="skills"></Link></h3></span>
        <span className="field_title larger">SKILL NAMES</span>
        <span className="field_title">TOTAL<br/>BONUS</span>
        <span className="field_title">ABILITY<br/>MOD.</span>
        <span className="field_title">RANKS</span>
        <span className="field_title">MISC.<br/>MOD.</span>
        <NewCharSkill skillName="Acrobatics" skillAttr = "DEX"/>
        <NewCharSkill skillName="Appraise" skillAttr = "INT"/>
        <NewCharSkill skillName="Bluff" skillAttr = "CHA"/>
        <NewCharSkill skillName="Climb" skillAttr = "STR"/>
        <NewCharSkillInner skillName="Craft" skillAttr = "INT"/>
        <NewCharSkillInner skillName="Craft" skillAttr = "INT"/>
        <NewCharSkillInner skillName="Craft" skillAttr = "INT"/>
        <NewCharSkill skillName="Diplomacy" skillAttr = "CHA"/>
        <NewCharSkill skillName="Disable Device" skillAttr = "DEX"/>
        <NewCharSkill skillName="Disguise *" skillAttr = "CHA"/>
        <NewCharSkill skillName="Escape Artist" skillAttr = "DEX"/>
        <NewCharSkill skillName="Fly" skillAttr = "DEX"/>
        <NewCharSkill skillName="Handle Animal *" skillAttr = "CHA"/>
        <NewCharSkill skillName="Heal" skillAttr = "WIS"/>
        <NewCharSkill skillName="Intimidate" skillAttr = "CHA"/>
        <NewCharSkill skillName="Knowledge (arcana)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (dungeoneering)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (engineering)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (geography)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (history)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (nature)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (nobility)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (planes)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Knowledge (religion)*" skillAttr = "INT"/>
        <NewCharSkill skillName="Linguistics*" skillAttr = "INT"/>
        <NewCharSkill skillName="Perception" skillAttr = "WIS"/>
        <NewCharSkillInner skillName="Perform" skillAttr = "CHA"/>
        <NewCharSkillInner skillName="Perform" skillAttr = "CHA"/>
        <NewCharSkillInner skillName="Profession*" skillAttr = "WIS"/>
        <NewCharSkillInner skillName="Profession*" skillAttr = "WIS"/>
        <NewCharSkill skillName="Ride" skillAttr = "DEX"/>
        <NewCharSkill skillName="Sense Motive" skillAttr = "WIS"/>
        <NewCharSkill skillName="Sleight of Hand*" skillAttr = "DEX"/>
        <NewCharSkill skillName="Spellcraft*" skillAttr = "INT"/>
        <NewCharSkill skillName="Stealth" skillAttr = "DEX"/>
        <NewCharSkill skillName="Survival" skillAttr = "WIS"/>
        <NewCharSkill skillName="Swim" skillAttr = "STR"/>
        <NewCharSkill skillName="Use Magic Device*" skillAttr = "CHA"/> 
    </div>
    
);
}
export default Skills;
