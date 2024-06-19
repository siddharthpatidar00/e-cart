import '../App.css';

function Header(props) {
    return (
        <div classNameName='flex shopping-cart'>
            <div onClick={() => props.handleShow(false)}>Home</div>
            <div onClick={() => props.handleShow(true)} >Cart
                <sup>{props.count}</sup>
            </div>
        </div >
    )
}

export default Header;
