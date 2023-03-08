import { useState, useEffect } from "react";

export default function Button(props: any) {
  const [btncolor, setBtncolor] = useState("#2194ff");
  const [btnpadw, setBtnpadw] = useState(12);
  const [btnpadh, setBtnpadh] = useState(4);
  const [btntextsize, setTextSize] = useState(4);

  useEffect(() => {
    props.OriginalColor === undefined
      ? setBtncolor("#2194ff")
      : setBtncolor(props.OriginalColor);
    switch (props.size) {
      case "sm":
        setBtnpadh(0);
        setBtnpadw(7);
        setTextSize(14);
        break;
      case "md":
        setBtnpadh(4);
        setBtnpadw(15);
        setTextSize(14);
        break;
      case "lg":
        setBtnpadh(8);
        setBtnpadw(18);
        setTextSize(16);
        break;
    }
  });

  return (
    <>
      <button
        style={{
          backgroundColor: btncolor,
          border: 0,
          padding: `${btnpadh}px ${btnpadw}px`,
          borderRadius: 5,
        }}
      >
        <span
        style={{
          fontSize:btntextsize
        }}
        >"Hello!"</span>
      </button>
    </>
  );
}
