const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function Tours(jed , dwa , tri ,czt){
    return new THREE.TorusGeometry( jed, dwa, tri, czt );
}
function Ball(jed , dwa ){
    return new THREE.DodecahedronGeometry( jed, dwa);
}
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe: true} );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide , wireframe: true} );
const geometry = new THREE.RingGeometry( 30, 20, 26 );
const cube = new THREE.Mesh( Tours(10,3,16,100), material );
const cube2 = new THREE.Mesh(Ball(5,5), material);
const cube3 = new THREE.Mesh(Tours(10,3,16,100) , material);
const cube4 = new THREE.Mesh(geometry , material2)

scene.add( cube , cube2 ,cube3 , cube4 );

camera.position.z = 30;



function animate() {
    requestAnimationFrame( animate );
    
    cube.rotation.y += 0.01;
    cube2.rotation.y += 0.01;
    cube3.rotation.x += 0.01;
    cube4.rotation.z += 0.01;

    renderer.render( scene, camera );
};

animate();

function printText(){
    var userInput = document.getElementById('textbox').value;
   document.getElementById("pipi").innerHTML = userInput;
   document.getElementById('textbox').value = null;
}