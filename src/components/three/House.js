import React, {useRef, useState} from 'react';
import { softShadows, } from '@react-three/drei';
import { useSpring, a } from "@react-spring/three";
import "../../CSS/style.css"
import "../../CSS/inq.css"


export const House = ({position, color, args}) => {
    softShadows();
    const mesh = useRef();

    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    const [expand, setExpand] = useState(false);

    const props = useSpring({
        scale: expand? [1.4, 1.4, 1.4] : [1,1,1]
    });
    const look = useSpring({ opacity: 1, from: { opacity: 0} });
    return(
        <a.mesh
            position={position}
            ref={mesh}
            scale={props.scale}
            castShadow>
            {console.log(look)}
            <cylinderBufferGeometry attach='geometry' args={args} />
            <meshLambertMaterial
                color={color}
                attach='material'
                factor={0.6}
            />
        </a.mesh>
    );
}
export const Roof = ({position, color, args}) => {
    softShadows();
    const mesh = useRef();

    const [expand, setExpand] = useState(false);

    const props = useSpring({
        scale: expand? [1.4, 1.4, 1.4] : [1,1,1]
    });
    const look = useSpring({ opacity: 1, from: { opacity: 0} });
    return(
        <a.mesh
            position={position}
            ref={mesh}
            scale={props.scale}
            castShadow>
            <coneBufferGeometry attach="geometry" args={args} />
            <meshLambertMaterial
                color={color}
                attach='material'
                factor={0.6}
            />
        </a.mesh>
    );
}