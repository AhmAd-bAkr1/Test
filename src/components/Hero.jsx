import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import WebGL from 'three/addons/capabilities/WebGL.js';


function Hero() {
    
    const canvas = document.querySelector('canvas.webgl')
    
    
    const scene = new THREE.Scene()
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    camera.position.z = 2
    scene.add(camera)
    
    const AML = new THREE.AmbientLight(0xffff)
    scene.add(AML)
    
    const DL = new THREE.DirectionalLight(0xffffff , 3)
    scene.add(DL) 
    
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('draco/')
    
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)
    
    
    gltfLoader.load(
        '../public/desktop_pc/scene.gltf',
        function (gltf) {
            let modul = gltf.scene
            modul.scale.set(0.15 , 0.15 , 0.15)
            scene.add(modul)
    
        },undefined , function (error) {
            console.error(error)
        }
    )
    
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(500 , 500);
    document.body.appendChild(canvas);
    
    const controls = new OrbitControls(camera, canvas)
    
    controls.enableZoom = false;
    
    function animate() {
        renderer.render(scene, camera)
        controls.update()
        window.requestAnimationFrame(animate)
    
    }
    
    if ( WebGL.isWebGLAvailable() ) {
    
        // Initiate function or other initializations here
        animate();
    
    } else {
    
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById( 'container' ).appendChild( warning );
    
    }
    return (
        <>
            <h1>Ahmed Bakr</h1>
            <h1>Ahmed Bakr</h1>
            <h1>Ahmed Bakr</h1>
            {/* <canvas className="webgl" >{renderer.domElement}</canvas> */}

        </>
    )
}


export default Hero