import "./App.css";
import Card from "./Components/Card";

const Wave1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{ width: "100%" }}
    >
      <path
        fill="#5000ca"
        fillOpacity="1"
        d="M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,261.3C672,245,768,203,864,186.7C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};
function App() {
  return (
    <div className="wholeDiv">
      <div className="bg-black h-screen flex items-center">
        <div className="bg-black flex-auto">
          <p
            className="text-white font-semibold text-9xl"
            style={{ marginLeft: "10vh" }}
          >
            {"<STEVELOP/>"}
          </p>
          <p
            className="text-white font-semibold text-md"
            style={{ marginLeft: "10vh", marginTop: "2vh" }}
          >
            Full-Stack Web developer at S.korea, born at two-thousand seven
            (2007).
            <br />
            Use Javascript and Typescript for main, and also use python too.
            <br />
            Able to do NestTS, PostgreSQL, Prisma, typeORM, passportJWT, Apollo
            and graphql at backend.
            <br />
            And Able to do ReactJS, ReactTS, React-Native, Expo and tailwindCSS
            at Frontend.
          </p>
        </div>
        <div
          className="bg-black flex-none w-48 relative text-white text-2xl"
          style={{ marginLeft: "auto", marginRight: 0 }}
        >
          <li style={{ listStyleType: "none" }}>
            <ul className="hover:text-black">
              <button
                className="hover:bg-white  hover:outline-transparent"
                onClick={() =>
                  document
                    .getElementById("stack")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                My stack
              </button>
            </ul>
            <ul className="hover:text-black focus:outline-none">
              <button className="hover:bg-white">what did I did</button>
            </ul>
            <ul className="hover:text-black">
              <button className="hover:bg-white">My team</button>
            </ul>
          </li>
        </div>
      </div>
      <div id="stack" className="h-screen w-screen">
        <div
          className="flex w-screen"
          style={{
            height: "35vh",
            width: "100%",
            position: "relative",
            backgroundColor: "#5000ca",
          }}
        >
          <div
            className="grid-cols-3 gap-20 grid "
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              position: "absolute",
              width: "80%",
              marginLeft: "10%",
            }}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <Card className="flip-card-front">
                  <h2>NestTS</h2>
                </Card>
                <Card className="flip-card-back">
                  <h2>NestTS</h2>
                </Card>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <Card className="flip-card-front">
                  <h2>NestTS</h2>
                </Card>
                <Card className="flip-card-back">
                  <h2>NestTS</h2>
                </Card>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <Card className="flip-card-front">
                  <h2>NestTS</h2>
                </Card>
                <Card className="flip-card-back">
                  <h2>NestTS</h2>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Wave1 />
        <div style={{ backgroundColor: "#FFFFFF" }}>
          <div
            className="flex w-screen"
            style={{
              height: "35vh",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              className="grid-cols-3 gap-20 grid "
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                width: "80%",
                marginLeft: "10%",
              }}
            >
              <Card className="shadow-md" />
              <Card className="shadow-md" />
              <Card className="shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
