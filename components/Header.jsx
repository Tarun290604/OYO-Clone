'use client'
import Image from 'next/image'
import Block from './Block';
import Link from 'next/link'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';

const Header = () => {
    const [auth, setAuth] = useState(false);

    useEffect(()=>{
        const key = Cookies.get("user");
        if(key){
            setAuth(true);
            return;
          }
        setAuth(false);
    },[auth]);

    const router = useRouter(); 
    
    const handleLogout = () => {
        Cookies.remove('user');
        setAuth(false);
        router.push('/');
    }
    return (
        <div className='flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
            <Image src={'/logo.png'} alt='logo' width={200} height={200} className=' w-28 h-28' />
            <div className='h-full flex'>
                <Block title={'Become a member'} para={'Additional 10% offer on stays.'} ImgSrc={'/letter-w.png'} />
                <Block title={'OYO for business'} para={'Trusted by 500 corporates.'} ImgSrc={'/briefcase.png'} />
                <Block title={'List your company'} para={'Start earning in 30mins'} ImgSrc={'/town.png'} />
                <Block title={'9985663302'} para={'Call us to book now'} ImgSrc={'/phone-call.png'} />
                <div className='flex items-center px-3'>
                    <Image src={'/user.png'}
                        alt="demo"
                        width={200}
                        height={200}
                        className="w-10 h-10 rounded-full mr-5" />
                    {
                        auth ? (
                            <h3 className='font-bold cursor-pointer' onClick={handleLogout}>Logout</h3>

                        ) : (
                            <Link href={"/login"}>
                                <h3 className='font-bold'>Login/Signup</h3>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;