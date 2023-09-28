import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    return (
        <div>
            <h2 className="text-3xl">This is Home for: {authInfo.name}</h2>
        </div>
    );
};

export default Home;