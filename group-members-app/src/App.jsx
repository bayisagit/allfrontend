

function App () {
  const membersName = ["Natnael kebede","Mesud Ahmed","Meti Seboka geleta","yadiel daniel legesse","Rahmet Abdelah","nebiyu yalemgeta","Bayisa Daba Gutu","Abebaw Tsega","meskerem fekede","Dawit ","Heaven "]
  return <div className="bg-sky-300 p-6 h-dvh  w-full">
   <h1 className="text-3xl font-semibold">GDG Group 7</h1>
    <div
    className="flex h-[90%] justify-center items-end ">
    <ul className="space-y-3">
      {membersName.map( ( value, index ) => <li className="text-xl hover:scale-110 hover:text-stone-100 rounded-md py-1.5 px-3 hover:bg-sky-500   bg-sky-600  text-stone-200" key={`${value}${index}`}>{ value}</li>)}
    </ul>
  </div>
  </div>
}

export default App