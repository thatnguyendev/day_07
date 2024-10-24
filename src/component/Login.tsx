import { FormEventHandler, useRef } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { setUser } from "../features/userSlice"



const Login = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)

    //cho phép tương tác vs action
    const dispatch = useDispatch<AppDispatch>()


    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const email = emailRef.current?.value as string
        const name = nameRef.current?.value as string

        dispatch(setUser({ name, email }))

    }

    return (
        <div>Login

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label><br />
                <input type="text" ref={emailRef} /><br />
                <label htmlFor="">Name</label><br />
                <input type="text" ref={nameRef} /><br />
                <button type="submit">login</button>
            </form>
        </div>

    )
}

export default Login