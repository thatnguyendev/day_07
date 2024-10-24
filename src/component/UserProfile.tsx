import { useDispatch } from "react-redux"
import { clearUser } from "../features/userSlice"
import { AppDispatch } from "../store/store"

interface IUserProfileProps {
    userName: string
    email: string
}

const UserProfile = ({ userName, email }: IUserProfileProps) => {

    const dispatch = useDispatch<AppDispatch>()

    const handleLogout = () => {
        dispatch(clearUser())
    }

    return (
        <div>UserProfile
            <p>email: {email}</p>
            <p>userName: {userName}</p>
            <button onClick={handleLogout}>logout</button>
        </div>

    )
}

export default UserProfile