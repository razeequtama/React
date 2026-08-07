import { AuthContextProvider } from "./context/authContext";

import ContextReader from "./components/ContextReader";
import ContextChanger from "./components/ContextChanger";

export default function App()
{
  return(
    <>
      <h1>Hello</h1>
      <AuthContextProvider>
        <ContextChanger/>
        <ContextReader/>
      </AuthContextProvider>
    </>

  )
}