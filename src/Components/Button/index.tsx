import { useState, useEffect } from "react";

export default function Button(props: any) {
  const [btncolor, setBtncolor] = useState("#2194ff");
  const [btnpad, setBtnpad] = useState(4);

  useEffect(() => {
    props.color === undefined
      ? setBtncolor("#2194ff")
      : setBtncolor(props.color);
    switch (props.size) {
      case "sm":
        setBtnpad(4);
        break;
      case "md":
        setBtnpad(8);
        break;
      case "lg":
        setBtnpad(12);
        break;
    }
  });

  return (
    <>
      <button
        style={{
          backgroundColor: btncolor,
          border: 0,
          padding: btnpad,
        }}
      >
        "Hello!"
      </button>
    </>
  );
}
