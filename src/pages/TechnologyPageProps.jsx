const TechnologyPageProps = ({
  title,
  highlightedText,
  description,
  imageSrc,
  reverseOrder,
  tittleShade,
}) => {
  return (
    //   <div
    //   className="flex justify-content mb-[150px]"
    //   style={{ flexDirection: reverseOrder ? 'row-reverse' : 'row' }}
    // >
    //   <div className=' text-center '>
    //   {/* w-[500px] */}
    //     <h1 className='text-black font-bold text-[40px]'>{title}<span className='text-primary'>{highlightedText}</span>{tittleShade}</h1>
    //     <div className='text-[16px] text-left p-4'>
    //       <p>{description}</p>
    //     </div>
    //   </div>
    //   <div className=' mb-[10px]' style={{ marginLeft: reverseOrder ? '17px' : '20px' }}>
    //   {/* w-[500px] h-[200px] */}
    //     <img src={imageSrc} alt="" className='h-[300px] mb-[10px] w-[500px]' />
    //   </div>
    // </div>

    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 md:mb-24 mb-7 ${
        reverseOrder ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-black font-bold text-3xl md:text-4xl">
          {title}
          <span className="text-primary">{highlightedText}</span>
          {tittleShade}
        </h1>
        <p className="text-lg mt-4">{description}</p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-start">
        <img
          src={imageSrc}
          alt={title}
          // className="w-full max-w-[500px] h-auto md:h-[300px]"
          className="w-[300px] md:w-[400px] lg:w-[600px] h-auto"
        />
      </div>
    </div>
  );
};

export default TechnologyPageProps;
