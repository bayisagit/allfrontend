import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/UserCard' // Import UserCard component

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=6')
			.then((response) => response.json())
			.then((data) => {
				const fetchedUsers = data.results.map((user) => ({
					id: user.login.uuid,
					name: `${user.name.first} ${user.name.last}`,
					email: user.email,
					age: user.dob.age,
					avatar: user.picture.large,
				}))
				setUsers(fetchedUsers)
			})
	}, [])

	const bgColors = [
		'bg-blue-100',
		'bg-green-100',
		'bg-red-100',
		'bg-yellow-100',
		'bg-purple-100',
		'bg-pink-100',
	]

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
			<h1 className="text-4xl font-bold mb-8">User Cards</h1>
			<div className="flex flex-wrap justify-center gap-6">
				{users.map((user, index) => (
					<UserCard
						key={user.id}
						user={user}
						bgColor={bgColors[index % bgColors.length]}
					/>
				))}
			</div>
		</div>
	)
}

export default App