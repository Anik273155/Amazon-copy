
//  import SearchIcon from "@material-ui/icons/Search";
 import ExpandLessIcon from "@material-ui/icons/ExpandLess";
 import "./css/Footer.css";
const Footer=()=>{
    const HandleClick=()=>{
        window.scrollTo(0,0);

    };

    return (
        <>
        <div class="Footer">
            <a onClick={HandleClick}>
            <div className="Footer_BackToTop">
                <ExpandLessIcon className="Footer_BackToTopText"/>



               
                </div>
            </a>
 <div className="FooterVerticalRow">
    <div className="FooterVerticalCol">
        <div className="FooterVerticalColHead"><h2>Get To Know us</h2> </div>
        <br/>
        <ul>
            <li>About</li>
            <li >Career</li>
            <li>Services</li>
            <li>Amazon Cares</li>
            <li>Gift Products</li>

        </ul>
    </div>
 
 <div className="FooterVerticalCol">
        <div className="FooterVerticalColHead"><h2>Connect With Us </h2></div>
        <br/>
        <ul>
            <li>Instagram</li>
            <li >Twitter</li>
            <li>Facebook</li>
            <li>Twitch</li>
           

        </ul>
    </div>
    <div className="FooterVerticalCol">
        <div className="FooterVerticalColHead"><h2>Make Money</h2> </div>
        <br/>
        <ul>
            <li> Amazon Pay</li>
            <li >Sell On Amazon</li>
            <li>Fullfillment by Amazon</li>
            <li>Become an affiliate</li>
           

        </ul>
    </div>
               
    </div>  
        </div>
        </>
    )
}
export default Footer;