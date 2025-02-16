import { data } from "../constant";
import Cards from "./components/cards";

function App() {
  return (
    <div className="flex flex-col gap-1 bg-gray-100 ">
      <div>
        <h1 className="py-4 font-bold flex justify-center text-xl">Challenge FAQs</h1>
      </div>
      {data.map((item, index) => (
        <Cards key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

export default App;
