import { useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { WireSphere } from "./three/WireSphere"
import { SpinMesh } from "./three/SpinMesh"
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber"


const Orbital = () => {

    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.y += 0.02));

    return (
        <mesh ref={mesh}>

            <WireSphere
                position={[0, 0, 0]}
                color="turquoise"
                args={[2, 2, 1]}
                speed={2}
            />

            <SpinMesh position={[5, 0, 5]} color="silver" speed={12} />
            <SpinMesh position={[-5, 0, 5]} color="turquoise" speed={9} />
            <SpinMesh position={[-5, 0, -5]} color="teal" speed={9} />
            <SpinMesh position={[5,0, -5]} color="skyblue" speed={15} />

        </mesh>
    )
}


export const PhotoBar = () => {
    return (
        <div className="p-bar">

            <div className="">

                <Canvas className="canvas">

                    <OrbitControls />
                    <Stars />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[-10, 5, 15]} angle={0.5} />

                    <Orbital />

                </Canvas>

            </div>

        </div>
    )
}
