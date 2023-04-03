import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';


const Object = () => {
    const object_3d = useGLTF('./3D_object.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <primitive 
            object={object_3d.scene}   
        />        
    </mesh>
  )
}
const ObjectCanvas = () => {
    return (
        <Canvas frameloop='demand' shadows 
        camera={{position: [20,3,5], fov: 25}} 
        gl={{ preserveDrawingBuffer:true}}>
            <Suspense fallback={<CanvasLoader />}>
            <OrbitControls 
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                autoRotate
            />
            <Object />
            </Suspense>

            <Preload all/>
         </Canvas>
    )
}

export default ObjectCanvas