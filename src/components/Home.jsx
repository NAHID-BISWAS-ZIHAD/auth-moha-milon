import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProviders";
const Home = () => {
    const textAuth = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2 className="text-xl">This is Home: {textAuth.name}</h2>
        </div>
    );
};

export default Home;