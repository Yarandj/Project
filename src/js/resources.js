import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import mikaelImage from '../images/Mikael1.png'

const Resources = {
    Player: new ImageSource(mikaelImage)
}
const ResourceLoader = new Loader([Resources.Player])

export { Resources, ResourceLoader }