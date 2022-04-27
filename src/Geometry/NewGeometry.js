import * as THREE from 'three';

const points = [];

let n = 50;
let m = 50;

for (let i = 0; i < m; i++) {
  
  for (let j = 0; j < n; j++) {
    
    let s = i / (n - 1.0);
    let t = j / (m - 1.0);
    
    let x = 2.0 * s - 1.0;
    let y = 2.0 * t - 1.0;

    points.push( new THREE.Vector3 (x, y, 0.0));

  }
  
}

//criando a nossa geometria
const geometry = new THREE.BufferGeometry().setFromPoints( points );
//material
const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true, size: 0.02} );
//nuvem de pontos
const cloud = new THREE.Points( geometry, material );

export default cloud;