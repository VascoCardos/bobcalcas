
window.onload = function(){
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

    scene: [
            menu,
            nivel1,
            nivel2
        ]
    }
    var game = new Phaser.Game(config);
};


//variaveis

let cursors;
var platforms;
var deathPlatforms;
var spaceships;
var player;
var arvores;
var player1;
var barreira;
var lesma1;
var lesma2;
var lesma3;
var lesma4;
var gruta;
var Alien1;
var Alien2;
var projectiles;
var timedEvent;
var timedEvent2;
var timedEvent3;
var elevador;
var santuario;
var predio;
var nave;
var nave2;
var death;
var pew;
var pew3;





class menu extends Phaser.Scene{
    constructor() {
        super("Menu");
    }

    preload(){
        this.load.image('menu', 'assets/mainmenu.png');
        this.load.image('button1', 'assets/button1.png');
        this.load.image('button2', 'assets/button2.png');
        this.load.image('button3', 'assets/button3.png');
        this.load.image('button4', 'assets/button4.png');
    }

    create(){
        let bg = this.add.image(0,0,'menu').setOrigin(0,0);
        this.button1 = this.add.sprite(420, 600, 'button1').setScale(0.5).setInteractive();
        this.button2 = this.add.sprite(640, 600, 'button2').setScale(0.5).setInteractive();
        this.button3 = this.add.sprite(860, 600, 'button3').setScale(0.5).setInteractive();
        this.button4 = this.add.sprite(1080, 600, 'button4').setScale(0.5).setInteractive();
        this.button1.on('pointerdown', function(){
            this.scene.start("Nivel1");
        });
        this.button2.on('pointerdown', function(){
            this.scene.start("Nivel2");
        });
        /*this.button3.on('pointerup', function(){
            this.scene.start("SelectMenu");
        });
        this.button4.on('pointerup', function(){
            this.scene.start("SelectMenu");
        });*/
    }
    update(){

    }
}


class nivel1 extends Phaser.Scene{
    constructor() {
        super("Nivel1");

    }

    preload(){

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

    create(){




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

        // Posição inicial: 300/600
        // 1 obstaculo:2300/200
        // 2 obstaculo: 5200/600
        // final : 6300/600

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
        elevador = this.physics.add.image(4935, 700, 'elevador').setScale(0.2).setImmovable(true);

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
        this.physics.add.overlap(projectiles, platforms,this.removeLaser,null,this);
        this.physics.add.overlap(projectiles, barreira,this.removeLaser,null,this);
        this.physics.add.collider(player1, projectiles, this.hitProjectile, null, this);
        this.physics.add.collider(player1, lesma1, this.hitProjectile, null, this);
        this.physics.add.collider(player1, lesma2, this.hitProjectile, null, this);
        this.physics.add.collider(player1, lesma3, this.hitProjectile, null, this);
        this.physics.add.collider(player1, lesma4, this.hitProjectile, null, this);

        timedEvent = this.time.addEvent({ delay: 2500, callback: this.openLaser, callbackScope: this, loop: true });
        timedEvent = this.time.addEvent({ delay: 2000, callback: this.openLaser2, callbackScope: this, loop: true });
        timedEvent = this.time.addEvent({ delay: 3500, callback: this.openLaser3, callbackScope: this, loop: true });
        timedEvent = this.time.addEvent({ delay: 1025, callback: this.openLaser4, callbackScope: this, loop: true });

        cursors = this.input.keyboard.createCursorKeys();


    }

    update(){


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




    }






    openLaser(){
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
    openLaser2(){
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

    openLaser3(){

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

    openLaser4(){

        var proj = projectiles.create(5875,140,'laser2');
        proj.body.setAllowGravity(false);
        proj.setVelocity(0,500);


        var proj = projectiles.create(5555,140,'laser2');
        proj.body.setAllowGravity(false);
        proj.setVelocity(0,500);
    }



    removeLaser(projectile, platforms){
        projectile.disableBody(true,true);
    }

    hitProjectile (player1, projectiles)
    {
        death.play();
        this.physics.pause();
        player1.setTint(0xff0000);
        player1.anims.play('turn');
        this.gameOver = true;
        this.cameras.main.shake(500);
        this.time.delayedCall(250, function() {
            this.cameras.main.fade(250);
        }, [], this);
        this.time.delayedCall(500, function() {
            this.scene.restart();
        }, [], this);
    }

}

class nivel2 extends Phaser.Scene{
    constructor() {
        super("Nivel2");
    }

    preload ()
    {
        cursors = this.input.keyboard.createCursorKeys();
        this.load.image('background', 'assets/background.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('alienship','assets/spaceship2.png');
        this.load.image('collider', 'assets/collider.png');
        this.load.image('colliderGround', 'assets/colliderGround.png');
        this.load.image('smallCollider', 'assets/smallCollider.png');
        this.load.image('smallShip', 'assets/small.png');
        this.load.image('laser', 'assets/projectile.png');
        this.load.image('turretLaser', 'assets/proj_2.png');
        this.load.image('invwall', 'assets/invwall.png');
        this.load.image('turret', 'assets/turretShip.png');
        this.load.image('turret_r', 'assets/turretShip_r.png');
        this.load.image('mothership', 'assets/mothership.png');
        this.load.image('mscollider1', 'assets/msCollider1.png');
        this.load.image('mscollider2', 'assets/msCollider2.png');
        this.load.image('mscollider3', 'assets/msCollider3.png');
        this.load.image('platship', 'assets/platship.png');
        this.load.spritesheet('bob',
            'assets/BobCinto.png',
            { frameWidth: 65, frameHeight: 130 }
        );
        this.load.audio('pew', 'assets/pew.mp3');
        this.load.audio('pew3x', 'assets/pew3.mp3');
        this.load.audio('death', 'assets/deathSound.mp3');
    }

    create ()
    {
        let bg = this.add.image(0,0,'background').setOrigin(0,0);
        let mother_bg = this.add.image(750, 150, 'mothership');
        this.cameras.main.setBounds(0, 0, bg.displayWidth, bg.displayHeight);
        platforms = this.physics.add.staticGroup();
        deathPlatforms = this.physics.add.staticGroup();
        spaceships = this.physics.add.staticGroup();
        platforms.create(2, 1200, 'invwall');
        platforms.create(1498, 1200, 'invwall');
        platforms.create(750, 2380, 'colliderGround').setScale(2).refreshBody();





        spaceships.create(600, 2190, 'alienship');
        platforms.create(600, 2190, 'collider');

        spaceships.create(50, 2020, 'alienship');
        platforms.create(50, 2020, 'collider');

        spaceships.create(700, 1925, 'alienship');
        platforms.create(700, 1925, 'collider');

        spaceships.create(1100, 2020, 'alienship');
        platforms.create(1100, 2020, 'collider');

        spaceships.create(150, 1730, 'alienship');
        platforms.create(150, 1730, 'collider');

        spaceships.create(1175, 1750, 'alienship');
        platforms.create(1175, 1750, 'collider');

        spaceships.create(600, 1550, 'alienship');
        platforms.create(600, 1550, 'collider');

        spaceships.create(600, 1550, 'alienship');
        platforms.create(600, 1550, 'collider');

        spaceships.create(750, 950, 'alienship');
        platforms.create(750, 950, 'collider');

        spaceships.create(200, 950, 'alienship');
        platforms.create(200, 950, 'collider');

        spaceships.create(1300, 950, 'alienship');
        platforms.create(1300, 950, 'collider');

        spaceships.create(500, 780, 'smallShip');
        platforms.create(500, 780, 'smallCollider');

        spaceships.create(1000, 780, 'smallShip');
        platforms.create(1000, 780, 'smallCollider');

        /*spaceships.create(750, 605, 'smallShip');
        platforms.create(750, 605, 'smallCollider');*/

        spaceships.create(500, 430, 'smallShip');
        platforms.create(500, 430, 'smallCollider');

        spaceships.create(1000, 430, 'smallShip');
        platforms.create(1000, 430, 'smallCollider');

        platforms.create(630, 250, 'mscollider2');
        platforms.create(870, 250, 'mscollider2');
        platforms.create(750, 170, 'mscollider3');
        platforms.create(750, 170, 'platship');
        platforms.create(595, 140, 'mscollider1');
        platforms.create(905, 140, 'mscollider1');

        var ship = this.physics.add.image(75, 1400, 'smallCollider')
            .setImmovable(true)
            .setVelocity(0,0);
        ship.body.setAllowGravity(false);

        var shipImage = this.physics.add.image(75, 1400, 'smallShip')
            .setImmovable(true)
            .setVelocity(0,0);
        shipImage.body.setAllowGravity(false);

        var ship2 = this.physics.add.image(1350, 1230, 'smallCollider')
            .setImmovable(true)
            .setVelocity(0,0);
        ship2.body.setAllowGravity(false);

        var shipImage2 = this.physics.add.image(1350, 1230, 'smallShip')
            .setImmovable(true)
            .setVelocity(0,0);
        shipImage2.body.setAllowGravity(false);

        var ship3 = this.physics.add.image(75, 1070, 'smallCollider')
            .setImmovable(true)
            .setVelocity(0,0);
        ship3.body.setAllowGravity(false);

        var shipImage3 = this.physics.add.image(75, 1070, 'smallShip')
            .setImmovable(true)
            .setVelocity(0,0);
        shipImage3.body.setAllowGravity(false);

        var ship4 = this.physics.add.image(750, 780, 'smallCollider')
            .setImmovable(true)
            .setVelocity(0,0);
        ship4.body.setAllowGravity(false);

        var shipImage4 = this.physics.add.image(750, 780, 'smallShip')
            .setImmovable(true)
            .setVelocity(0,0);
        shipImage4.body.setAllowGravity(false);

        var ship5 = this.physics.add.image(875,1600, 'smallCollider')
            .setImmovable(true)
            .setVelocity(0,0);
        ship5.body.setAllowGravity(false);

        var shipImage5 = this.physics.add.image(875,1600, 'smallShip')
            .setImmovable(true)
            .setVelocity(0,0);
        shipImage5.body.setAllowGravity(false);

        spaceships.create(75, 680, 'turret');
        deathPlatforms.create(75,680, 'smallCollider');

        spaceships.create(1425, 500, 'turret_r');
        deathPlatforms.create(1425,500, 'smallCollider');

        pew=this.sound.add('pew', {volume: 0.1});
        death = this.sound.add('death', {volume: 0.2});
        pew3= this.sound.add('pew3x', {volume: 0.2});

        player=this.physics.add.sprite(300,2300, 'bob');    //inicial:300,2300 "checkpoint":750,900
        player.setBounce(0.05);
        player.scale=0.5;

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('bob', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'bob', frame: 4 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('bob', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, ship);
        this.physics.add.collider(player, ship2);
        this.physics.add.collider(player, ship3);
        this.physics.add.collider(player, ship4);
        this.physics.add.collider(player, ship5);
        var cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }

        this.tweens.timeline({
            targets: ship.body.velocity,
            loop: -1,
            tweens: [
                { x:    150, y: 0, duration: 9000, ease: 'Stepped' },
                { x:    -150, y: 0, duration: 9000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: shipImage.body.velocity,
            loop: -1,
            tweens: [
                { x:    150, y: 0, duration: 9000, ease: 'Stepped' },
                { x:    -150, y: 0, duration: 9000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: ship2.body.velocity,
            loop: -1,
            tweens: [
                { x:    -150, y: 0, duration: 9000, ease: 'Stepped' },
                { x:    150, y: 0, duration: 9000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: shipImage2.body.velocity,
            loop: -1,
            tweens: [
                { x:    -150, y: 0, duration: 9000, ease: 'Stepped' },
                { x:    150, y: 0, duration: 9000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: ship3.body.velocity,
            loop: -1,
            tweens: [
                { x:    150, y: 0, duration: 9000, ease: 'Stepped' },
                { x:    -150, y: 0, duration: 9000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: shipImage3.body.velocity,
            loop: -1,
            tweens: [
                { x:    150, y: 0, duration: 9000, ease: 'Stepped' },
                { x:    -150, y: 0, duration: 9000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: ship4.body.velocity,
            loop: -1,
            tweens: [
                { x:   0 , y: -50, duration: 8000, ease: 'Stepped' },
                { x:    0, y: 50, duration: 8000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: shipImage4.body.velocity,
            loop: -1,
            tweens: [
                { x:    0, y: -50, duration: 8000, ease: 'Stepped' },
                { x:    0, y: 50, duration: 8000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: ship5.body.velocity,
            loop: -1,
            tweens: [
                { x:   50 , y: 0, duration: 5000, ease: 'Stepped' },
                { x:    -50, y: 0, duration: 5000, ease: 'Stepped' }
            ]
        });

        this.tweens.timeline({
            targets: shipImage5.body.velocity,
            loop: -1,
            tweens: [
                { x:   50 , y: 0, duration: 5000, ease: 'Stepped' },
                { x:    -50, y: 0, duration: 5000, ease: 'Stepped' }
            ]
        });





        //this.physics.add.overlap(player, stars, collectStar, null, this);

        this.cameras.main.startFollow(player);

        projectiles = this.physics.add.group();
        this.physics.add.overlap(projectiles, platforms,this.removeLaser,null,this);
        this.physics.add.collider(player, projectiles, this.hitProjectile, null, this);
        this.physics.add.collider(player, deathPlatforms, this.hitProjectile, null, this);

        timedEvent2 = this.time.addEvent({ delay: 1000, callback: this.openLaser, callbackScope: this, loop: true });
        timedEvent3 = this.time.addEvent({ delay: 1500, callback: this.turretFire, callbackScope: this, loop: true });



    }

    update ()
    {
        var cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-500);
        }
    }


    hitProjectile (player, projectile)
    {
        death.play();
        projectile.disableBody(true,true);
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.gameOver = true;
        this.cameras.main.shake(500);
        this.time.delayedCall(250, function() {
            this.cameras.main.fade(250);
        }, [], this);
        this.time.delayedCall(500, function() {
            this.scene.restart();
        }, [], this);
    }

    openLaser(){
        var proj = projectiles.create(600, 1620,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(50, 2090,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(700, 1995,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(1100, 2090,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(150, 1800,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(1175, 1820,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(600, 2260,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(1300, 1020,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(200, 1020,'laser');
        proj.setVelocity(0,300);
        var proj = projectiles.create(750, 1020,'laser');
        proj.setVelocity(0,300);
        pew.play();


    }

    turretFire(){
        var proj = projectiles.create(95, 650,'turretLaser');
        proj.body.setAllowGravity(false);
        proj.setVelocity(500,0);
        var proj = projectiles.create(125, 650,'turretLaser');
        proj.body.setAllowGravity(false);
        proj.setVelocity(500,0);
        var proj = projectiles.create(155, 650,'turretLaser');
        proj.body.setAllowGravity(false);
        proj.setVelocity(500,0);

        var proj = projectiles.create(1425, 470,'turretLaser');
        proj.body.setAllowGravity(false);
        proj.setVelocity(-500,0);
        var proj = projectiles.create(1405, 470,'turretLaser');
        proj.body.setAllowGravity(false);
        proj.setVelocity(-500,0);
        var proj = projectiles.create(1385, 470,'turretLaser');
        proj.body.setAllowGravity(false);
        proj.setVelocity(-500,0);

        pew3.play();
    }


    removeLaser(projectile, platforms){
        projectile.disableBody(true,true);
    }
}





