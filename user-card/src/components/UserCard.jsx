import PropTypes from 'prop-types'

function UserCard({ user, bgColor }) {
	return (
		<div
			className={`shadow-md rounded-lg p-6 flex flex-col items-center ${bgColor}`}
		>
			<img
				className="w-24 h-24 rounded-full mb-4"
				src={user.avatar}
				alt={`${user.name}'s avatar`}
			/>
			<h2 className="text-xl font-semibold mb-2">{user.name}</h2>
			<p className="text-gray-600">{user.email}</p>
			<p className="text-gray-600">Age: {user.age}</p>
		</div>
	)
}

UserCard.propTypes = {
	user: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		avatar: PropTypes.string.isRequired,
	}).isRequired,
	bgColor: PropTypes.string,
}

UserCard.defaultProps = {
	bgColor: 'bg-white',
}

export default UserCard