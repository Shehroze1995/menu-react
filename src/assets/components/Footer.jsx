import github from '../images/github.png'
import fb from '../images/fb.jpeg'
export const Footer = () => {
  return (
    <div className="border border-black flex flex-col items-center bg-[#25233B] text-[#01B2B6] py-12 gap-2">
      <p className="text-white">Developer: <a href="https://www.facebook.com/mr.shehrox" className='hover:text-blue-600'>Shehroze</a> </p>
      <a href="https://github.com/Shehroze1995" className='hover:text-red-600' target="blank">Click For Source Code</a>
      <div className='flex items-center gap-2'>
      <a target='blank' href="https://github.com/Shehroze1995"><img src={github} alt="Github logo" className='w-8 h-8' /></a>
      <a target='blank' href="https://www.facebook.com/mr.shehrox"><img src={fb} alt="Facebook logo" className='w-8 h-8 rounded-full' /></a>
      </div>
    </div>
  );
};
