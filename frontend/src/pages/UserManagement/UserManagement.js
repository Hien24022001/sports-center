import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import AddUser from './components/AddUser/AddUser';
import axios from 'axios';
import EditUser from './components/EditUser/EditUser';
import DeleteUser from './components/DeleteUser/DeleteUser';

function UserManagement() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [userList, setUserList] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/user');
    setUserList(res.data);
  }

  useEffect(() => {
    fetchData()
    .catch(console.error);
  }, [])

  return (
    <div className='content'>
      <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Quản lý tài khoản</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Admin</a></li>
                        <li class="breadcrumb-item active">Quản lý tài khoản</li>
                    </ol>
                </div>
            </div>
        </div>
      </section>
      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-12'>
                      <button className='btn btn-primary' type='button' style={{marginBottom: '5px'}} onClick={() => setShowAddPopup(true)}>
                        Thêm mới
                      </button>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <table id='tab-faculty' className='table table-bordered table-striped'>
                        <thead>
                          <tr>
                            <th className='text-center'>Mã số</th>
                            <th className='text-center'>Tên đăng nhập</th>
                            <th className='text-center'>Quyền</th>
                            <th className='text-center'>Chỉnh sửa</th>
                          </tr>
                        </thead>
                        <tbody>
                          {console.log('userList', userList)}
                          {
                            userList.map((user) => (
                              <tr key={ user.Ma_so }>
                                  <td className='text-center'>{ user.Ma_so }</td>
                                  <td className='text-center'> { user.Ten_dang_nhap } </td>
                                  <td className='text-center'>{ user.Phan_loai_tk === 'HV' ? 'Học viên' : 'Nhân viên' }</td>
                                  <td className='text-center'>
                                    <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}} onClick={() => { setShowEditPopup(true); setSelectedUserId(user.Ma_so) }}>
                                      <FaEdit />
                                    </button>
                                    <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}} onClick={() => { setShowDeletePopup(true); setSelectedUserId(user.Ma_so) }}>
                                      <FaTrash />
                                    </button>
                                  </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        showAddPopup && <AddUser closePopup={() => setShowAddPopup(false)} fetchData={fetchData} />
      }
      {
        showEditPopup && <EditUser closePopup={() => setShowEditPopup(false)} fetchData={fetchData} selectedUserId={selectedUserId} />
      }
      {
        showDeletePopup && <DeleteUser closePopup={() => setShowDeletePopup(false)} fetchData={fetchData} selectedUserId={selectedUserId} />
      }
    </div>
  )
}

export default UserManagement