import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function UserManagement() {
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
                    <button className='btn btn-primary' type='button' style={{marginBottom: '5px'}}>
                      Them moi
                    </button>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <table id='tab-faculty' className='table table-bordered table-striped'>
                      <thead>
                        <tr>
                          <th className='text-center'>Tên đăng nhập</th>
                          <th className='text-center'>Quyền</th>
                          <th className='text-center'>Chỉnh sửa</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>user1</td>
                          <td className='text-center'>Sinh viên</td>
                          <td className='text-center'>
                            <button className='btn btn-primary btn-xs' style={{marginRight: '5px'}}>
                              <FaEdit />
                            </button>
                            <button className='btn btn-danger btn-xs' style={{marginRight: '5px'}}>
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
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

export default UserManagement