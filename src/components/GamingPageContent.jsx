import GamingPageBg from '../assets/GamePageBg.png'
import GamePagePcImage from '../assets/GamePagePcImage.png'
const GamingPageContent = () => {
  return (
    <div className='w-full flex justify-center items-center h-[1000px] md:min-h-screen' style={{ backgroundImage: `url(${GamingPageBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="h-[1000px] md:min-h-[600px] flex flex-col items-center">
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-[25px] text-[#FF6600]">Gaming</h1>
        </div>
        <div className="mb-6 mt-2">
          <h1 className="text-3xl font-bold text-white">Game Deveolpment</h1>
        </div>
        <div className="text-center mb-6">
          <p className="text-white md:w-[674px] w-[370px]  ">
            We focus on delivering exciting games that stand out, genuinely engage the players, and remain in the memory for a long time. Our expert game app developers build future-proof products optimized for the best performance. The Game Development process requires a number of elements to be merged together for optimum results. A game developer needs to write a code and work on programming a health bar. Then, game artists need to design assets. Then a QC (Quality Control) personnel needs to assure the quality of the game and see that the game works as expected. We make sure you get all this under one roof, our roof!!!
          </p>
        </div>
        <div className=''>
          <img src={GamePagePcImage} alt="GamePagePcImage" className="h-[500px] w-[600px]" />
        </div>


      </div>
    </div>
  )
}

export default GamingPageContent