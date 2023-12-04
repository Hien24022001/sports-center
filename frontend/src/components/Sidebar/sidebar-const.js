import { FaBook, FaUser } from 'react-icons/fa';
import { IoBarChartSharp, IoSettings } from 'react-icons/io5';

export const sidebarLinks = [
    {
        id: 1,
        title: 'Quản lý tài khoản',
        icon: <FaUser />,
        url: '/user-management'
    },
    {
        id: 2,
        title: 'Quản lý dịch vụ',
        icon: <FaBook />,
        url: '/course-management'
    },
    {
        id: 3,
        title: 'Chi phí bảo dưỡng',
        icon: <IoSettings />,
        url: '/maintainance'
    },
]