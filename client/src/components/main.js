// import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js"
// import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/loaders/GLTFLoader.js"
// import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/controls/OrbitControls.js"

// window.addEventListener("load", () => {
//   init()
// })

// async function init() {
//   const btn = document.querySelector("button")

//   const params = {
//     planeColor: "#ffffff",
//     backgroundColor: "#141414",
//     fogColor: "#ffffff",
//   }

//   const h2 = document.querySelector("h2")

//   gsap.registerPlugin(ScrollTrigger)
//   const canvas = document.querySelector("#canvas")

//   const renderer = new THREE.WebGLRenderer({
//     antialias: true,
//     alpha: true,
//     canvas,
//   })

//   renderer.shadowMap.enabled = true
//   renderer.setSize(window.innerWidth, window.innerHeight)

//   // scene
//   const scene = new THREE.Scene()
//   scene.background = new THREE.Color(params.backgroundColor)
//   scene.fog = new THREE.Fog(params.fogColor, 1, 25)

//   // camera
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     1,
//     500
//   )

//   // OrbitControls - import required
//   const controls = new OrbitControls(camera, renderer.domElement)

//   // logo
//   const gltfLoader = new GLTFLoader()
//   const gltf = await gltfLoader.loadAsync("./models/nami.gltf")
//   const gltfMaterial = new THREE.MeshStandardMaterial({
//     color: 0xa3a3a3,
//     roughness: 0,
//     metalness: 0.9,
//   })

//   const logo = gltf.scene

//   logo.traverse((object) => {
//     if (object.isMesh) {
//       object.material = gltfMaterial
//       object.castShadow = true
//     }
//   })

//   // logo position & scale responsive
//   if (window.innerWidth <= 450) {
//     logo.scale.set(0.25, 0.25, 0.25)
//     logo.position.set(-0.3, 0.4, 0)
//     logo.rotation.z = -130 * (Math.PI / 180)
//   } else if (window.innerWidth <= 820) {
//     logo.scale.set(0.25, 0.25, 0.25)
//     logo.position.set(0, 0, 0)
//   } else {
//     logo.scale.set(0.4, 0.4, 0.4)
//     logo.position.set(0, 0, 0)
//   }

//   //logo animation
//   const clock = new THREE.Clock()

//   const logoAnimation = () => {
//     const elapsedTime = clock.getElapsedTime()
//     logo.rotation.x = Math.sin(elapsedTime * 0.5)
//   }

//   logo.update = logoAnimation

//   scene.add(logo)

//   //camera position
//   camera.position.set(0, 0.1, 3)

//   //DirectionalLight & AmbientLight
//   const pointLight = new THREE.PointLight(0xfcfffd, 1, 1, 1)
//   pointLight.position.set(0, 1, 2)

//   scene.add(pointLight)

//   const directionalLight = new THREE.DirectionalLight(0xfcfffd, 2)
//   directionalLight.position.set(0, 2, 3)

//   scene.add(directionalLight)

//   const light = new THREE.AmbientLight(0xfcfffd, 0.3) // soft white light
//   scene.add(light)

//   // render = animate
//   renderer.render(scene, camera)

//   let animationStartTime = null

//   function render() {
//     if (animationStartTime === null) {
//       animationStartTime = Date.now()
//     }

//     const elapsedTime = (Date.now() - animationStartTime) / 1000

//     if (elapsedTime <= 5.5) {
//       logoAnimation()
//     }

//     renderer.render(scene, camera)
//     requestAnimationFrame(render)
//   }
//   render()

//   // resize
//   function handleResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     renderer.render(scene, camera)
//   }
//   window.addEventListener("resize", handleResize)
// }
