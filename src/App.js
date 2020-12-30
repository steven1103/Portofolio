import './App.css';

function App() {
  return (
    <div className="wholeDiv">
    <div className="bg-black h-screen flex items-center">
      <div className="bg-black flex-auto">
        <p className="text-white font-semibold text-9xl" style={{marginLeft:'10vh'}}>
         {
           "<STEVELOP/>"
         }
        </p>
        <p className="text-white font-semibold text-md" style={{marginLeft:'10vh',marginTop:'2vh'}}>
          Full-Stack Web developer at S.korea, born at two-thousand seven (2007). 
          <br/>
          Use Javascript and Typescript for main, and also use python too.
          <br/>
          Able to do NestTS, PostgreSQL, Prisma, typeORM, passportJWT, Apollo and graphql at backend.
          <br/>
          And Able to do ReactJS, ReactTS, React-Native, Expo and tailwindCSS at Frontend. 
        </p>
      </div>
      <div className="bg-black flex-none w-48 relative text-white text-2xl" style={{marginLeft:'auto',marginRight:0}}>
        <li style={{listStyleType:'none'}}>
          <ul className="hover:text-black">
            <button className="hover:bg-white  hover:outline-transparent" onClick={()=>document.getElementById('stack').scrollIntoView({behavior:'smooth'})}>
            My stack
            </button>
          </ul>
          <ul className="hover:text-black focus:outline-none">
          <button className="hover:bg-white">
            what did I did              
          </button>
          </ul>
          <ul className="hover:text-black">
          <button className="hover:bg-white">
            My team
            </button>
          </ul>
        </li>
      </div>
    </div>
    <div className="bg-black h-screen flex items-center">
      <div className="bg-black flex-auto">
        <p className="text-white font-semibold text-9xl" style={{marginLeft:'10vh'}}>
         {
           "<STEVELOP/>"
         }
        </p>
        <p className="text-white font-semibold text-md" style={{marginLeft:'10vh',marginTop:'2vh'}}>
          Full-Stack Web developer at S.korea, born at two-thousand seven (2007). 
          <br/>
          Use Javascript and Typescript for main, and also use python too.
          <br/>
          Able to do NestTS, PostgreSQL, Prisma, typeORM, passportJWT, Apollo and graphql at backend.
          <br/>
          And Able to do ReactJS, ReactTS, React-Native, Expo and tailwindCSS at Frontend. 
        </p>
      </div>
      <div id="stack" className="bg-black flex-none w-48 relative text-white text-2xl" style={{marginLeft:'auto',marginRight:0}}>
        <li style={{listStyleType:'none'}}>
          <ul className="hover:text-black">
            <button className="hover:bg-white  hover:outline-transparent">
            My stack
            </button>
          </ul>
          <ul className="hover:text-black focus:outline-none">
          <button className="hover:bg-white">
            what did I did              
          </button>
          </ul>
          <ul className="hover:text-black">
          <button className="hover:bg-white">
            My team
            </button>
          </ul>
        </li>
      </div>
    </div>
    </div>
  );
}

export default App;
