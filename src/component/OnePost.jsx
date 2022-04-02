import React from "react";

export default function OnePost(props) {
  let { body, title, id } = props;
  return (
    <div className="alert alert-info">
      <table>
        <tr className="tr">
          <th className="col">userId</th>
          <th className="col">title</th>
          <th className="col">body</th>
        </tr>
        <tr>
          <th>{id}</th>
          <td>{title}</td>
          <td>{body}</td>
        </tr>
      </table>
    </div>
  );
}
