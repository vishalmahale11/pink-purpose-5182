import React from "react";

const CommonHComponent = ({ img, desc }) => {
  return (
    <div
      style={{
        width: "70%",
        margin: "40px 230px ",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "90%",
          marginLeft: "50px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {desc.map((item) => (
          <>
            <h1
              style={{ fontWeight: "bold", fontSize: "25px", color: "#666666" }}
            >
              {item.heading}
            </h1>
            <h2
              style={{
                color: "blue",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              {item.desc}
            </h2>
          </>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "1rem",
        }}
      >
        {img.map((item) => (
          <div>
            <img
              style={{ borderRadius: "5px", width: "100%", height: "200px" }}
              src={item.img}
              alt="img"
            />
            <h5>{item.subHead}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonHComponent;
