import React, { useRef, useState } from 'react';
import { MeshWobbleMaterial, softShadows, } from '@react-three/drei';
import { useSpring, a } from "@react-spring/three";
import { useFrame } from "@react-three/fiber"
import "../../CSS/style.css"
import "../../CSS/inq.css"

export const SpinMesh = ({ position, color, speed, args }) => {
    softShadows();
    const mesh = useRef();

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    const [expand, setExpand] = useState(false);

    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    });
    const look = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <a.mesh
            position={position}
            ref={mesh}
            onClick={() => setExpand(!expand)}
            scale={props.scale}
            castShadow>
            {/* {console.log(look)} */}
            <dodecahedronGeometry attach='geometry' args={args} />
            <MeshWobbleMaterial
                color={color}
                speed={speed}
                attach='material'
                factor={0.6}

            />
        </a.mesh>
    );
}