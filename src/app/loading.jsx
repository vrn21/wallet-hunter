'use client'
import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function App() {
  //const [value, setValue] = useState(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue((v) => (v >= 100 ? 0 : v + 10));
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, []);

  // return (
  //   <CircularProgress
  //     aria-label="Loading..."
  //     size="lg"
  //     value={value}
  //     color="warning"
  //     showValueLabel={true}
  //   />
  // );
  return(
  <h1>Loading...</h1>
  )
}
