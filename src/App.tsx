import "./assets/styles/reset.scss"
import "./assets/styles/global.scss"
import {useEffect} from "react";
import ExampleOfProblems from "./features/ExampleOfProblems/ExampleOfProblems.tsx";
import WelcomeScreen from "./features/WelcomeScreen/WelcomeScreen.tsx";
import About from "./features/About/About.tsx";
import Consequences from "./features/Consequences/Consequences.tsx";

function App() {

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", "dark")
  }, [])

  return (
    <div className={"app"}>
      <WelcomeScreen/>
        <About/>
      <ExampleOfProblems/>
        <Consequences/>
    </div>
  )
}

export default App
