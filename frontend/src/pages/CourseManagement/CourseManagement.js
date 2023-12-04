import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
// import AddUser from './components/AddUser/AddUser';
import axios from 'axios';
import { toast } from 'react-toastify';

function CourseManagement() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [formData, setFormData] = useState({
    point: 0,
    type: 'KH'
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
   }

  const fetchData = async () => {
    if (!formData.point || formData.point < 0) {
        formData.point = 0;
    } 
    if (formData.point > 5) {
        formData.point = 5;
    }
    const res = await axios.get(`http://localhost:5000/course?point=${formData.point}&type=${formData.type}`);
    setCourseList(res.data[0]);
  }

  useEffect(() => {
    fetchData()
    .catch(console.error);
  }, [formData])

  return (
    <div className='content'>
      <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Quản lý dịch vụ</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Admin</a></li>
                        <li class="breadcrumb-item active">Quản lý dịch vụ</li>
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
                    <div className='col-6'>
                        <div className="mb-3">
                            <label for="point" className="form-label">Điểm trung bình từ (giá trị trong khoảng từ 0 đến 5)</label>
                            <input type="number" value={formData.point} className="form-control" id="point" name='point' placeholder="" onChange={handleChange} />
                        </div> 
                    </div>
                    <div className='col-6'>
                        <label for="type">Loại dịch vụ</label>
                        <select name='type' value={formData.type} id="role" class="form-select" aria-label="Default select example" style={{width: '100%', padding: '7px 10px', border: '1px solid #dde1e5', marginBottom: '15px'}} onChange={handleChange}>
                            <option value="KH">Khóa học</option>
                            <option value="GT">Gói thuê phòng tập</option>
                        </select> 
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <table id='tab-faculty' className='table table-bordered table-striped'>
                        <thead>
                          <tr>
                            <th className='text-center'>Mã dịch vụ</th>
                            <th className='text-center'>Tên</th>
                            <th className='text-center'>Thời lượng</th>
                            <th className='text-center'>Gía tiền</th>
                            <th className='text-center'>Mô tả</th>
                            <th className='text-center'>Điểm trung bình</th>
                            <th className='text-center'>Chỉnh sửa</th>
                          </tr>
                        </thead>
                        <tbody>
                          {console.log('courseList', courseList)}
                          {
                            courseList.map((course) => (
                              <tr key={ course.Ma_dich_vu }>
                                  <td className='text-center'>{ course.Ma_dich_vu }</td>
                                  <td className='text-center'>{ course.Ten }</td>
                                  <td className='text-center'>{ course.Thoi_luong }</td>
                                  <td className='text-center'>{ course.Gia }</td>
                                  <td className='text-center'>{ course.Mo_ta }</td>
                                  <td className='text-center'>{ course.Diem_trung_binh }</td>
                                  <td className='text-center'>
                                    <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}} onClick={() => { setShowEditPopup(true);  }}>
                                      <FaEdit />
                                    </button>
                                    <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}} onClick={() => { setShowDeletePopup(true); }}>
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
      {/* {
        showAddPopup && <AddUser closePopup={() => setShowAddPopup(false)} fetchData={fetchData} />
      }
      {
        showEditPopup && <EditUser closePopup={() => setShowEditPopup(false)} fetchData={fetchData} selectedUserId={selectedUserId} />
      }
      {
        showDeletePopup && <DeleteUser closePopup={() => setShowDeletePopup(false)} fetchData={fetchData} selectedUserId={selectedUserId} />
      } */}
    </div>
  )
}

export default CourseManagement