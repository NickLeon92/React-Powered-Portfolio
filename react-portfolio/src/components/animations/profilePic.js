import { useSpring, animated } from 'react-spring'
import pic from '../../images/profile.JPG'


export default function Title(text) {
  const props = useSpring({ to: { opacity:1 }, from: { opacity:0 } })
  return (
        <animated.div style={props}>
            <div>
                <img id="profile-pic" src={pic} alt="profile pic"/>
            </div>
        </animated.div>)
}