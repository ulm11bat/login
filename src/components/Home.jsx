import "../styles/Home.css";
import { TfiArrowLeft } from "react-icons/tfi";
import { TfiArrowRight } from "react-icons/tfi";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl =
"http://localhost:8080/playlists";

export const Home = () => {
  const [_data, setData] = useState();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <>
      <div className="container">
        <div className="cont">
          <div className="header">
            <div className="top">
              <div>
                <TfiArrowLeft
                  style={{ width: 35, height: 35 }}
                ></TfiArrowLeft>
                <TfiArrowRight
                  style={{ width: 35, height: 35 }}
                ></TfiArrowRight>
              </div>
              <div className="buttonTop">
                <Link to={"/signup"}className="login"><b>Sign up</b></Link>
                <Link to={"/login"}className="signup"><b>Log in</b></Link>
              </div>
            </div>
          </div>
          <div className="toppart">
            <h2 className="afternoon">Focus</h2>
          </div>
          <div className="songs">
            <h2 className="afternoon">Spotify Playlists</h2>
          </div>
          <div className="songs">
            <h2 className="afternoon">Recommended Radio</h2>
          </div>
        </div>
      </div>
    </>
  );
};