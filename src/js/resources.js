import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import playerImage from '../images/SpaceshipOld.png'
import bulletImage from '../images/Bullet.png'
import enemyImage from '../images/Enemy.png'
import backgroundImage from '../images/Background.jpg'
import movingBackgroundImage from '../images/Background.jpg'

const Resources = {
    Player: new ImageSource(playerImage),
    Bullet: new ImageSource(bulletImage),
    Enemy: new ImageSource(enemyImage),
    Background: new ImageSource(backgroundImage),
    MovingBackground: new ImageSource(movingBackgroundImage)
}
const ResourceLoader = new Loader([Resources.Player, Resources.Bullet, Resources.Enemy, Resources.Background, Resources.MovingBackground])

export { Resources, ResourceLoader }