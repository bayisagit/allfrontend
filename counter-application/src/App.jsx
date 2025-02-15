import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
			<div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg w-full transform transition-all hover:shadow-3xl">
				<h1 className="text-6xl font-extrabold text-blue-600 mb-8">
					{count}
				</h1>
				<div className="flex justify-between gap-2">
					<button
						className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105"
						onClick={() => setCount(count + 1)}
					>
						Increment
					</button>
					<button
						className={`px-4 py-2 rounded-full transition transform hover:scale-105 ${
							count === 0
								? 'bg-gray-500 cursor-not-allowed'
								: 'bg-purple-600 hover:bg-purple-700'
						}`}
						onClick={() => count > 0 && setCount(count - 1)}
						disabled={count === 0}
					>
						Decrement
					</button>
					<button
						className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105"
						onClick={() => setCount(0)}
					>
						Reset
					</button>
				</div>
			</div>
		</div>
	)
}

export default App