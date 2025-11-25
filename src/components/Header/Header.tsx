import Menu from '../Menu/Menu';
import { Link } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';


export default function Header() {
    return (
        <header >
            <div className='flex items-center justify-between bg-black text-white p-4'>
                <Link to="/home"><h1 className='text-white text-4xl font-poppins text-bold'>JoaoHBatistaLeal's Social</h1> </Link>
                <div className="flex justify-end gap-4"> <FiSettings size={36} color='white'/>
                <img src="favicon.png" alt="Avatar" className="w-10 h-10 rounded-full"/>
                </div>
            </div>
            <div className='bg-[#444444] h-5'></div>
            <Menu/>
        </header>)
}