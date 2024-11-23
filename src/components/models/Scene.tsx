import * as THREE from "three";
import {BakeShadows, ContactShadows, SoftShadows} from "@react-three/drei";

const scene = () => {
    /*
        orthographicCamera : C'est parce que c pr voir l'ombre sur tous les objets qui sont hors champs de la caméra
            <directionalLight intensity={0.5} color={"white"} position={[-2, 3, 2]} castShadow shadow-mapSize={[2048, 2048]}>
                    <orthographicCamera
                        attach={"shadow-camera"}
                        args={[-10, 10, 10, -10]}
                    />
            </directionalLight>
            <group position-x={10}>
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[1, 1, 1]}/>
                    <meshStandardMaterial color={"blue"}/>
                </mesh>
                <mesh position={[-1.5, 1, 1]} castShadow>
                    <sphereGeometry args={[0.5, 32, 64]}/>
                    <meshStandardMaterial color={"red"}/>
                </mesh>
                <mesh rotation-x={THREE.MathUtils.degToRad(-90)} position-y={-0.5} receiveShadow>
                    <planeGeometry args={[5, 5]}/>
                    <meshStandardMaterial color={"white"} side={THREE.DoubleSide}/>
                </mesh>
            </group>
        <SoftShadows/> pour rendre les ombres plus soft
        <BakeShadows/> pour éviter à l'appareil de calculer en temps réel les ombres (après que l'ombre a été calculée on la freeze c pr des objets statiques)
        <ContactShadows frames={1} blur={2} opacity={0.5} color={"black"} scale={10} position-y={-0.49}/> pour avoir sur une surface l'ombre de contact
     */
    return (
        <>
            <ambientLight intensity={0.2}/>
            <ContactShadows frames={1} blur={2} opacity={0.5} color={"black"} scale={10} position-y={-0.49}/>
            <directionalLight intensity={0.5} color={"white"} position={[-2, 3, 2]} castShadow/>
            <mesh castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStasndardMaterial color={"blue"}/>
            </mesh>
            <mesh position={[-1.5, 1, 1]} castShadow>
                <sphereGeometry args={[0.5, 32, 64]}/>
                <meshStandardMaterial color={"red"}/>
            </mesh>
            <mesh rotation-x={THREE.MathUtils.degToRad(-90)} position-y={-0.5} receiveShadow>
                <planeGeometry args={[5, 5]}/>
                <meshStandardMaterial color={"white"} side={THREE.DoubleSide}/>
            </mesh>
        </>
    )
}

export default scene;