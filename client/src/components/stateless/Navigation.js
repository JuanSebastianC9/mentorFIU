import React from 'react'
import { Link } from 'react-router-dom'
import {useSpring, animated} from 'react-spring'

const Navigation = () => {
    //conf for the animation
    const props = useSpring({
        opacity: 1, 
        from: {transform: 'translateX(-100%)'},
        to: {transform: 'translateX(50%'}
    })
    //Using Tailwindcss
    return (
        <div className='flex justify-between align-middle px-10 w-full h-16'>
            <Link to='/'>
            <div className='flex self-center'>
                <animated.div style={props}>
                <span>Logo</span>
                <h1 className='text-3xl font-bold'>MentorFIU</h1>
                </animated.div>
            </div>
            </Link>
            <div className='justify-end self-center'>
            <ul>
                <li className='px-5'>
                    <Link to='/find-mentor'>FIND A MENTOR</Link>
                </li>
            
                <li className='px-5'>
                    <Link to='/become-mentor'> BECOME A MENTOR
                    </Link>
                </li>
                <li className='px-5'>
                    <Link to='/login'>LOGIN
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navigation
