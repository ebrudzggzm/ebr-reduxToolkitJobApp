import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header" >
     <div className="job">
        <h2>İş Takip</h2>
     </div>
     <nav className="jobLinks">
        <NavLink className= "Links" to={'/'}>İş Listesi</NavLink>
        <NavLink className= "Links" to={'/new'}>İş Ekle</NavLink>
     </nav>
    </header>
  )
}

export default Header
