import "./assets/styles/reset.scss"
import "./assets/styles/global.scss"
import {useEffect} from "react";

function App() {

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", "dark")
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
