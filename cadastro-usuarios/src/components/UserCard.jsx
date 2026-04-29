import './UserCard.css'

function UserCard({ user }) {
    return (
        <div className='user-card'>
            <img className='user-card-avatar' src={`https://robohash.org/${user.id}`} />
                <div className='user-card-info'>
                    <p><strong>Nome:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Idade:</strong> {user.age}</p>
                </div>
        </div>
    )
}

export default UserCard