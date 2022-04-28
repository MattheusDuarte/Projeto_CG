import * as THREE from 'three';

const points = [];

let n = 10;
let m = 10;

for (let i = 0; i < m; i++) {
  
  for (let j = 0; j < n; j++) {
    
    let s = i / n;
    let t = j / (m - 1.0);
    
    let theta = 2.0 * Math.PI * s;
    let r = 1.0 - t;
    let x = r * Math.cos(theta);
    let y = r * Math.sin(theta);
    let z = 2.0 * t - 1.0;

    points.push( 2*x, 2*y, 2*z);

  }
  
}


const faces = [];

for (let i = 0; i < m - 1; i++) {

  for (let j = 0; j < n - 1; j++) {

    let base = i + j * n;
    faces.push(base, base + 1, base + n);
    faces.push(base + 1, base + 1 + n, base + n);

  }
  
}

const vertices = new Float32Array(points);

const geometry = new THREE.BufferGeometry();
geometry.setIndex(faces);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geometry.computeBoundingSphere();

const materialGreen = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cloudCone = new THREE.Mesh(geometry, materialGreen);

// //criando a nossa geometria
// const geometry = new THREE.BufferGeometry().setFromPoints( points );
// //material
// const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true, size: 0.02} );
// //nuvem de pontos
// const cloudCone = new THREE.Points( geometry, material );

export default cloudCone;