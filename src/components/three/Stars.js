import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei";
import "../../CSS/style.css"
import "../../CSS/inq.css"
import { SpinMesh } from '../../components/three/SpinMesh';
import { WireSphere } from '../../components/three/WireSphere';
import { a } from "@react-spring/three";

export const StarSky = () => {
    const mesh = useRef();

    useFrame(() => (mesh.current.rotation.y += 0.0015));

    return (
        <a.mesh ref={mesh}>
            <Stars />

            <SpinMesh position={[10, 20, -20]} color="gold" speed={10} />
            <SpinMesh position={[-21, 21, -15]} color="gold" speed={10} />
            <WireSphere position={[-15, 25, -13]} color="gold" speed={30} />
            <SpinMesh position={[-19, 23, -19]} color="whiteSmoke" speed={20} />
            <SpinMesh position={[-10, 24, 20]} color="gold" speed={1} />
            <WireSphere position={[-10, 25, 10]} color="whiteSmoke" speed={6} />
            <SpinMesh position={[-10, 20, -20]} color="gold" speed={20} />
            <WireSphere position={[15, 30, -15]} color="gold" speed={6} />
            <SpinMesh position={[8, 20, -15]} color="whiteSmoke" speed={30} />
            <WireSphere position={[16, 25, -15]} color="gold" speed={6} />
            <SpinMesh position={[12, 20, 22]} color="whiteSmoke" speed={26} />
            <SpinMesh position={[-21, 23, 11]} color="gold" speed={6} />
            <WireSphere position={[-3, 19, -20]} color="gold" speed={1} />
            <SpinMesh position={[19, 30, 9]} color="gold" speed={6} />
            <WireSphere position={[17, 23, 9]} color="whiteSmoke" speed={18} />
            <WireSphere position={[17, 33, 17]} color="gold" speed={26} />
            <SpinMesh position={[4, 25, 25]} color="whiteSmoke" speed={3} />
            <WireSphere position={[20, 19, 10]} color="gold" speed={30} />
            <SpinMesh position={[-15, 24, -15]} color="gold" speed={6} />
            <WireSphere position={[-15, 30, 25]} color="whiteSmoke" speed={11} />
            <SpinMesh position={[-18, 25, 18]} color="gold" speed={2} />
            <WireSphere position={[-12, 30, -25]} color="whiteSmoke" speed={26} />
            <SpinMesh position={[10, 35, -20]} color="gold" speed={26} />
        </a.mesh>
    )
}