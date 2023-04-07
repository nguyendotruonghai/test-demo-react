import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect,useState } from "react";
import {getAllUsers} from '../../../services/apiService';


const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState();
  
  const [listUsers, setListUsers] = useState([
    {
      id: 17,
      username: "eric",
      email: "abc@gmail.com",
      role: "USER",
    },
    {
      id: 18,
      username: "eric",
      email: "abc@gmail.com",
      role: "USER",
    },
  ]);

  //componentDidMount
  useEffect(() => {
    fetchListUsers();
  },[]);

  const fetchListUsers = async () => {
    let res  = await getAllUsers();
    if(res.EC === 0) {
        setListUsers(res.DT);
    }
  }



  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button className="btn btn-primary"
          onClick={() => setShowModalCreateUser(true)}
          > <FcPlus/> Add New Users</button>
        </div>
        <div className="table-users-container">
          <TableUser listUsers={listUsers}/>
        </div>
        <ModalCreateUser 
        show={showModalCreateUser}
        setShow={setShowModalCreateUser}
        fetchListUsers={fetchListUsers}
        />
       
      </div>
    </div>
  );
};

export default ManageUser;
