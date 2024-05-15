import upload from '../../../assets/akar-icons_share-box.png'
import carbon_share from '../../../assets/carbon_share-knowledge.png'
import gg_screen from '../../../assets/gg_screen.png'

const HowWeDo = () => {
    return (
        <div className='container mx-auto my-14 mb-20'>
            <h4 className='text-center text-3xl lg:text-5xl xl:text-6xl py-14'>How we do it</h4>
            <div className='md:grid grid-cols-8 gap-6 flex flex-col items-start justify-start md:items-center'>
                <div style={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset'}} className='w-full flex p-5 py-10 flex-col justify-center items-center h-full col-span-2 gap-6'>
                    <img className='p-4 bg-[#FFFFD5] rounded-full' src={upload} alt="" />
                    <p className='text-lg lg:text-2xl text-center'>Share brief with our hassle free guided flow</p>
                </div>
                <div className='w-full h-[2px] bg-black bg-opacity-70'>
                     
                </div>
                <div style={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset'}} className='w-full flex p-5 py-10 flex-col justify-center items-center h-full col-span-2 gap-6'>
                    <img className='p-4 bg-[#FFFFD5] rounded-full' src={carbon_share} alt="" />
                    <p className='text-lg lg:text-2xl text-center'>BCS assembles your team of creators automatically</p>
                </div>
                <div className='w-full h-[2px] bg-black bg-opacity-70'>
                     
                </div>
                <div style={{boxShadow:'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset'}} className='w-full flex p-5 py-10 flex-col justify-center items-center h-full col-span-2 gap-6'>
                    <img className='p-4 bg-[#FFFFD5] rounded-full' src={gg_screen} alt="" />
                    <p className='text-lg lg:text-2xl text-center'>Track progress seamlessly on a single dashboard</p>
                </div>
            </div>
        </div>
    )
}

export default HowWeDo