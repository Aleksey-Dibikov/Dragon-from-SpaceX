import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../redux/Auth/AuthSlice";
import LogInForm from "./Form/LogInForm";

function LogIn() {
    const dispatch = useDispatch();
    
    function handleLog(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
            })
        .catch()
    }

    return (
        <LogInForm
            title='Log in'
            handleSubmit={handleLog}
        />
    )
}

export default LogIn;