var camera, scene, renderer, stars=[];
const canvas = document.querySelector('#c');

function init(){
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 5;
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  })
}
function addSphere(){
  for ( var z= -1000; z < 1000; z+=20 ) {
    var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var sphere = new THREE.Mesh(geometry, material)

    sphere.position.x = Math.random() * 1000 - 500;
    sphere.position.y = Math.random() * 1000 - 500;
    sphere.position.z = z;
    sphere.scale.x = sphere.scale.y = 2;
    scene.add( sphere );
    stars.push(sphere);
  }
}
function animateStars() {
  for(var i=0; i<stars.length; i++) {
    star = stars[i];
    star.position.z +=  i/10;
    if(star.position.z>1000) star.position.z-=2000;
  }
}
function render() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
    animateStars();
}

init();
addSphere();
render();
