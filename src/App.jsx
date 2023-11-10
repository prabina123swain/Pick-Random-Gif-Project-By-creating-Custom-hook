import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return <div className="w-full h-full min-h[100vh] background flex flex-col  ">
  
  <h2 className="uppercase bg-white w-11/12 mt-3 mx-auto text-center  rounded-lg text-lg font-bold">Random Gifs</h2>
  <Random/>
  <Tag/>
  </div>;
}
