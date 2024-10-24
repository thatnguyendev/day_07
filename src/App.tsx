
import { useSelector } from "react-redux"
import { RootState } from "./store/store"
import UserProfile from "./component/UserProfile"
import Login from "./component/Login"

const App = () => {

  const user = useSelector((state: RootState) => state.user)

  return (
    <div>App
      {user.name ? (<UserProfile userName={user.name} email={user.email}></UserProfile>) : (<Login></Login>)}
    </div>


  )
}

export default App