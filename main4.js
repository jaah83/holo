import * as THREE from 'three';
import { PeppersGhostEffect } from 'three/addons/effects/PeppersGhostEffect.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

//Se instancian las variables
    let container;

    let camera, scene, renderer, effect;

//Se crea un contenedor
    container = document.createElement( 'div' );

    document.body.appendChild( container );

//render

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setAnimationLoop( animate );
    container.appendChild( renderer.domElement );

//Se crea el efecto PeppersGhost
    effect = new PeppersGhostEffect( renderer );
    effect.setSize( window.innerWidth, window.innerHeight );
    effect.cameraDistance = 5;

    window.addEventListener( 'resize', onWindowResize );
//Camara
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100000 );
//Escena
    scene = new THREE.Scene();
     
    const hemilight = new THREE.HemisphereLight(0xffffff,0xffffff,0)
    hemilight.color.setHSL(10,10,10);
    hemilight.position.set(0,0,0);
    scene.add(hemilight);

const geometry = new THREE.BoxGeometry(1,1,1);
const cmaterial = new THREE.MeshBasicMaterial(0x7700ff);
const cube = new THREE.Mesh(geometry,cmaterial);
scene.add(cube);

//comienzo de fbx
            var Myfbx;
 
const fbxLoader = new FBXLoader()
fbxLoader.load(
 
    'eyeballl.fbx',
    (object) => {
        object.scale.set(1000, 1000, 1000);
        object.position.set(0,0,0);
        scene.add(object);
       
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error);
 
 }
    //Ajuste de pantalla

)
  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();
  }
    effect.setSize( window.innerWidth,window.innerHeight);

    function animate(){
        effect.render(scene,camera)
        
    
  }  
