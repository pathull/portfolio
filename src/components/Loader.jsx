import {Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
   <span className='canvas-load'></span>
   <p
   style={{
    fontSize: 20,
    color: 'black',
    fontWeight: 800,
    marginTop: 40
   }}
   > {progress.toFixed(0)}%</p>
    </Html>
  )
}

export default Loader;