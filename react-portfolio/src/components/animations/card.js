import { useSpring, animated } from 'react-spring'
import demo1 from '../../images/demo1.JPG'
import demo2 from '../../images/demo2.JPG'
import demo3 from '../../images/demo3.JPG'
import demo4 from '../../images/demo4.JPG'
import demo5 from '../../images/demo5.JPG'
import demo6 from '../../images/demo6.JPG'

const pic = [demo1, demo2, demo3, demo4, demo5, demo6]

export default function Card(details) {

  const props = useSpring({ 
    to: { opacity: 1, y:0 },
    from: { opacity: 0, y:-50},
    duration: {x:5000}
 })

  return( 
  <animated.div style={props} id='cardbox'>
    

        <section id="first-demo">
            <div className="pictureContainer">
                <a href={details.appLink}><img src={pic[details.picId-1]} alt="Avatar" className="image" /></a>
                <div class="overlay">{details.description}</div>
                <a href={details.repoLink}>
                    <button href={details.repoLink} type="button" className="btn btn-primary" id="repo">Repository</button>
                </a>

            </div>
        </section>

    
  </animated.div> )
}