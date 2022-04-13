import * as THREE from 'three';

const points = [];

let n = 50;
let m = 50;

for (let i = 0; i < m; i++) {
  
  for (let j = 0; j < n; j++) {
    
    let s = i / n;
    let t = j / (m - 1.0);
    
    let theta = 2.0 * Math.PI * s;
    let r = 1.0 - t;
    let x = r * Math.cos(theta);
    let y = r * Math.sin(theta);
    let z = 2.0 * t - 1.0;

    points.push( new THREE.Vector3 (x, y, z));

  }
  
}

//criando a nossa geometria
const geometry = new THREE.BufferGeometry().setFromPoints( points );
//material
const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true} );
//nuvem de pontos
const cloudCone = new THREE.Points( geometry, material );

export default cloudCone;