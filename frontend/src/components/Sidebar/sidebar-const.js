import { FaBook, FaUser } from 'react-icons/fa';
import { IoBarChartSharp } from 'react-icons/io5';

export const sidebarLinks = [
    {
        id: 1,
        title: 'Quản lý tài khoản',
        icon: <FaUser />,
        url: '/user-management'
    },
    {
        id: 1,
        title: 'Quản lý khóa học',
        icon: <FaBook />,
        url: '/course-management'
    },
]