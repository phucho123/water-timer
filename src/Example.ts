import { Clock } from './components/Clock'

export class Example extends Phaser.Scene {
    // private text: Phaser.GameObjects.Text
    // private text2: Phaser.GameObjects.Text
    // private container: Phaser.GameObjects.Container
    // private tween: Phaser.Tweens.Tween
    private clock: Clock
    constructor() {
        super()
    }

    preload() {
        ///
    }

    create() {
        this.clock = new Clock(this)
        ///
        // const rect = this.add.rectangle(0, 0, 64, 64, 0xffffff).setOrigin(0.5, 0.5)
        // this.container = this.add.container(0, 0)
        // this.container.setSize(rect.width, rect.height)

        // this.container.setPosition(this.container.width / 2, this.container.height / 2)
        // this.container.add(rect)

        // this.text = this.add
        //     .text(0, 0, '1', {
        //         fontSize: '64px',
        //         fontFamily: 'Arial',
        //         color: '#2d2d2d',
        //     })
        //     .setOrigin(0.5, 0.5)
        // this.text.setPosition(this.container.originX, this.container.originY)

        // this.text2 = this.add
        //     .text(0, 0, '2', {
        //         fontSize: '64px',
        //         fontFamily: 'Arial',
        //         color: '#2d2d2d',
        //     })
        //     .setOrigin(0.5, 0.5)
        // this.text2.setPosition(this.container.originX, this.container.originY + 64)
        // this.container.add(this.text)
        // this.container.add(this.text2)

        // this.add.tween({
        //     targets: this.text,
        //     y: -64,
        //     duration: 1000,
        //     onUpdate: () => {
        //         this.text2.y = this.text.y + 64
        //     },
        // })
    }

    update() {
        this.clock.update()
        ///
        // if (this.text.y <= -64) {
        //     this.text.setText(((parseInt(this.text.text) + 1) % 10).toString())
        //     this.add.tween({
        //         targets: this.text2,
        //         y: -64,
        //         duration: 1000,
        //         onUpdate: () => {
        //             this.text.y = this.text2.y + 64
        //         },
        //     })
        // } else if (this.text2.y <= -64) {
        //     this.text2.setText(((parseInt(this.text2.text) + 1) % 10).toString())
        //     this.add.tween({
        //         targets: this.text,
        //         y: -64,
        //         duration: 1000,
        //         onUpdate: () => {
        //             this.text2.y = this.text.y + 64
        //         },
        //     })
        // }
    }
}
