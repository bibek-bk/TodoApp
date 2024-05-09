import { Provider } from "react-redux"
import Body from "./components/Body/Body"
import store from './store/store'
function App() {

  return (
    <div className=" h-screen ">
    <Provider store={store}>
      <Body/>
    </Provider>
     </div>
  )
}

export default App
