import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "./Api/PostApi";
//------------------------------------------------------------
export default function Post(props) {
  let [posts, setPost] = useState([]);
  let getAllUsers = async () => {
    try {
      let res = await postApi.get();
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  //---------------------------
  let navigate = useNavigate();
  let { onBody, onTitle, onId } = props;
  let view = (e) => {
    onId(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.innerText
    );
    onTitle(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .innerText
    );
    onBody(e.target.parentElement.previousElementSibling.innerText);
    navigate("/onepost");
  };
  //------------------------------------------------------------
  return (
    <>
      <div className="alert alert-info">
        <table>
          <tr className="tr">
            <th className="col">userId</th>
            <th className="col">title</th>
            <th className="col">body</th>
          </tr>
        </table>
        {posts &&
          posts.map((post, index) => {
            return (
              <table>
                <tr>
                  <th>{post.id}</th>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      className="btn btn-warning m-3"
                      onClick={(e) => {
                        view(e);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              </table>
            );
          })}
      </div>
    </>
  );
}
