'use client'
// import React from "react";
// import {CircularProgress} from "@nextui-org/react";

// export default function App() {
//   //const [value, setValue] = useState(0);

//   // React.useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setValue((v) => (v >= 100 ? 0 : v + 10));
//   //   }, 500);

//   //   return () => clearInterval(interval);
//   // }, []);

//   // return (
//   //   <CircularProgress
//   //     aria-label="Loading..."
//   //     size="lg"
//   //     value={value}
//   //     color="warning"
//   //     showValueLabel={true}
//   //   />
//   // );
//   return(
//   <h1>Loading...</h1>
//   )
// }
import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function Home() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Loading</h1>
    <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="warning"
      showValueLabel={true}
      />
      </div>
  );
}
