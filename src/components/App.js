import Login from "./Login";
import { useEffect , Fragment} from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import LoadingBar from "react-redux-loading-bar";
import LeaderBoard from "./LeaderBoard";
import NavBar from "./NavBar";
import NotFound404 from "./NotFound404";
import { useNavigate , useLocation} from 'react-router-dom'

function App(props) {


  console.log ("app props", props);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect (() => {
    props.dispatch(handleInitialData());

    // if not logged in redirect to login page
    if (props.authedUser === null && location.pathname !== "/login") {
      navigate("/login");
    }
    


  },[]);
  return (
    <Fragment>
      <LoadingBar/>
      { props.authedUser && <NavBar/>}

        <div className="flex flex-col items-center mt-20 bg-white">

      {
        props.loading === true ? null : (
          <Routes>
            <Route path="/login" exact element={<Login/>} />
            <Route path="/" exact element={<Home/>} />
            <Route path="/question/:id" element={<Question/>} />
            <Route path="/add" exact element={<NewQuestion/>} />
            <Route path="/leaderboard" exact element={<LeaderBoard/>} />
            <Route path="/404" exact element={<NotFound404/>} status={404} />
            <Route path="*" element={<NotFound404 />} />


          </Routes>
        )
      }
      </div>
    </Fragment>
  );
}

const mapStateToProps = ( { users , authedUser}) => (
  {
    loading: users && Object.keys(users).length === 0,
    authedUser
  }
) ;
export default connect(mapStateToProps)(App);
