import box from "./Geometry/Box";
import cloud from "./Geometry/NewGeometry";
import cloudCylinder from "./Geometry/NewCylinder";
import cloudCone from "./Geometry/NewCone";
import cloudBall from "./Geometry/NewBall";

import scene from "./Components/Scene";
import camera from "./Components/Camera";
import renderer from "./Components/Renderer";
import light from "./Components/Lights";

// import resize from "./Components/Resize";
import { animate } from "./Components/animate";


// //encorporar a geometrya
// scene.add(cloud);

// //incorporar o elemento light
// scene.add(light);

// //por padrão a posição é setada com zero, movemos o observador para o ponto z = 5
// camera.position.z = 5

// //outra forma de setar a posição é utilizando o Vector3
// // camera.position.set(1,2,5);
// //lookAt -> Converte o vetor do espaço local deste objeto para o espaço mundial.
// //camera.lookAt(box.position);

// function animate() {
// 	requestAnimationFrame( animate );
//   // cloud.geometry.rotateY(0.01);
//   cloud.geometry.rotateY(0.01);
// 	renderer.render( scene, camera );
// }
animate();
// //incorporando o resize, redimensionar a figura de acordo com a tela
// resize.start(renderer);

// //iremos setar em um determinado intervalo por minuto
// setInterval(() => {
//   //renderizando a sena
//   renderer.render(scene, camera)
// }, 1000/30);
