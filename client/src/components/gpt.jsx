export function Model(props) {
  const { nodes, materials } = useGLTF("/PDlogo.glb")
  return (
    <group {...props} dispose={null}>
      <group
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.287, 0.415, 0.287]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Asset_5_1.geometry}
          material={materials["material0.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Asset_5_2.geometry}
          material={materials["material1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Asset_5_3.geometry}
          material={materials.material2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Asset_5_4.geometry}
          material={materials.material3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Asset_5_5.geometry}
          material={materials.material4}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/PDlogo.glb")
