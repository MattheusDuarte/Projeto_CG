class Machine{
  constructor(){
    this.flag = false;
    this.callbacks = [];
  }
  addcallbakc(callback){
    this.callbacks.push(callback)
  }
  rum(){
    if(!this.flag) return
    requestAnimationFrame(this.run.bind(this));

  }
  start(){
    if(this.flag) return 
    this.flag = true;
    this.rum();
  }
  stop(){
    this.flag = false;
  }
}

const machine = new Machine;

export default machine;