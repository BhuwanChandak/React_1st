// props is like an object
function Header(props)
{
    return(
        <div>
            <h1> Header {props.name} </h1>
        </div>
    )
}

// In HTML code if we are writing the Javasript it needs to be written inside the {}.
export function Footer(props)
{
    return(
        <div>
            <h1> Footer {props.brand}</h1>
        </div>
    )
}

export default Header;