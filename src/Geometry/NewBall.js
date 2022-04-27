import * as THREE from 'three';

const points = [];

let n = 50;
let m = 50;

for (let i = 0; i < m; i++) {
  
  for (let j = 0; j < n; j++) {
    
    let s = i / n;
    let t = j / (m - 1.0);
    
    let theta = 2.0 * Math.PI * s;
    let y = 2.0 * t - 1.0;
    let r = Math.sqrt(1 - Math.pow(y,2));
    let x = r * Math.cos(theta);
    let z = r * Math.sin(theta);
    

    points.push( new THREE.Vector3 (x, y, z));

  }
  
}

//criando a nossa geometria
const geometry = new THREE.BufferGeometry().setFromPoints( points );
//material
const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true, size: 0.02} );
//nuvem de pontos
const cloudBall = new THREE.Points( geometry, material );

export default cloudBall;