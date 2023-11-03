// import React, { useEffect } from 'react';
// import * as THREE from 'three';
import DemoChart from './components/DemoChart';

function App() {
  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   camera.position.z = 5;

  //   const geometry = new THREE.SphereGeometry(15, 32, 16);
  //   const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  //   const sphere = new THREE.Mesh(geometry, material); 
  //   scene.add(sphere);
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   const mount = document.createElement('div');
  //   document.body.appendChild(mount);
  //   mount.appendChild(renderer.domElement);


  //   function animate() {
  //     requestAnimationFrame(animate);
  //     sphere.rotation.x += 0.01;
  //     sphere.rotation.y += 0.01;
  //     renderer.render(scene, camera);
  //   }
  //   animate();

  //   return () => {
  //     mount.removeChild(renderer.domElement);
  //   };
  // }, []);

  return (
    <div id='chart-container'>
      <DemoChart />
      {/* <div id='mount'></div> */}
      
    </div>
  )
}

export default App;
