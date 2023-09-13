import Phaser from 'phaser'
import { Example } from './Example'

export const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example,
}
