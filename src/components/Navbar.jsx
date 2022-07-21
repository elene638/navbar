import React from 'react'
import Photo from '../images/logo.svg'
import {links, social} from './data'
import {FaBars, FaTwitter} from 'react-icons/fa'

function Navbar() {
    const [toggle, setToggle] = React.useState(false)
    const linkContainer = React.useRef(null)
    const link = React.useRef(null)

    function handleClick () {
        setToggle(!toggle)
    }

    React.useEffect(() => {
        const linkContainerHeight = link.current.clientHeight

        if(toggle) {
            linkContainer.current.style.height = `${linkContainerHeight}px`
        } else {
            linkContainer.current.style.height = '0px'
        }
        console.log(linkContainerHeight);
    }, [toggle])


  return (
    <nav className='main-navbar'>
        <div className='header'>
            <img src={Photo} alt='logo'/>
            <button className='toggle' onClick={handleClick}><FaBars /></button>
        </div>
        <div className='main-content'>
            <div className='link-container' ref={linkContainer}>
                <ul className='links' ref={link}>
                    {links.map ((link) => {
                        const {id, url, text} = link
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <ul className='icons'>
                {social.map(icons => {
                    const {id, url, icon} = icons
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar