var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 750,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var platfotms;
var deathPlatForms;
var spaceships;
var player;
var gameover = false;
var timedEvent;
var timedEvent2;
var projectiles;
var pew;
var pew3;
var death;

function preload ()
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
    this.load.image('mscollider1', 'assets/mscollider1.png');
    this.load.image('mscollider2', 'assets/mscollider2.png');
    this.load.image('mscollider3', 'assets/mscollider3.png');
    this.load.spritesheet('bob',
        'assets/BobCinto.png',
        { frameWidth: 65, frameHeight: 130 }
    );
    this.load.audio('pew', 'assets/pew.mp3');
    this.load.audio('pew3x', 'assets/pew3.mp3');
    this.load.audio('death', 'assets/deathSound.mp3');
}

function create ()
{
    let bg = this.add.image(0,0,'background').setOrigin(0,0);
    let mother_bg = this.add.image(750, 200, 'mothership');
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

    spaceships.create(875, 1600, 'smallShip');
    platforms.create(875, 1600, 'smallCollider');

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

    spaceships.create(750, 605, 'smallShip');
    platforms.create(750, 605, 'smallCollider');

    spaceships.create(500, 430, 'smallShip');
    platforms.create(500, 430, 'smallCollider');

    spaceships.create(1000, 430, 'smallShip');
    platforms.create(1000, 430, 'smallCollider');


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

    spaceships.create(75, 680, 'turret');
    deathPlatforms.create(75,680, 'smallCollider');

    spaceships.create(1425, 500, 'turret_r');
    deathPlatforms.create(1425,500, 'smallCollider');

    pew=this.sound.add('pew', {volume: 0.1});
    death = this.sound.add('death', {volume: 0.2});
    pew3= this.sound.add('pew3x', {volume: 0.2});

    player=this.physics.add.sprite(750,900, 'bob');
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




    //this.physics.add.overlap(player, stars, collectStar, null, this);

    this.cameras.main.startFollow(player);

    projectiles = this.physics.add.group();
    this.physics.add.overlap(projectiles, platforms,removeLaser,null,this);
    this.physics.add.collider(player, projectiles, hitProjectile, null, this);
    this.physics.add.collider(player, deathPlatforms, hitProjectile, null, this);

    timedEvent = this.time.addEvent({ delay: 1000, callback: openLaser, callbackScope: this, loop: true });
    timedEvent2 = this.time.addEvent({ delay: 500, callback: turretFire, callbackScope: this, loop: true });



}

function update ()
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
        player.setVelocityY(-330);
    }
}


function hitProjectile (player, projectile)
{
    death.play();
    projectile.disableBody(true,true);
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
    this.cameras.main.shake(500);
    this.time.delayedCall(250, function() {
        this.cameras.main.fade(250);
    }, [], this);
    this.time.delayedCall(500, function() {
        this.scene.restart();
    }, [], this);
}

function openLaser(){
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

function turretFire(){
    var proj = projectiles.create(95, 650,'turretLaser');
    proj.setVelocity(3000,0);
    var proj = projectiles.create(115, 650,'turretLaser');
    proj.setVelocity(3000,0);
    var proj = projectiles.create(135, 650,'turretLaser');
    proj.setVelocity(3000,0);

    var proj = projectiles.create(1425, 470,'turretLaser');
    proj.setVelocity(-3000,0);
    var proj = projectiles.create(1405, 470,'turretLaser');
    proj.setVelocity(-3000,0);
    var proj = projectiles.create(1385, 470,'turretLaser');
    proj.setVelocity(-3000,0);

    pew3.play();
}


function removeLaser(projectile, platforms){
    projectile.disableBody(true,true);
}

