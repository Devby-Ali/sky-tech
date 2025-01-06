import React, { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
// import Topbar from "../Topbar/Topbar";

export default function Header() {
  const [indexInfo, setIndexInfo] = useState({})

  useEffect(() => {
    fetch('http://localhost:4000/v1/infos/index')
    .then(res => res.json())
    .then(allInfos => setIndexInfo(allInfos))
  }, [])

  return (
    <header className="header">
        {/* <Topbar /> */}
        <Navbar />
        <Landing info={indexInfo} />
    </header>
  );
}
