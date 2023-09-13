class Tile extends Phaser.GameObjects.Container {
    private text: Phaser.GameObjects.Text
    private text2: Phaser.GameObjects.Text
    // private tween: Phaser.Tweens.Tween
    private tileWidth: number
    private tileHeight: number
    constructor(scene: Phaser.Scene, index: number, tileWidth: number, tileHeight: number) {
        super(scene)
        this.tileWidth = tileWidth
        this.tileHeight = tileHeight
        this.create(index)
    }

    create(index: number) {
        const rect = this.scene.add
            .rectangle(0, 0, this.tileWidth, this.tileHeight, 0xffffff)
            .setOrigin(0.5, 0.5)
            .setStrokeStyle(2, 0x2d2d2d)
        this.setSize(rect.width, rect.height)
        this.setPosition(
            (this.width / 2) * index - this.tileWidth * 2,
            this.height / 2 - this.tileHeight / 2
        )
        this.add(rect)

        this.text = this.scene.add
            .text(0, 0, '0', {
                fontSize: `${this.tileHeight}px`,
                fontFamily: 'Arial',
                color: '#2d2d2d',
            })
            .setOrigin(0.5, 0.5)
        this.text.setPosition(0, 0)

        this.text2 = this.scene.add
            .text(0, 0, '1', {
                fontSize: `${this.tileHeight}px`,
                fontFamily: 'Arial',
                color: '#2d2d2d',
            })
            .setOrigin(0.5, 0.5)
        this.text2.setPosition(0, this.tileHeight)
        this.add(this.text)
        this.add(this.text2)

        // this.scene.add.tween({
        //     targets: this.text,
        //     y: -this.tileHeight,
        //     duration: 1000,
        //     onUpdate: () => {
        //         this.text2.y = this.text.y + this.tileHeight
        //     },
        // })
    }

    update() {
        if (this.text.y <= -this.tileHeight) {
            this.text.setText(((parseInt(this.text2.text) + 1) % 10).toString())
            this.text.y = this.text2.y + this.tileHeight
            // this.scene.add.tween({
            //     targets: this.text2,
            //     y: -this.tileHeight,
            //     duration: 1000,
            //     onUpdate: () => {
            //         this.text.y = this.text2.y + this.tileHeight
            //     },
            // })
        } else if (this.text2.y <= -this.tileHeight) {
            this.text2.setText(((parseInt(this.text.text) + 1) % 10).toString())
            this.text2.y = this.text.y + this.tileHeight
            // this.scene.add.tween({
            //     targets: this.text,
            //     y: -this.tileHeight,
            //     duration: 1000,
            //     onUpdate: () => {
            //         this.text2.y = this.text.y + this.tileHeight
            //     },
            // })
        }
    }

    scrollUp() {
        this.text.y -= 2
        this.text2.y -= 2
        if (this.text.y <= -this.tileHeight) {
            this.text.setText(((parseInt(this.text2.text) + 1) % 10).toString())
            this.text.y = this.text2.y + this.tileHeight
        } else if (this.text2.y <= -this.tileHeight) {
            this.text2.setText(((parseInt(this.text.text) + 1) % 10).toString())
            this.text2.y = this.text.y + this.tileHeight
        }
    }
    scrollDown() {
        this.text.y += 2
        this.text2.y += 2
        if (this.text.y >= this.tileHeight) {
            this.text.setText(((parseInt(this.text2.text) - 1 + 10) % 10).toString())
            this.text.y = this.text2.y - this.tileHeight
        } else if (this.text2.y >= this.tileHeight) {
            this.text2.setText(((parseInt(this.text.text) + 10 - 1) % 10).toString())
            this.text2.y = this.text.y - this.tileHeight
        }
    }
}

export class Clock extends Phaser.GameObjects.Container {
    private tileWidth = 300
    private tileHeight = 300
    private keyW: Phaser.Input.Keyboard.Key | undefined
    private keyQ: Phaser.Input.Keyboard.Key | undefined
    private keyE: Phaser.Input.Keyboard.Key | undefined
    private keyR: Phaser.Input.Keyboard.Key | undefined
    private keyA: Phaser.Input.Keyboard.Key | undefined
    private keyS: Phaser.Input.Keyboard.Key | undefined
    private keyD: Phaser.Input.Keyboard.Key | undefined
    private keyF: Phaser.Input.Keyboard.Key | undefined
    constructor(scene: Phaser.Scene) {
        super(scene)
        this.create()
        this.scene.add.existing(this)
    }

    create() {
        this.setSize(4 * this.tileWidth, this.tileHeight)
        this.add(new Tile(this.scene, 1, this.tileWidth, this.tileHeight))
        this.add(new Tile(this.scene, 3, this.tileWidth, this.tileHeight))
        this.add(new Tile(this.scene, 5, this.tileWidth, this.tileHeight))
        this.add(new Tile(this.scene, 7, this.tileWidth, this.tileHeight))
        this.setPosition(this.scene.sys.canvas.width / 2, this.scene.sys.canvas.height / 2)
        this.keyQ = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.Q)
        this.keyW = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.keyE = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.E)
        this.keyR = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        this.keyA = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.keyS = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.keyD = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        this.keyF = this.scene.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.F)
    }

    update() {
        //scroll up
        if (this.keyQ?.isDown) {
            const tile = this.getAt(0) as Tile
            tile.scrollUp()
        }
        if (this.keyW?.isDown) {
            const tile = this.getAt(1) as Tile
            tile.scrollUp()
        }
        if (this.keyE?.isDown) {
            const tile = this.getAt(2) as Tile
            tile.scrollUp()
        }
        if (this.keyR?.isDown) {
            const tile = this.getAt(3) as Tile
            tile.scrollUp()
        }
        //scroll down
        if (this.keyA?.isDown) {
            const tile = this.getAt(0) as Tile
            tile.scrollDown()
        }
        if (this.keyS?.isDown) {
            const tile = this.getAt(1) as Tile
            tile.scrollDown()
        }
        if (this.keyD?.isDown) {
            const tile = this.getAt(2) as Tile
            tile.scrollDown()
        }
        if (this.keyF?.isDown) {
            const tile = this.getAt(3) as Tile
            tile.scrollDown()
        }
    }
}
