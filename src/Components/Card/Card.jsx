const Card = () => {
    // card data object
    const cardata = [
      {
        id: '1',
        title: 'Card Title',
        image: 'src/assets/Images/test02.png',
        button: 'Button',
      },
      {
        id: '2',
        title: 'Card Title',
        image: 'src/assets/Images/test02.png',
        button: 'Button',
      },
      {
        id: '3',
        title: 'Card Title',
        image: 'src/assets/Images/test02.png',
        button: 'Button',
      },
    ];
  
    return (
      <>
      {/* heading */}
       <span className="font-bold text-5xl text-gray-800 block ml-[20%] mt-10">Recommended</span>
       {/* boxes  */}
        <div className="flex flex-wrap gap-10 justify-center mb-10 mt-[100px]">
          {cardata.map((item, index) => (
            <div
              key={index}
              className="w-[450px] h-[550px] bg-gray-200 rounded-[30px] shadow-md relative overflow-hidden"
            >
              {/* Image */}
              <img src={item.image} alt="Image" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end">
                {/* Button */}
                <button className="px-1 py-2 w-[50%] bg-gray-300 rounded-full ml-4">
                  {item.button}
                </button>
                {/* Title */}
                <div className="bg-transparent opacity-90 p-4 rounded-md">
                  <h2 className="text-xl text-white font-semibold mb-2 ml-4">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* horizontal line  */}
        <div className="w-[78%] ml-[150px] mb-10 border-t border-gray-500"></div>
      </>
    );
  };
  
  export default Card;
  