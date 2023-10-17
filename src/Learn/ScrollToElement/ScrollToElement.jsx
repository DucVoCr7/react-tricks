import React from "react";

export const ScrollToElement = () => {
  const array = ["A", "B", "C", "D", "E", "F"];

  //   console.log("render ScrollToElement");
  return (
    <React.Fragment>
      {array.map((e) => (
        <div
          key={e}
          style={{
            height: 300,
            backgroundColor: "rgba(0,0,0,0.2)",
            textAlign: "start",
            padding: 10,
            margin: 20,
          }}
        >
          <h1 id={e}>{`Element ${e}`}</h1>
          {`Content ${e}`}
        </div>
      ))}
      <div
        style={{
          backgroundColor: "rgba(255,0,0,0.4)",
          position: "fixed",
          top: 30,
          right: 30,
          padding: 10,
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {array.map((e) => (
          <a
            href={`#${e}`}
            key={e}
            style={{ backgroundColor: "rgba(0,0,0,0.2)", padding: 5 }}
            // onClick={() => {
            //   const element = document.getElementById(e);
            //   //   element.scrollIntoView({ block: "start", behavior: "smooth" });
            //   const elementPositionY = element.getBoundingClientRect().top;
            //   const marginOffset = 20;
            //   const offsetPosition =
            //     elementPositionY + window.scrollY - marginOffset;
            //   window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            // }}
          >{`Scroll to ${e}`}</a>
        ))}
      </div>
    </React.Fragment>
  );
};
ScrollToElement.propTypes = {};
