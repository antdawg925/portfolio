import React from 'react';
import {  a } from "@react-spring/three";
import "../../CSS/style.css"
import "../../CSS/inq.css"
import { StarSky } from '../../components/three/Stars';
import { House, Roof } from '../../components/three/House';

export const Houses = () => {

    return (
        <group>
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow
        >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshLambertMaterial attach="material" color="forestGreen" />

        </mesh>
         
        <House position={[-6, 4, -16]} color="grey" args={[7, 7, 15]}  />
        <Roof position={[-6, 15.5, -16]} color="brown" args={[10, 8, 7]} />

s                    <StarSky />

        <a.mesh
            position={[20,1,20]}
            castShadow>
            <boxBufferGeometry attach="geometry" args={[10,9,10]} />
            <meshLambertMaterial color="tan" attach='material' factor={0.6} />
        </a.mesh>
        <a.mesh
            position={[14,-3,3]}
            castShadow>
            <boxBufferGeometry attach="geometry" args={[70,.1,20]} />
            <meshLambertMaterial color="grey" attach='material' factor={0.6} />
        </a.mesh>
        <a.mesh
            position={[40,-3,21.5]}
            castShadow>
            <boxBufferGeometry attach="geometry" args={[20,.1, 57]} />
            <meshLambertMaterial color="grey" attach='material' factor={0.6}  />
        </a.mesh>
        <a.mesh
            position={[-30,-3,-18.5]}
            castShadow>
            <boxBufferGeometry attach="geometry" args={[20,0.1, 63]} />
            <meshLambertMaterial color="grey" attach='material' factor={0.6} />
        </a.mesh>
        <mesh>
            <Roof position={[20, 10, 20]} color="brown" args={[7, 9, 9,]} />
        </mesh>
    </group>
    )
}