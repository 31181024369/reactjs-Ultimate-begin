import ManageCreateUser from "./ManageCreateUser";

const ManageUser=(props)=>{
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users
                    <ManageCreateUser></ManageCreateUser>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;