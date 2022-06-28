// Don't forget the import
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({user, setUser}) {
  //add the following function 
  function handleLogOut(){
    //Delegate to the user service
    userService.logOut()
    //Update state will also cause a re render
    setUser(null)
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Loggity Logg Out Son!</Link>
      
    </nav>
  );
}