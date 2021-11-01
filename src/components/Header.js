import Button from "./Button"

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={showAdd? 'green':'red'} onClick={onAdd} text={showAdd ? 'Close' : 'Add'}/>
        </header>
    )
}
// const headingStyle = {
//     color: 'red', 
//     backgroundColor:'black'
// }

export default Header
