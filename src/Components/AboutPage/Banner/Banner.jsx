import aboutBG from '../../../assets/aboutBG.png';

const Banner = () => {
    return (
        <div className='py-20' style={{ backgroundImage: `url(${aboutBG})` }}>
            <div className='container mx-auto md:py-24'>
                <h2 className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold pb-6 text-[#545454]'>About us </h2>
                <p className='text-lg lg:text-2xl 2xl:text-3xl max-w-[500px]'>Here, desire and invention converge, candour fosters teamwork, and the impossibly becomes achievable. We support the courageous in order to accomplish the remarkable.</p>
            </div>
        </div>
    );
};

export default Banner;
