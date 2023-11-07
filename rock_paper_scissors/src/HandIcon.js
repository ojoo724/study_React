import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const Images = {
    rock : rockImg,
    scissor : scissorImg,
    paper : paperImg,
}

function HandIcon({value, className = ''}){
    const src = Images[value]
    return <img className={className} src={src} alt={value} />
}

export default HandIcon;