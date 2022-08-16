import "../../CSS/style.css"
import "../../CSS/inq.css"
import React from "react";

export const Box = () => {
    return (
        <mesh className="box" position={[0,-.5,0]}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="turquoise" />
        </mesh>

    )
}