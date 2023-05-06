// Import the KEGG NAGS database.
var keggNags = require("kegg-nags");

// Create a new CreateJS scene.
var scene = new createjs.Scene();

// Create a new TweenJS tween object.
var tween = new tweenjs.Tween();

// Create a new ParticleJS particle system.
var particleSystem = new particlejs.ParticleSystem();

// Use the KEGG NAGS database to find the molecules that are involved in the immunological attack of sodium phenylbutyrate.
var molecules = keggNags.getMolecules("NAGS", "immune");

// Use the TweenJS tween object to animate the movement of the molecules.
for (var i = 0; i < molecules.length; i++) {
  tween.to(molecules[i], {
    position: {
      x: Math.random() * scene.width,
      y: Math.random() * scene.height
    },
    duration: 2000
  });
}

// Use the ParticleJS particle system to create a visual representation of the immunological attack.
particleSystem.particles.forEach(function(particle) {
  particle.x = Math.random() * scene.width;
  particle.y = Math.random() * scene.height;
  particle.vx = Math.random() - 0.5;
  particle.vy = Math.random() - 0.5;
  particle.gravity = 0.1;
  particle.size = Math.random() * 10;
});

// Add the tween object and the particle system to the scene.
scene.addChild(tween);
scene.addChild(particleSystem);

// Start the scene.
scene.start();
