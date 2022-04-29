import * as THREE from "three";

const points = [];

points.push(2, 2, 0);
points.push(0, 0, 0);
points.push(2, 0, 0);
points.push(0, 2, 0);
points.push(2, 0, 4);
points.push(2, 2, 4);
points.push(0, 2, 4);
points.push(0, 0, 4);



const faces = [];
//face 1
faces.push(1, 2, 3);
faces.push(2, 0, 3);
//face2
faces.push(1, 2, 7);
faces.push(2, 4, 7);
//face3
faces.push(2, 0, 4);
faces.push(0, 4, 5);
//face4
faces.push(1, 3, 7);
faces.push(3, 7, 6);
//face5
faces.push(7, 4, 6);
faces.push(6, 4, 5);
//face6
faces.push(3, 0, 6);
faces.push(6, 5, 0);













const vertices = new Float32Array(points);

const geometry = new THREE.BufferGeometry();
geometry.setIndex(faces);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geometry.computeBoundingSphere();

const materialGreen = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const PrismaQuadrangular = new THREE.Mesh(geometry, materialGreen);



//criando a nossa geometria
// const geometry = new THREE.BufferGeometry().setFromPoints( points );
//material
// const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true, size: 0.02} );
//nuvem de pontos
// const cloud = new THREE.Points( geometry, material );

export default PrismaQuadrangular;