import React, { useState } from 'react'
import '../modal.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUser({ closePopup, fetchData }) {
    const [formData, setFormData] = useState({
        "id": null,
        "username": null,
        "password": null,
        "role": 'HV',
        "name": null,
        "surname": null,
        "address": null,
        "point": null,
        "level": null,
        "cccd": null,
        "gender": 'M',
        "dateofbirth": null,
        "hometown": null
    });

    const handleChange = (e) => {
        // if (e.target.name === 'dateofbirth') {
        //     const date = new Date(e.target.value);
        //     e.target.value = date.getFullYear + '-' + date.getMonth() + '-' + date.getDay();
        // }
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        console.log('formData', formData);
        try {
            await axios.post('http://localhost:5000/user', formData);
            closePopup();
            fetchData();
            toast.success('Thêm tài khoản thành công')
        } catch(err) {
            console.log(err);
            toast.error(err);
        }
    }

  return (
    <div className='modal'>
        <div className='container'>
            <div className='header'>
                <span>Thêm mới</span>
            </div>
            <div className='body'>
                <div className="mb-3">
                    <label for="id" className="form-label">Mã số</label>
                    <input type="text" value={formData.id} className="form-control" id="id" name='id' placeholder="" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">Tên đăng nhập</label>
                    <input type="text" value={formData.username} className="form-control" id="username" name='username' placeholder="" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Mật khẩu</label>
                    <input type="password" value={formData.password} className="form-control" id="password" name='password' placeholder="" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="surname" className="form-label">Họ, tên đệm</label>
                    <input type="text" value={formData.surname} className="form-control" id="surname" name='surname' placeholder="" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Tên</label>
                    <input type="text" value={formData.name} className="form-control" id="name" name='name' placeholder="" onChange={handleChange} />
                </div>
                <label for="role">Quyền</label>
                <select name='role' value={formData.role} id="role" class="form-select" aria-label="Default select example" style={{width: '100%', padding: '7px 10px', border: '1px solid #dde1e5', marginBottom: '15px'}} onChange={handleChange}>
                    <option value="HV">Hội viên</option>
                    <option value="NV">Nhân viên</option>
                </select>
                {
                formData.role === 'HV' ? (
                <div className="mb-3">
                    <label for="address" className="form-label">Địa chỉ</label>
                    <input type="text" value={formData.address} className="form-control" id="address" name='address' placeholder="" onChange={handleChange} />
                </div>
                ) : (
                <>
                <div className="mb-3">
                    <label for="cccd" className="form-label">CCCD</label>
                    <input type="text" value={formData.cccd} className="form-control" id="cccd" name='cccd' placeholder="" onChange={handleChange} />
                </div> 
                <div className="mb-3">
                    <label for="dateofbirth" className="form-label">Ngày sinh</label>
                    <input type="date" value={formData.dateofbirth} className="form-control" id="dateofbirth" name='dateofbirth' placeholder="" onChange={handleChange} />
                </div> 
                <label for="role">Giới tính</label>
                <select name='gender' value={formData.gender} id="role" class="form-select" aria-label="Default select example" style={{width: '100%', padding: '7px 10px', border: '1px solid #dde1e5', marginBottom: '15px'}} onChange={handleChange}>
                    <option value="M">Nam</option>
                    <option value="F">Nữ</option>
                </select> 
                <div className="mb-3">
                    <label for="hometown" className="form-label">Quê quán</label>
                    <input type="text" value={formData.hometown} className="form-control" id="hometown" name='hometown' placeholder="" onChange={handleChange} />
                </div>  
                </> 
                )
                }
            </div>
            <div className='footer'>
                <button style={{backgroundColor: '#6C757D'}} type="button" className='btn btn-medium' onClick={closePopup}>Đóng lại</button>
                <button type="button" className="btn btn-medium btn-primary ms-3" onClick={handleSubmit} style={{marginLeft: '10px'}}>Thêm mới</button>
            </div>
        </div>
    </div>
  )
}

export default AddUser