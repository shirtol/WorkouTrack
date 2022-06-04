import { useFirebase } from "../../context/AuthContext";

const Login = () => {
    const { signIn, currentUser } = useFirebase();

    console.log(currentUser);

    return (
        <div>
            <button className="button" onClick={signIn}>
                <i className="fab fa-google"></i>Sign in with google
            </button>
        </div>
    );
};

export default Login;
