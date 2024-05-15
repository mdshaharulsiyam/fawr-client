import amazoninlogo from '../../../assets/amazoninlogo.png'
import googlelogo from '../../../assets/googlelogo.png'
import JPMorgan_logologo from '../../../assets/JPMorgan_logologo.png'
import microsoftlogo from '../../../assets/microsoftlogo.png'
import Oraclelogo from '../../../assets/Oraclelogo.png'

const ConnectedCompany = () => {
    return (
        <div className='container mx-auto py-14'>
            <h4 className='text-lg lg:text-2xl font-bold text-center pb-10'>One who believed in us</h4>
            <div className='flex justify-around items-center flex-wrap gap-6'>
                <img className='w-[50px] md:w-[120px] lg:w-[200px] 2xl:w-auto' src={amazoninlogo} alt="" />
                <img className='w-[50px] md:w-[120px] lg:w-[200px] 2xl:w-auto' src={googlelogo} alt="" />
                <img className='w-[50px] md:w-[120px] lg:w-[200px] 2xl:w-auto' src={JPMorgan_logologo} alt="" />
                <img className='w-[50px] md:w-[120px] lg:w-[200px] 2xl:w-auto' src={microsoftlogo} alt="" />
                <img className='w-[50px] md:w-[120px] lg:w-[200px] 2xl:w-auto' src={Oraclelogo} alt="" />
            </div>
        </div>
    )
}

export default ConnectedCompany