import React from 'react';
import { Stars } from "@react-three/drei";
import "../../CSS/style.css"
import { SpinMesh } from '../../components/three/SpinMesh';
import { WireSphere } from '../../components/three/WireSphere';

export const StarSky = () => {
    return (
        <mesh>

            <Stars />
            <SpinMesh position={[30, 15, -20]} color="gold" speed={10} />
            <SpinMesh position={[-30, 15, -10]} color="gold" speed={10} />
            <WireSphere position={[-10, 25, -29]} color="orange" speed={30} />
            <SpinMesh position={[-17, 23, -29]} color="crimson" speed={20} />
            <SpinMesh position={[-20, 19, -39]} color="gold" speed={1} />
            <WireSphere position={[-30, 25, 35]} color="crimson" speed={6} />
            <SpinMesh position={[-20, 30, -35]} color="gold" speed={20} />
            <WireSphere position={[15, 30, -5]} color="orange" speed={6} />
            <SpinMesh position={[10, 30, -35]} color="whiteSmoke" speed={30} />
            <WireSphere position={[18, 25, -35]} color="gold" speed={6} />
            <SpinMesh position={[25, 30, 25]} color="crimson" speed={26} />
            <SpinMesh position={[30, 15, 30]} color="gold" speed={6} />
            <WireSphere position={[-3, 29, -20]} color="gold" speed={1} />
            <SpinMesh position={[30, 30, 19]} color="orange" speed={6} />
            <WireSphere position={[17, 23, 9]} color="crimson" speed={18} />
            <WireSphere position={[10, 33, 22]} color="gold" speed={26} />
            <SpinMesh position={[30, 25, 25]} color="crimson" speed={3} />
            <WireSphere position={[20, 30, 5]} color="gold" speed={30} />
            <SpinMesh position={[-15, 20, 5]} color="orange" speed={6} />
            <WireSphere position={[-15, 30, 35]} color="whiteSmoke" speed={11} />
            <SpinMesh position={[-10, 25, 35]} color="gold" speed={2} />
            <WireSphere position={[-25, 30, -25]} color="crimson" speed={26} />
            <SpinMesh position={[20, 35, -30]} color="gold" speed={26} />
        </mesh>
    )
}