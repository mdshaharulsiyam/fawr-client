import earth1 from '../../../assets/earth1.png'
import network2 from '../../../assets/network2.png'
import Vector4 from '../../../assets/Vector4.png'
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'

const CreativeAgency = () => {
    return (
        <div className='container mx-auto '>
            <h4 className='text-center  text-2xl lg:text-4xl 2xl:text-6xl pt-10 pb-8 text-[#000000] max-w-[700px] mx-auto'>Our Creative Agency is Ready to Revolutionize Your Brand</h4>
            <p className='text-base lg:text-2xl 2xl:text-3xl text-center max-w-[930px] mx-auto'>With our extensive selection of creative solutions, we have you covered whether you are a startup or an established company. Let BCS assist you in making a strong entrance into the cutthroat, competitive market if you are starting a new business! If your brand needs a facelift, we have some terrific ideas to give it the second, stronger impression it deserves.</p>
            <h4 className='text-center  text-2xl lg:text-4xl 2xl:text-6xlpb-8 text-[#000000] max-w-[700px] mx-auto pt-36 pb-16'>Global Coverage</h4>
            <p className='text-base lg:text-2xl 2xl:text-3xl text-center max-w-[930px] mx-auto'>To assist you in finding and assembling a production team that can produce top-notch content anywhere in the globe, we have established a worldwide network of Creators.</p>
            <div className='flex justify-center items-center'>
                <img src={earth1} alt="" />
            </div>
            <p className='text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[700px]  mx-auto text-center -mt-[200px]'>Do you need a creative service in the remotest corner in the world? No issues! 160 nations are included in our creative network.</p>
            <h4 className='text-center  text-2xl lg:text-4xl 2xl:text-6xlpb-8 text-[#000000] max-w-[700px] mx-auto pt-36 pb-16'>Creativity at Scale without the Chaos</h4>
            <div className='container mx-auto md:grid md:grid-cols-2 flex flex-col justify-start items-start md:justify-between md:items-center mb-14'>
                <div className='w-full h-full flex justify-center items-start flex-col'>
                    <div className='flex justify-start items-start gap-2 py-2'>
                        <img className='mt-2' src={Vector4} alt="" />
                        <p className='text-xl lg:text-3xl 2xl:text-4xl font-medium'>Streamlined operation that maintains context</p>
                    </div>
                    <div className='flex justify-start items-start gap-2 py-2'>
                        <img className='mt-2' src={Vector4} alt="" />
                        <p className='text-xl lg:text-3xl 2xl:text-4xl font-medium'>The creator-grid engine aids in creating your virtual team.</p>
                    </div>
                    <div className='flex justify-start items-start gap-2 py-2'>
                        <img className='mt-2' src={Vector4} alt="" />
                        <p className='text-xl lg:text-3xl 2xl:text-4xl font-medium'>Observe, manage, and work together with your group and our creators</p>
                    </div>
                    <div className='flex justify-start items-start gap-2 py-2'>
                        <img className='mt-2' src={Vector4} alt="" />
                        <p className='text-xl lg:text-3xl 2xl:text-4xl font-medium'>Project visibility and tracking in real-time</p>
                    </div>
                </div>
                <div className='w-full h-full md:block hidden'>
                    <img className='w-[75%] h-full object-cover' src={network2} alt="" />
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 flex justify-start items-start flex-col py-16'>
                <div className='w-full h-full'>
                    <img src={icon1} alt="" />
                    <h5 className='text-xl lg:text-3xl 2xl:text-4xl font-bold pt-6 pb-3'>Post a Project</h5>
                    <p className='text-base lg:text-xl '>Posting a projects free and simple. Fill out the title, description, and budget fields.</p>
                </div>
                <div className='w-full h-full'>
                    <img src={icon2} alt="" />
                    <h5 className='text-xl lg:text-3xl 2xl:text-4xl font-bold pt-6 pb-3'>Choose Creators</h5>
                    <p className='text-base lg:text-xl '>No task is too small or too large. For projects of any size or budget, we have 1800+ creators available. No task is too difficult. We can complete it!</p>
                </div>
                <div className='w-full h-full'>
                    <img src={icon3} alt="" />
                    <h5 className='text-xl lg:text-3xl 2xl:text-4xl font-bold pt-6 pb-3'>Pay Safely</h5>
                    <p className='text-base lg:text-xl '>Using our milestone payment system, you should only pay for work once it has been finished and you are completely pleased with the quality.</p>
                </div>
            </div>
        </div>
    )
}

export default CreativeAgency