import { useNavigate } from "react-router-dom"

const WhoWeAre = () => {
    const navigate = useNavigate();
  return (
    // <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${ServiceBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
<div className='w-full flex justify-center items-center mb-[30px]'>

<div className="container flex flex-col items-center">
  <div className="mb-6 mt-4">
    <h1 className="text-[60px] font-bold text-[#0E315A]">Driving Your Digital Transformation</h1>
  </div>
  <div className="text-center mb-6">
    <p className="text-[#0E315A] md:w-[674px] w-[370px] text-[20px]  ">
    We help enterprises through custom business solutions and provide IT outsourcing services to companies with agility, quality, and commitment.

    </p>
  </div>

  <div className="text-center mb-6 flex justify-between space-x-4">
  <button className="border border-[#FA5C46] text-[#0E315A] px-4 py-2 rounded-[3px] text-[20px] relative flex items-center group"
  onClick={()=>navigate('/services')}>Our Services
    <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
  <i class="fa-solid fa-arrow-right"></i>
  </span></button>
<div>
<button
  className="border border-[#FA5C46] text-[#0E315A] px-4 py-2 rounded-[3px] text-[20px] relative flex items-center group"
  onClick={() => navigate('/portfolio-page')}
>
  Check Portfolio
  <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
  <i class="fa-solid fa-arrow-right"></i>
  </span>
</button>

</div>
</div>


</div>
</div>
  )
}

export default WhoWeAre