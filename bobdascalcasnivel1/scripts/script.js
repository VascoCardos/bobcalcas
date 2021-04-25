

var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 750,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 } ,
            debug: false

        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};



var game = new Phaser.Game(config);

function preload ()
{
    //Imagens

    this.load.image('sky', 'assets/Sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('muro', 'assets/muro.png');
    this.load.image('muro2', 'assets/muro2.png');
    this.load.image('casa','assets/house_big.png');
    this.load.image('arvores','assets/arvore.png');
    this.load.image('barreirah','assets/barreira.png');
    this.load.image('barreirav','assets/barreira3.png');
    this.load.image('cinto','assets/Cinto.png');
    this.load.image('laser','assets/Laser.png');
    this.load.image('laser2','assets/projectile.png');
    this.load.image('terra','assets/Terra.png');
    this.load.image('elevador','assets/elevador.png');
    this.load.image('predio','assets/predio.png');
    this.load.image('gruta','assets/gruta.png');
    this.load.image('nave', 'assets/spaceship.png');

    this.load.spritesheet('bob',
        'assets/Bob3.png',
        { frameWidth: 65, frameHeight: 130 }
    );
    this.load.spritesheet('alien',
        'assets/Alien.png',
        { frameWidth: 62, frameHeight: 66 }
    );

    this.load.spritesheet('lesma',
        'assets/Lesmas.png',
        { frameWidth: 62, frameHeight: 30 }
    );

    this.load.spritesheet('santuario',
        'assets/Santuario.png',
        { frameWidth: 170.65, frameHeight: 348 }
    );

    this.load.audio('death', 'assets/deathSound.mp3');


}

//variaveis



var platforms;
var arvores;
var player1;
var barreira;
var lesma1;
var lesma2;
var lesma3;
var lesma4;
var gruta;
var Alien1;
var projectiles;
var timedEvent;
var elevador;
var santuario;
var predio;
var nave;
var nave2;
var death;



function create ()
{



    let bg = this.add.image(0, 0, "sky").setOrigin(0, 0).setScale(1);

    this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);

    // Variaveis estaticas

    platforms = this.physics.add.staticGroup();
    arvores =  this.physics.add.staticGroup();
    barreira = this.physics.add.staticGroup();
    gruta = this.physics.add.staticGroup();
    Alien1 = this.physics.add.staticGroup();
    barreira = this.physics.add.staticGroup()
    Alien2 = this.physics.add.staticGroup();
    predio = this.physics.add.staticGroup();
    santuario = this.physics.add.staticGroup();




    // Criar items

    gruta.create(3000, 635, 'gruta').setScale(0.60).refreshBody();

    predio.create(4700,375, "predio").setScale(0.85);

    player1 = this.physics.add.sprite(300, 600, 'bob').setScale(0.75);

    death = this.sound.add('death');

    platforms.create(400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(1150, 675, 'ground').setScale(1).refreshBody();
    platforms.create(1650, 675, 'ground').setScale(1).refreshBody();
    platforms.create(1250, 635, 'ground').setScale(1).refreshBody();
    platforms.create(1500, 635, 'ground').setScale(1).refreshBody();
    platforms.create(2400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(3400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(4400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(5400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(6400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(7400, 750, 'ground').setScale(2).refreshBody();
    platforms.create(1400, 725, 'terra').setScale(2).refreshBody();
    platforms.create(2000, 430, 'muro').setScale(0.5).refreshBody();
    platforms.create(2300, 530, 'muro').setScale(0.5).refreshBody();
    platforms.create(1900, 530, 'muro2').setScale(0.30).refreshBody();
    platforms.create(1900, 380, 'muro2').setScale(0.30).refreshBody();
    platforms.create(2000, 270, 'muro2').setScale(0.30).refreshBody();
    platforms.create(1650, 450, 'muro2').setScale(0.30).refreshBody();
    platforms.create(1650, 300, 'muro2').setScale(0.30).refreshBody();
    platforms.create(0,750,"barreirav");
    platforms.create(7000,750,"barreirav");
    barreira.create(3600, 750, "barreirav");
    barreira.create(5030, 750, "barreirav");
     lesma1 = this.physics.add.sprite(1100, 590, 'lesma');

     lesma2 = this.physics.add.sprite(2100, 670, 'lesma');

    lesma3 = this.physics.add.sprite(4700, 270, 'lesma');

    lesma4 = this.physics.add.sprite(3700, 670, 'lesma');



    platforms.create(4400, 182, 'muro').setScale(0.5).refreshBody();
    platforms.create(5000, 292, 'muro').setScale(0.5).refreshBody();
    platforms.create(4400, 382, 'muro').setScale(0.5).refreshBody();
    platforms.create(5000, 492, 'muro').setScale(0.5).refreshBody();
    platforms.create(4723, 522, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4820, 322, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4570, 522, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4540, 670, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4860, 670, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4540, 10, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4860, 10, 'muro2').setScale(0.5).refreshBody();
    platforms.create(4490, 390, 'muro2').setScale(0.30).refreshBody();
    platforms.create(4490, 130, 'muro2').setScale(0.30).refreshBody();
    platforms.create(4960, 230, 'muro2').setScale(0.15).refreshBody();
    elevador = this.physics.add.image(4935, 700, 'elevador').setScale(0.2).setImmovable(true).setVelocity(100, -100);

    nave = this.physics.add.image(5500, 170, 'nave').setScale(1.75).setImmovable(true).setVelocity(100, -100);
    nave2 = this.physics.add.image(5800, 100, 'nave').setScale(1.75).setImmovable(true).setVelocity(100, -100);




    // Criar animações players

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('bob', { start: 0, end: 2 }),
        frameRate: 7,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'bob', frame: 3 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('bob', { start: 4, end: 7 }),
        frameRate: 7,
        repeat: -1
    });

    this.anims.create({
        key: 'lesmaleft',
        frames: this.anims.generateFrameNumbers('lesma', { start: 0, end: 1 }),
        frameRate: 7,
        repeat: -1
    });

    this.anims.create({
        key: 'lesmaright',
        frames: this.anims.generateFrameNumbers('lesma', { start: 2, end: 3 }),
        frameRate: 7,
        repeat: -1
    });

    this.anims.create({
        delay: 1000,
        key: 'Alienleft',
        frames: this.anims.generateFrameNumbers('alien', { start: 1, end: 0 }),
        frameRate: 2.5,
        repeat: -1
    });

    this.anims.create({
        delay: 1000,
        key: 'Alienright',
        frames: this.anims.generateFrameNumbers('alien', { start: 2, end: 3 }),
        frameRate: 2.5,
        repeat: -1,

    });

    this.anims.create({
        delay: 1000,
        key: 'santuarioanim',
        frames: this.anims.generateFrameNumbers('santuario', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1,

    });


    player1.setBounce(0.2);

    Alien1.create(2900,655, 'alien').anims.play('Alienleft', true);
    santuario.create(6300,655, 'santuario').setScale(0.3).anims.play('santuarioanim', true);
    Alien2.create(3100,655, 'alien').anims.play('Alienright', true);
    Alien2.create(4580,470, 'alien').anims.play('Alienright', true);
    Alien2.create(4500,85, 'alien').anims.play('Alienright', true);

    elevador.body.setAllowGravity(false);
    nave.body.setAllowGravity(false);
    nave2.body.setAllowGravity(false);

    this.physics.add.collider(player1, platforms);
    this.physics.add.collider(lesma1,platforms);
    this.physics.add.collider(lesma2,platforms);
    this.physics.add.collider(lesma3,platforms);
    this.physics.add.collider(lesma4,platforms);
    this.physics.add.collider(Alien1,platforms);
    this.physics.add.collider(Alien1,player1);
    this.physics.add.collider(Alien2,platforms);
    this.physics.add.collider(Alien2,player1);
    this.physics.add.collider(player1,elevador);




    this.tweens.timeline({
        targets: lesma1.body.velocity,
        loop: -1,

        tweens: [
            { x:    100, y: 0, duration: 5000, ease: 'Stepped'  },
            { x:    -100, y: 0, duration: 5000, ease: 'Stepped' }

        ],


    });

    this.tweens.timeline({
        targets: lesma2.body.velocity,
        loop: -1,

        tweens: [
            { x:    100, y: 0, duration: 2000, ease: 'Stepped'  },
            { x:    -100, y: 0, duration: 2000, ease: 'Stepped' }

        ],


    });
    this.tweens.timeline({
        targets: lesma3.body.velocity,
        loop: -1,

        tweens: [
            { x:    100, y: 0, duration: 2500, ease: 'Stepped'  },
            { x:    -100, y: 0, duration: 2500, ease: 'Stepped' }

        ],


    });
    this.tweens.timeline({
        targets: lesma4.body.velocity,
        loop: -1,

        tweens: [
            { x:    100, y: 0, duration: 4500, ease: 'Stepped'  },
            { x:    -100, y: 0, duration: 4500, ease: 'Stepped' }

        ],


    });

    this.tweens.timeline({
        targets: elevador.body.velocity,
        loop: -1,

        tweens: [
            { x:    0, y: -100, duration: 2200, ease: 'Stepped'  },
            { x:    0, y:    0, duration: 1000, ease: 'Stepped' },
            { x:    0, y: 100, duration: 2200, ease: 'Stepped' },
            { x:    0, y:    0, duration: 1000, ease: 'Stepped' }

        ],



    });
    this.tweens.timeline({
        targets: nave.body.velocity,
        loop: -1,

        tweens: [
            { x:    100, y:    0, duration: 3200, ease: 'Stepped' },
            { x:    0, y:    0, duration: 1000, ease: 'Stepped' },
            { x:    -100, y:    0, duration: 3200, ease: 'Stepped' },
            { x:    0, y:    0, duration: 1000, ease: 'Stepped' }

        ],



    });

    this.tweens.timeline({
        targets: nave2.body.velocity,
        loop: -1,

        tweens: [
            { x:    -100, y:    0, duration: 3200, ease: 'Stepped' },
            { x:    0, y:    0, duration: 1000, ease: 'Stepped' },
            { x:    100, y:    0, duration: 3200, ease: 'Stepped' },
            { x:    0, y:    0, duration: 1000, ease: 'Stepped' }

        ],



    });




    this.cameras.main.startFollow(player1);

    projectiles = this.physics.add.group();
    this.physics.add.overlap(projectiles, platforms,removeLaser,null,this);
    this.physics.add.overlap(projectiles, barreira,removeLaser,null,this);
    this.physics.add.collider(player1, projectiles, hitProjectile, null, this);
    this.physics.add.collider(player1, lesma1, hitProjectile, null, this);
    this.physics.add.collider(player1, lesma2, hitProjectile, null, this);
    this.physics.add.collider(player1, lesma3, hitProjectile, null, this);
    this.physics.add.collider(player1, lesma4, hitProjectile, null, this);

    timedEvent = this.time.addEvent({ delay: 2500, callback: openLaser, callbackScope: this, loop: true });
    timedEvent = this.time.addEvent({ delay: 2000, callback: openLaser2, callbackScope: this, loop: true });
    timedEvent = this.time.addEvent({ delay: 3500, callback: openLaser3, callbackScope: this, loop: true });
    timedEvent = this.time.addEvent({ delay: 1025, callback: openLaser4, callbackScope: this, loop: true });



}


function update ()
{
    cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown)
    {
        player1.setVelocityX(-125);

        player1.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player1.setVelocityX(125);

        player1.anims.play('right', true);
    }
    else
    {
        player1.setVelocityX(0);

        player1.anims.play('turn');
    }

    if (cursors.up.isDown && player1.body.touching.down)
    {
        player1.setVelocityY(-330);
    }

    if(lesma1.body.velocity.x > 0){
        lesma1.anims.play('lesmaright', true)
    } else {
        lesma1.anims.play('lesmaleft', true)
    }

    if(lesma2.body.velocity.x > 0){
        lesma2.anims.play('lesmaright', true)
    } else {
        lesma2.anims.play('lesmaleft', true)
    }

    if(lesma3.body.velocity.x > 0){
        lesma3.anims.play('lesmaright', true)
    } else {
        lesma3.anims.play('lesmaleft', true)
    }

    if(lesma4.body.velocity.x > 0){
        lesma4.anims.play('lesmaright', true)
    } else {
        lesma4.anims.play('lesmaleft', true)
    }
    console.log(elevador.body.velocity.y);


}




function openLaser(){
    var proj = projectiles.create(2900, 665,'laser');
    proj.body.setAllowGravity(false);
    proj.setVelocity(-500,0);
    var proj = projectiles.create(3100, 665,'laser');
    proj.body.setAllowGravity(false);
    proj.setVelocity(500,0);

    var proj = projectiles.create(4600,480,'laser');
    proj.body.setAllowGravity(false);
    proj.setVelocity(500,0);

    var proj = projectiles.create(4500,90,'laser');
    proj.body.setAllowGravity(false);
    proj.setVelocity(500,0);




}
function openLaser2(){
    var proj = projectiles.create(5500,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);

    var proj = projectiles.create(5700,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);

    var proj = projectiles.create(5850,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);
}

function openLaser3(){

    var proj = projectiles.create(5800,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);

    var proj = projectiles.create(5650,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);

    var proj = projectiles.create(5350,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);

    var proj = projectiles.create(5900,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);
}

function openLaser4(){

    var proj = projectiles.create(5875,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);


    var proj = projectiles.create(5555,140,'laser2');
    proj.body.setAllowGravity(false);
    proj.setVelocity(0,500);
}



function removeLaser(projectile, platforms){
    projectile.disableBody(true,true);
}

function hitProjectile (player1, projectiles)
{
    death.play();
    this.physics.pause();
    player1.setTint(0xff0000);
    player1.anims.play('turn');
    gameOver = true;
    this.cameras.main.shake(500);
    this.time.delayedCall(250, function() {
        this.cameras.main.fade(250);
    }, [], this);
    this.time.delayedCall(500, function() {
        this.scene.restart();
    }, [], this);
}