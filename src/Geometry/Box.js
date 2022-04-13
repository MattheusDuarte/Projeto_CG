import * as THREE from "three";

//instânciamos uma caixa
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//especifica o material, podemos trocar tabem o matiral o cubo, MeshaBasicMaterial para phog
//phong precisa de luz para visualizar 
//wireframe -> definimos de a geometria é um aramado ou não 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
//instãncia o cube através dos parametros a cima
const cube = new THREE.Mesh( geometry, material );

export default cube;