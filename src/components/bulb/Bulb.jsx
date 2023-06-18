import offBulb from '../images/offBulb.png';
import onBulb from '../images/onBulb.png';
import { useState } from 'react';
function Bulb(props){

    let img1 = <img src={offBulb} alt="off bulb" height={500} />;
    let img2 = <img src={onBulb} alt="on bulb"  height={500} />;

    
    
    let [showImage, setImage] = useState(true)
    let btnText = showImage ? "Tun ON the light" : "Turn Off the light";
    let h1Txt = showImage ? "Please Turn on the light from button" : "Enogh Light!";

    const toggle = () => {
        setImage(!showImage)
    }

    return(
        <div>
            <h2>{h1Txt}</h2>
            {showImage ? img1 : img2}
            <br />

            <button onClick={toggle}>{btnText}</button>
            

        </div>
    )
}

export default Bulb;