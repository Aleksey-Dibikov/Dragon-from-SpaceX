import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/Auth/AuthSlice";
import Form from "./Form/Form";


function SignUp() {
    const dispatch = useDispatch();

    function handleRegister (email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
            })
            .catch((error) => {
                console.error(error)
            })
    }


    return (
        <Form
            title='Register'
            handleSubmit={handleRegister}
        />
    )
}

export default SignUp;