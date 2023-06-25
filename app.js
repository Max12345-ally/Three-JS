import * as THREE from 'three';

export default class Sketch {
    constructor(options) {
        this.time = 0;
        this.container = options.dom;
        this.scene = new THREE.Scene();

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.camera = new THREE.PerspectiveCamera( 75, this.width / 
        this.height, 0.1, 10 );
        this.camera.position.z = 1;

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( this.width, this.height );
        
        this.container.appendChild( this.renderer.domElement );



        this.addObject();
        this.render();
    }

    resize(){

    }

    addObject(){
        this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        this.material = new THREE.MeshNormalMaterial();
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.cube );
    }

    render() {
        this.time+=0.5;
        this.cube.rotation.x += 0.01;
	    this.cube.rotation.y += 0.01;

	    this.renderer.render( this.scene, this.camera ); 
        window.requestAnimationFrame(this.render.bind(this));        
    }
}

new Sketch({
dom: document.getElementById('container')
});





