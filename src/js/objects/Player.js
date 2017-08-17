class Player {
    constructor(args) {
        this.animations = args.animations;
        this.x = args.x;
        this.y = args.y;

        this.sprite = null;

        this.loadAnims();
    }

    loadAnims() {
        this.sprite = createSprite(this.x, this.y, this.width, this.height);

        this.sprite.addAnimation("moving", this.animations.moving.first, this.animations.moving.last);
        this.sprite.addAnimation("idle", this.animations.idle.first, this.animations.idle.last);
        
        this.sprite.changeAnimation("idle");
    }

    idle() {
        this.sprite.velocity.x = 0;
        this.sprite.changeAnimation("idle");
    }

    walk(speed, direction) {
        this.sprite.changeAnimation("moving");
        this.sprite.velocity.x = speed;
    }
}