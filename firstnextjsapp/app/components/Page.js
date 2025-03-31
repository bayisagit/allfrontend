import Link from 'next/link';


const Page = () => {
    return (
        <div className='m-8'>
            <div className='flex justify-between '>
                <div className='flex space-x-7'>
                    <div><Link href="/">Home</Link></div>
                    <div><Link href="/teams">Teams</Link></div>
                    <div><Link href="/success-stories">Success Stories</Link></div>
                    <div><Link href="/about-us">About Us</Link></div>
                    <div><Link href="/blogs">Blogs</Link></div>
                    <div><Link href="/get-involved">Get Involved</Link></div>
                </div>
                <div className='flex space-x-7'>   
                    <div><Link href="/login">Login</Link></div>
                    <div><Link href="/donate">Donate</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Page;