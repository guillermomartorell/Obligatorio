import React from 'react';
import { Link } from "react-router-dom";
import { Select } from 'antd';
import CharCard from '../components/CharCard';
import '../styles/CharSel.css';
import { Input } from 'antd';

function CharSel() {
    const { Search } = Input;
    const { Option } = Select;
    return (

        <div id="my_character_wrapper">
            <nav className="breadcrumbs">
                <ul>
                    <li><Link to='/' className="home"></Link></li>
                    <li className="bread">-</li>
                    <li><Link to='/CharacterSelection'>Peche's World</Link></li>
                    <li className="bread">-</li>
                    <li><Link to='#' className="active" >My Characters</Link></li>
                    <li className="last"><Link to='/NewChar' className="new_sheet">CREATE A CHARACTER</Link></li>
                </ul>
            </nav>
            <header>
                <h1>My Characters</h1>
                <h2>Nº of Character: 6</h2>
                <div className="filter_search">
                    <Search size="large" prefix="🍎" placeholder="Search by Name, Class, Race or Campaign" />
                    <div className="filter_sort">
                        <label htmlFor="">Sort By</label>
                        <Select defaultValue="Created: Newest" style={{ width: 150 }}>
                            <Option value="Created: Newest">Created: Newest</Option>
                            <Option value="Created: Oldest">Created: Oldest</Option>
                            <Option value="Name: A to Z">Name: A to Z</Option>
                            <Option value="Name: Z to A">Name: Z to A</Option>
                            <Option value="Level: Low to High">Level: Low to High</Option>
                            <Option value="Level: Hight to Low">Level: Hight to Low</Option>
                        </Select>
                    </div>
                </div>
            </header>
            <main>
                <ul className="card_holder">
                    <CharCard
                        bigImg="./img/aratBig.png"
                        portImg="./img/aratPort.jpg"
                        backImg="./img/aratBack.png"
                        charName="Arat"
                        lvl="13"
                        race="Elf"
                        class="Exploiter Pact Wizard"
                        campaignName="Peche's World"
                    />
                    <CharCard
                        bigImg="./img/bacBig.png"
                        portImg="./img/bacPort.jpg"
                        backImg="./img/bacBack.jpg"
                        charName="Bacchus"
                        lvl="13"
                        race="Half-elf"
                        class="Bard"
                        campaignName="Peche's World"
                    />
                    <CharCard
                        bigImg="./img/jenBig.png"
                        portImg="./img/jenPort.png"
                        backImg="./img/jenBck.jpg"
                        charName="Jenth'ael"
                        lvl="13"
                        race="Elf"
                        class="Rogue"
                        campaignName="Peche's World"
                    />
                    <CharCard
                        bigImg="./img/kyleBig.png"
                        portImg="./img/kylePort.jpg"
                        backImg="./img/kyleBack.jpg"
                        charName="Kyle"
                        lvl="13"
                        race="Elf"
                        class="Cleric of Calistria"
                        campaignName="Peche's World"
                    />
                    <CharCard
                        bigImg="./img/elaBig.png"
                        portImg="./img/elaPort.png"
                        backImg="./img/elaBack.jpg"
                        charName="Elhamir"
                        lvl="9"
                        race="Elf"
                        class="Ranger"
                        campaignName="Peche's World"
                    />
                    <CharCard
                        bigImg="./img/azrBig.png"
                        portImg="./img/azrPort.png"
                        backImg="./img/azBack.jpg"
                        charName="Azrael"
                        lvl="6"
                        race="Aasimar"
                        class="Paladin of Iomedae"
                        campaignName="Peche's World"
                    />
                </ul>
            </main>
        </div>

    );
}

export default CharSel;