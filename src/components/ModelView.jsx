import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import React, { Suspense } from 'react'
import Lights from './Lights';
import Iphone3d from './Iphone3d';
import * as THREE from 'three'
import Loader from './Loader';

const ModelView = (props) => {
    const index=props.index;
    const groupRef=props.groupRef;
    const controlRef=props.controlRef;
    const setRotationState=props.setRotationState;
    const item=props.item;
    const size=props.size;
    const gsapType=props.gsapType;

  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full absolute ${(index===2)?'right-[-100%]':''}`}
    >
      <ambientLight intensity={0.3}/>
      <PerspectiveCamera makeDefault position={[0,0,4]}/>
      <Lights/>

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      
      <group ref={groupRef} name={` ${(index===1) ? 'small':'large'}` } position={[0,0,0]}>
        <Suspense fallback={<Loader/>}>
          <Iphone3d
            scale={index===1 ? [15,15,15] :[17,17,17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>

    </View>
  )
}

export default ModelView