import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber"
import { OrbitControls} from "@react-three/drei";
import { Houses } from '../components/three/Houses';
import "../CSS/style.css"


const Three = () => {

    const navigate = useNavigate();
    // const scene = new Scene();

    return (
        <div className='three-js '>
            <Canvas
                className='canvas-3'
             
                camera={{ position: [-10, 8, 50], fov: 50 }}
            >

                <ambientLight intensity={0.5} />

                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

               

                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, -0]} intensity={1.5} />

                <Houses />

                <OrbitControls />

            </Canvas>

            <p className="home-btn" onClick={() => navigate("/")}>Home</p >

        </div>

    )
}
export default Three;
