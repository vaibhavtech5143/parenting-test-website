/* src/App.css */
import "font-awesome/css/font-awesome.css";


const Hero = () => {

  // card data object
  const data = [
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    },
    
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
    {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, {
      image: '/src/assets/Images/title01.jpg',
      title: 'lorem ipsum dolor sit amet, consectetur',
      tag:'lorem id',
      date: 'June 12, 2023',
    }, 
  ];
// button object
  const buttonLabels = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7'];
  return (
    <>
      {/* Filter  button and search bar line */}
     
      <div className="flex flex-col items-center justify-center sm:mb-10">
  <div className="relative">
  <div className=" transform-translate-y-1/2 px-4 py-3 overflow hidden bg-green-400"></div>
    <i className="fa fa-search fa-lg absolute left-4 top-1/3 transform -translate-y-1/2"></i>
    <input
      type="text"
      placeholder="Search..."
      className="pl-10 px-4 py-3 border rounded-full mb-3 sm:px-[40vh] sm:py-5 sm:mb-7"
    />
  </div>
  <div className="flex flex-wrap justify-center space-x-2">
    {buttonLabels.map((label, index) => (
      <button
        key={index}
        className="px-7 py-4 bg-white border-2 border-black text-black rounded-lg mb-2 hover:bg-green-400"
      >
        {label}
      </button>
    ))}
  </div>
</div>


      {/* Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[550px]  shadow-xl rounded-[25px] overflow-hidden"
              style={{ marginBottom: '2rem' }}
            >
              <div className="h-[70%]">
                <img
                  src={item.image}
                  alt="Image"
                  className="w-full h-full object-cover rounded-[25px] overflow-hidden"
                />
              </div>
              <div className=" p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <div className="flex justify-between items-center mt-10 ml-5">
                  <button className="px-6 py-3 border rounded-md">Button</button>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default Hero;
