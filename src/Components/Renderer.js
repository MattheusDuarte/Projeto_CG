import * as THREE from 'three';

//renderizador 
//antialias refere-se a pixelização
const renderer = new THREE.WebGLRenderer({antialias: true});
//definimos o tamanho da renderização
renderer.setSize( window.innerWidth, window.innerHeight );
//adicionamos o elemento renderizador ao nosso documento HTML. Este é um elemento <canvas> que o renderizador usa para exibir a cena para nós.
document.body.appendChild( renderer.domElement );

export default renderer;