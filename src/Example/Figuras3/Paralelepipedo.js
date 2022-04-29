import * as THREE from "three";

const points = [];

points.push(0, 0, 0);
points.push(0, 2, 0);
points.push(0, 0, 2);
points.push(4, 0, 0);
points.push(4, 0, 2);
points.push(4, 2, 0);
points.push(0, 2, 2);
points.push(4, 2, 2);



const faces = [];
//face 1
faces.push(0, 1, 2);
faces.push(1, 2, 6);
//face2
faces.push(1, 0, 5);
faces.push(5, 0, 3);
//face3
faces.push(5, 4, 3);
faces.push(7, 5, 4);
//face4
faces.push(0, 2, 3);
faces.push(4, 3, 2);
//face5
faces.push(7, 4, 6);
faces.push(6, 4, 2);
//face6
faces.push(7, 1, 6);
faces.push(5, 7, 1);













const vertices = new Float32Array(points);

const geometry = new THREE.BufferGeometry();
geometry.setIndex(faces);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
geometry.computeBoundingSphere();

const materialGreen = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const Paralelepipedo = new THREE.Mesh(geometry, materialGreen);



//criando a nossa geometria
// const geometry = new THREE.BufferGeometry().setFromPoints( points );
//material
// const material = new THREE.PointsMaterial( {color: 0x00ff00, wireframe: true, size: 0.02} );
//nuvem de pontos
// const cloud = new THREE.Points( geometry, material );

export default Paralelepipedo;