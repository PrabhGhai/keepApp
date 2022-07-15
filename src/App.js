import "./App.css";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const url = require("./images/logo.jpeg");

function App() {
  const [head, sethead] = useState({ heading: "Title ", text: "" });
  const [array, setarray] = useState([]);
  const change = (e) => {
    const { name, value } = e.target;
    sethead({ ...head, [name]: value });
  };

  const submit = () => {
    console.log(head);
    setarray([...array, head]);
    clear();
  };
  const clear = () => {
    console.log("clear called");
    sethead({ heading: "Title", text: "" });
  };

  const show = () => {
    document.getElementById("textarea").style.display = "block";
    document.getElementById("span").style.display = "block";
  };
  const del = (index) => {
    array.splice(index, 1);
    setarray([...array]);
  };
  return (
    <>
      <div className="container-fluid nav ">
        <div className="container d-flex justify-content-start my-3">
          <div className="">
            <img className="img-fluid" src={url} alt=""></img>
          </div>
          <div className="mx-4">
            <h1 className="">Developer Keep App</h1>
          </div>
        </div>
      </div>

      <div className="container py-4 ">
        <div className=" d-flex flex-column align-items-center">
          <input
            name="heading"
            onChange={change}
            onClick={show}
            id="title"
            placeholder="Enter The Title"
            value={head.heading}
          />

          <textarea
            name="text"
            onChange={change}
            value={head.text}
            id="textarea"
            placeholder="Enter The Text"
          />
          <div
            className="container d-flex justify-content-end align-items-center my-2 "
            style={{ width: "300px" }}
          >
            <span
              onClick={submit}
              className="btn"
              id="span"
              style={{ display: "none " }}
            >
              <BiMessageSquareAdd style={{ fontSize: "20px" }} /> <b>Add</b>
            </span>
          </div>
        </div>
      </div>

      <div className="container flex-wrap">
        <div className="row">
          {array.map((item, index) => (
            <div className="col-lg-3" key={index}>
              <div
                className="card my-3 p-1 px-3"
                style={{ borderRadius: "5px", border: "1px solid black" }}
              >
                <p style={{ textTransform: "capitalize" }}>
                  <b>{item.heading}</b>
                </p>
                <hr style={{ marginTop: "-6px" }} />

                <p style={{ marginTop: "-15px" }}>{item.text}</p>

                <div
                  className="del container-fluid bg-primray d-flex justify-content-end"
                  onClick={() => {
                    del(index);
                  }}
                >
                  <MdDeleteForever style={{ fontSize: "20px" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
