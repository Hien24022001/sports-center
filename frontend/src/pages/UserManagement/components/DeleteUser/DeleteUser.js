import React, { useState } from 'react'
import '../modal.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteUser({ closePopup, fetchData, selectedUserId }) {

    const handleSubmit = async () => {
        try {
            await axios.delete('http://localhost:5000/user', {id: selectedUserId});
            closePopup();
            fetchData();
            toast.success('Xóa tài khoản thành công')
        } catch(err) {
            console.log(err);
            toast.error(err);
        }
    }

  return (
    <div className='modal'>
        <div className='container'>
            <div className='header'>
                <span>Bạn có muốn xóa tài khoản này không?</span>
            </div>
            <div className='footer'>
                <button style={{backgroundColor: '#6C757D'}} type="button" className='btn btn-medium' onClick={closePopup}>Đóng lại</button>
                <button type="button" className="btn btn-medium btn-primary ms-3" onClick={handleSubmit} style={{marginLeft: '10px'}}>Chỉnh sửa</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteUser