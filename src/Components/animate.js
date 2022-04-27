import cloud from "../Geometry/NewGeometry";
import cloudCylinder from "../Geometry/NewCylinder";
import cloudCone from "../Geometry/NewCone";
import cloudBall from "../Geometry/NewBall";

import renderer from "./Renderer";
import scene from "./Scene";
import camera from "./Camera";
import light from "./Lights";


//encorporar a geometrya
scene.add(cloud);

//incorporar o elemento light
scene.add(light);

//por padrão a posição é setada com zero, movemos o observador para o ponto z = 5
camera.position.z = 5

function animate() {
	requestAnimationFrame( animate );
  // cloud.geometry.rotateY(0.01);
  cloud.geometry.rotateY(0.01);
	renderer.render( scene, camera );
}

export { animate };