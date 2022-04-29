import cloud from "../Geometry/NewGeometry";//plano
import cloudCylinder from "../Geometry/NewCylinder";//cilindro
import cloudCone from "../Geometry/NewCone";//cone
import cloudBall from "../Geometry/NewBall";//bola

//Exemplos 1
import PrismaTriangle from "../Example/Figuras1/PrismTriangle";
import PyramidTriangle from "../Example/Figuras1/PyramidTriangle";
//Exemplos 2
import PyramidTriangle2 from "../Example/Figuras2/PyramidTriangle2";
import PrismaQuadrangular from "../Example/Figuras2/PrismQuadrangular";
//Exemplos 3
import PyramidTriangle3 from "../Example/Figuras3/PyramidTriangle3";
import Paralelepipedo from "../Example/Figuras3/Paralelepipedo";


import renderer from "./Renderer";
import scene from "./Scene";
import camera from "./Camera";
import light from "./Lights";


//encorporar a geometrya
//MUDAR AQUIS
scene.add(Paralelepipedo);

//incorporar o elemento light
scene.add(light);

//por padrão a posição é setada com zero, movemos o observador para o ponto z = 5
camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
  // MUDAR AQUI
  Paralelepipedo.geometry.rotateX(0.01);
  Paralelepipedo.geometry.rotateY(0.01);

	renderer.render( scene, camera );
}

export { animate };