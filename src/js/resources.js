import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import playerImage from '../images/SpaceshipOld.png'
import bulletImage from '../images/Bullet.png'
import enemyImage from '../images/Enemy.png'
import backgroundImage from '../images/Background2.jpg'
import movingBackgroundImage from '../images/Background2.jpg'
import settingsBackgroundImage from "../images/SettingsBackground.png"
import gameOverBackgroundImage from "../images/GameOverBackground.png"
import coinImage from '../images/Coin.png'

const Resources = {
    Player: new ImageSource(playerImage),
    Bullet: new ImageSource(bulletImage),
    Enemy: new ImageSource(enemyImage),
    Background: new ImageSource(backgroundImage),
    MovingBackground: new ImageSource(movingBackgroundImage),
    SettingsBackground: new ImageSource(settingsBackgroundImage),
    GameOverBackground: new ImageSource(gameOverBackgroundImage),
    Coin: new ImageSource(coinImage)
}
const ResourceLoader = new Loader([Resources.Player, Resources.Bullet, Resources.Enemy, Resources.Background, Resources.MovingBackground, Resources.SettingsBackground,Resources.GameOverBackground, Resources.Coin])

export { Resources, ResourceLoader }