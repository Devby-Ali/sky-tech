import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

export default function Session() {
  const { courseName, sessionID } = useParams();
  const [session, setSession] = useState({});
  const [sessions, setSessions] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:4000/v1/courses/${courseName}/${sessionID}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSession(data.session);
        setSessions(data.sessions);
        console.log(data)
      });

  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-[1920px] mx-auto overflow-x-hidden pt-44 lg:pt-52 2xl:pt-56">
        <div className="container">
                    <Breadcrumb
                      links={[
                        {
                          id: 2,
                          title: session.title,
                          to: `course-info/${courseName}`,
                        },
                        {
                          id: 3,
                          title: session.title,
                          to: `course-info/${courseName}`,
                        },
                      ]}
                    />
          <div className="aspect-video mt-8 sm:mt-10 overflow-hidden rounded-lg">
          <video
                className="w-full h-full"
                controls
                src={`http://localhost:4000/courses/covers/${session.video}`}
              ></video>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
