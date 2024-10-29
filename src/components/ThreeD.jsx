import React, { useRef, useEffect } from "react"
import * as THREE from "three"

const ThreeD = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Append renderer to the DOM
    mountRef.current.appendChild(renderer.domElement)

    // Create a cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the cube
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      // Render the scene
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} />
}

export default ThreeD