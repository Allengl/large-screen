// import React, { useEffect } from 'react';
// import * as THREE from 'three';
import { Chart1 } from './components/Chart1';
import { Chart2 } from './components/Chart2';
import { Chart3 } from './components/Chart3';
import { Chart5 } from './components/Chart5';
import { Chart6 } from './components/Chart6';
import { Chart7 } from './components/Chart7';
import { Chart8 } from './components/Chart8';
import DemoChart from './components/DemoChart';
import { Icon } from './components/Icon';
import { Statistic } from './components/Statistic';
import './styles/app.scss';

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

  const year = new Date().getFullYear();



  return (
    <div className="home">
      <header>
        {/* <Clock /> */}
        <span>亚马芬监控平台大屏</span>
        <div className="info">
          <Icon name="position" /> shanghai
          <Icon name="weather" /> 18℃ cloudy
        </div>
      </header>
      <main>
        <section className="section1">
          <Chart2 />
          <Chart8 />
          <Chart7 />
        </section>
        <section className="section2">
          {/* <Statistic />
            <Chart4 /> */}
          <Statistic />
          <DemoChart />
          <div className="ring">
            <div className="radar" />
          </div>
          <span>数据实时监控中</span>
        </section>
        <section className="section3">
          <Chart1 />
          <Chart5 />
          <Chart3 />
        </section>
      </main>
      <p className="foot">©HAND Enterprise Solutions LTD. 2023-{year}</p>
    </div>
  )
}

export default App;
