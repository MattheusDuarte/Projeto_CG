import * as THREE from "three";

const points = [];

points.push(0, 2, 0);
points.push(1, 2, 0);
points.push(0.5, 2, -1);
points.push(1, 0, 0);
points.push(0.5, 0, -1);
points.push(0, 0, 0);



const faces = [];

faces.push(0, 1, 3);
faces.push(0, 3, 5);
faces.push(2, 4, 5);
faces.push(0, 2, 5);
faces.push(1, 2, 3);
faces.push(2, 3, 4);
faces.push(0, 1, 2);
faces.push(3, 4, 5);


const vertices = new Float32Array(points);

const geometry = new THREE.BufferGeometry();
geometry.setIndex(faces);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geometry.computeBoundingSphere();

const materialGreen = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const PrismaTriangle = new THREE.Mesh(geometry, materialGreen);



//criando a nossa geometria
// const geometry = new THREE.BufferGeometry().setFromPoints( points );
//material
// const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true, size: 0.02} );
//nuvem de pontos
// const cloud = new THREE.Points( geometry, material );

export default PrismaTriangle;