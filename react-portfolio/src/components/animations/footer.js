import { useSpring, animated } from 'react-spring'
import github from '../../images/github-icon.png'
import linkdin from '../../images/linkdin-icon.png'

export default function Title(text) {
  const props = useSpring({ to: { y:50 }, from: { y:0 } })
  return (
        <animated.div style={props}>
            <div id='footer'>
            <h3>Socials:</h3>
            
                <ul id="socialList">
                    <li>
                        <a href="https://github.com/NickLeon92/"><img src={github} alt="" class="social"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nick-leon-5b338aa3/"><img src={linkdin} alt="" class="social"/></a>
                    </li>
                </ul>
            </div>
        </animated.div>)
}