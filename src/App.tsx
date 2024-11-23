import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Scene from "./components/models/Scene";

function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }} shadows>
            <OrbitControls/>
            <Scene/>
        </Canvas>
    )
}

export default App
