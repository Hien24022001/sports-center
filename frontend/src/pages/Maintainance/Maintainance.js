import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import axios from 'axios';

function Maintainance() {
  const [maintainList, setMaintainList] = useState([]);


  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/maintain`);
    setMaintainList(res.data);
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
                    <h1>Chi phí bảo dưỡng thiết bị</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Admin</a></li>
                        <li class="breadcrumb-item active">Chi phí bảo dưỡng</li>
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
                      <table id='tab-faculty' className='table table-bordered table-striped'>
                        <thead>
                          <tr>
                            <th className='text-center'>Mã bộ môn</th>
                            <th className='text-center'>Tên bộ môn</th>
                            <th className='text-center'>Mã trưởng bộ môn</th>
                            <th className='text-center'>Trưởng bộ môn</th>
                            <th className='text-center'>Tổng chi phí bảo dưỡng thiết bị</th>
                          </tr>
                        </thead>
                        <tbody>
                          {console.log('courseList', maintainList)}
                          {
                            maintainList.map((item, index) => (
                              <tr key={ index }>
                                  <td className='text-center'>{ item.Ma_bo_mon }</td>
                                  <td className='text-center'>{ item.Ten_bo_mon }</td>
                                  <td className='text-center'>{ item.Ma_truong_bo_mon }</td>
                                  <td className='text-center'>{ item.Truong_bo_mon }</td>
                                  <td className='text-center'>{ item.Tong_chi_phi_bao_duong_thiet_bi }</td>
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
    </div>
  )
}

export default Maintainance