import { useSpring, animated } from 'react-spring'

export default function Title(text) {
  const props = useSpring({ to: { opacity: 1, y:10 }, from: { opacity: 0, y:0 } })
  return <animated.h1 style={props}>{text.text}</animated.h1>
}