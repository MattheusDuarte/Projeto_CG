import * as THREE from 'three';

//isntância uma camera como perspectiva(campo de visão = 75º, razão de aspecto, plano porximo, plano distânte) 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

export default camera;