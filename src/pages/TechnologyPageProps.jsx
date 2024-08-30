
const TechnologyPageProps = ({ title, highlightedText, description, imageSrc, reverseOrder,tittleShade }) => {

  return (
    <div 
    className="flex justify-content mb-[150px]"
    style={{ flexDirection: reverseOrder ? 'row-reverse' : 'row' }}
  >
    <div className='w-[500px] text-center ml-[45px]'>
      <h1 className='text-black font-bold text-[40px]'>{title}<span className='text-[#FB5C46]'>{highlightedText}</span>{tittleShade}</h1>
      <div className='text-[16px] text-left p-4'>
        <p>{description}</p>
      </div>
    </div>
    <div className='w-[500px] h-[200px] mb-[10px]' style={{ marginLeft: reverseOrder ? '17px' : '20px' }}>
      <img src={imageSrc} alt="" className='h-[300px] mb-[10px] w-[500px]' />
    </div>
  </div>
  )
}

export default TechnologyPageProps
