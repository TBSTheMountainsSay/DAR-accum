import "./assets/styles/reset.scss"
import "./assets/styles/global.scss"
import {useEffect} from "react";
import ExampleOfProblems from "./features/ExampleOfProblems/ExampleOfProblems.tsx";

function App() {

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", "dark")
  }, [])

  return (
    <div className={"app"}>
      <ExampleOfProblems/>
    </div>
  )
}

export default App
