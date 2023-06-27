import { useEffect, useRef, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Sky } from '@react-three/drei'
import { MeshStandardMaterial, TextureLoader } from 'three'
import './App.css'


const App = () => {
  const meshRef = useRef();
  let gltf = useLoader(GLTFLoader, '/untitled.glb')
  // const texture = useLoader(TextureLoader, '/wood.jpg', )

  // const newMaterial = new MeshStandardMaterial({
  //   color: '#ffffff',
  //   map: texture,
  //   metalness: 1.0
  // });

  // useEffect(() => {
  //   if (gltf?.materials) {
  //     meshRef.current = gltf.scene.children.find(el => el.name == 'Plane001')

  //     // gltf.materials['Walnut Floor'] = {
  //     //   ...gltf.materials['Walnut Floor'] ,
  //     //   map: texture
  //     // }
  //     // Promise.all(Object.keys(gltf.materials).map(async material => {
  //     //   const texture = await useLoader(TextureLoader, `/${material}.jpg`)
  //     //   gltf.materials = {
  //     //     ...gltf.materials,
  //     //     [material]: new MeshStandardMaterial({
  //     //       ...gltf.materials?.[material],
  //     //       map: texture
  //     //     })
  //     //   }
  //     // }))

  //   }
  // }, [gltf])

  // useEffect(() => {
  //   if (meshRef.current && texture) {
  //     meshRef.current.material = newMaterial
  //   }
  // }, [meshRef.current, texture])

  return (
    <Canvas camera={{ position: [-1, 2, -3]}} shadows>
      <ambientLight color={'white'} intensity={0.15} position={[2.32, -1.04, 1.1]} castShadow />
      <ambientLight color={'white'} intensity={0.15} position={[2.32, -0.62, 1.1]} castShadow />
      <ambientLight color={'white'} intensity={0.15} position={[2.32, -2.7, 1.1]} castShadow />
      <pointLight position={[8, 0.9, 3.9]} intensity={1} />
      <Suspense fallback="loading...">
        <group>
          <primitive
            object={gltf.scene}
            dispose={null}
          />  
        </group>
      </Suspense>
      <Sky />
      <OrbitControls target={[0, 1, 0]} />
    </Canvas>
  )
}

export default App