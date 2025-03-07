
const TableUser=(props)=>{
    const {listUsers,handleClickBtnUpdate}=props;
    return (
        <>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length>0 && listUsers.map((item,index)=>{
                        return (
                        <tr key={`table-user-${index}`}>
                            <th scope="row">{index+1}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                            <button type="button" class="btn btn-secondary">View</button>
                            <button type="button" 
                            class="btn btn-warning mx-3"
                            onClick={()=>handleClickBtnUpdate(item)}
                            >Update</button>
                            <button type="button" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                    {listUsers && listUsers.length===0 &&
                    <tr>
                            <td colSpan={"4"}>
                                Not found data
                            </td>
                    </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
export default TableUser;