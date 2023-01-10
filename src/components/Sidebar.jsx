import styles from "./../styles/Sidebar.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoLibraryOutline } from "react-icons/io5";
import { AiFillPlusSquare } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.buttons}>
          <BiDotsHorizontalRounded
            style={{ color: "#eee", width: 30, height: 30 }}
          ></BiDotsHorizontalRounded>
          <div className={styles.icon}>
            <MdHomeFilled
              style={{ color: "white", width: 30, height: 30 }}
            ></MdHomeFilled>
            <Link key={"Home"} to={"Home"} className={styles.link}>
              {"Home"} 
            </Link>
          </div>
          <div className={styles.icon}>
            <FiSearch
              style={{ color: "white", width: 30, height: 30 }}
            ></FiSearch>
            <p>Search</p>
          </div>
          <div className={styles.icon}>
            <IoLibraryOutline
              style={{ color: "white", width: 30, height: 30 }}
            ></IoLibraryOutline>
            <p>Your library</p>
          </div>
        </div>
        <div className={styles.create}>
          <div className={styles.icon}>
            <AiFillPlusSquare
              style={{ color: "white", width: 30, height: 30 }}
              className={styles.icon1}
            ></AiFillPlusSquare>
            <p>Create a playlist</p>
          </div>
          <div className={styles.icon}>
            <FcLike
              style={{ color: "white", width: 30, height: 30 }}
            ></FcLike>
            <p>Liked songs</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};