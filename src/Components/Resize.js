import camera from "./Camera";

class Resize{
  constructor(){
    this.renderer = null;
  }
  start(renderer){

    //recebe um renderizador
    this.renderer = renderer;
    //manipulador de eventos
    window.addEventListener('resize', this.resize.bind(this));

  }
  stop(){

    window.removeEventListener('resize', this.resize.bind(this));

  }
  resize(){
    camera.aspect = window.innerWidth / window.innerHeight; 
    camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

}

const resize = new Resize();

export default resize;