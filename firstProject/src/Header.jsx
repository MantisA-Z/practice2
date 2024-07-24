function Header(props){
    let {websiteName} = props;
    return(
        <header>
            <img src="../public/images.jpeg" alt="" />
            {websiteName}
        </header>
    )
}

export default Header;