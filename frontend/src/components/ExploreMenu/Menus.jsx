import React from 'react'
import '../../css/Menus.css'
import { menu_list } from '../../assets/assets'

const Menus = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iusto, explicabo. Quia quis exercitationem non
                fugiat, quasi explicabo, repudiandae
                dicta sit tempora tempore quas, f
                acilis eos dolorum hic ducimus porro nobis!
            </p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-item'>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Menus
