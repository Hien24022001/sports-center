import React, { useState } from 'react'
import '../modal.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditUser({ closePopup, fetchData, selectedUserId }) {
    const [formData, setFormData] = useState({
        "id": selectedUserId,
        "password": null,
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        console.log('formData', formData);
        try {
            await axios.put('http://localhost:5000/user', formData);
            closePopup();
            fetchData();
            toast.success('Đổi mật khẩu thành công')
        } catch(err) {
            console.log(err);
            toast.error(err);
        }
    }

  return (
    <div className='modal'>
        <div className='container'>
            <div className='header'>
                <span>Đổi mật khẩu</span>
            </div>
            <div className='body'>
                <div className="mb-3">
                    <label for="id" className="form-label">Mã số</label>
                    <input type="text" value={formData.id} disabled className="form-control" id="id" name='id' placeholder="" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Mật khẩu</label>
                    <input type="password" value={formData.password} className="form-control" id="password" name='password' placeholder="" onChange={handleChange} />
                </div>
            </div>
            <div className='footer'>
                <button style={{backgroundColor: '#6C757D'}} type="button" className='btn btn-medium' onClick={closePopup}>Đóng lại</button>
                <button type="button" className="btn btn-medium btn-primary ms-3" onClick={handleSubmit} style={{marginLeft: '10px'}}>Chỉnh sửa</button>
            </div>
        </div>
    </div>
  )
}

export default EditUser