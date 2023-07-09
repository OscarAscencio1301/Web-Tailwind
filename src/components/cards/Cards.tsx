import videoCard1 from '../../assets/videos/video01.mp4'
import videoCard2 from '../../assets/videos/video02.mp4'
import imageCoint from '../../assets/img/coin.gif'

export const Cards = () => {
  return (
    <section className="bg-pattern-characters-red py-28">
    <div className="lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3 ">
        <div className="left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">

            <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
                <div className="cover bg-black">
                    <video src={videoCard1} autoPlay loop muted></video>
                </div>
                <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                    <h3 className="font-black text-4xl py-10">Play together</h3>
                    <p className="text-xl">Work with (or against) your friends and family*.</p>
                    <a href="#" className="xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group">
                        Watch the Trailer
                        <span className="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4"></span>
                    </a>
                </div>
                <div className="dots flex justify-between p-4">
                    <div className="dot h-3 w-3 bg-blue-600 rounded-full"></div>
                    <div className="dot h-3 w-3 bg-blue-600 rounded-full"></div>
                </div>
            </div>

        </div>

        <div className="right w-5/6 md:w-1/2 text-center mx-auto">
            <h2 className="font-black text-white text-6xl py-8">Available Now</h2>

            <p className="font-bold text-white text-2xl mx-auto py-10 w-4/5">One of the best Mario games ever...</p>

            <p className="font-black text-white text-4xl mx-auto py-10 w-4/5">Team up for a paws-itively adorable adventure!</p>
            <p className="text-white text-center w-4/5 mx-auto">
                Bowser is up to his old tricks again and only Mario and his friends can save the day! Use power-ups like the Super Bell, which grants catlike abilities like climbing and scratching, to overcome Bowser and his minions.
            </p>

            <div className="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
                <div className="cover bg-black">
                    <video src={videoCard2} autoPlay loop muted></video>
                </div>
                <div className="content bg-wave-pattern bg-repeat-x relative -top-3">
                    <h3 className="font-black text-4xl py-8">Explore</h3>
                    <p className="text-xl">Prowl through some popular places.</p>
                    <a href="#" className="xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group">
                        Take a look!
                        <span className="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4"></span>
                    </a>
                </div>

                <div className="dots flex justify-between p-4">
                    <div className="dot h-3 w-3 bg-blue-600 rounded-full"></div>
                    <div className="dot h-3 w-3 bg-blue-600 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="footer text-center flex justify-center gap-9 pt-10">
        <img src={imageCoint} alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />
        <img src={imageCoint} alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />
        <img src={imageCoint} alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]" />
        <img src={imageCoint} alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block" />
        <img src={imageCoint} alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block" />
        <img src={imageCoint} alt="coin" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] hidden sm:block" />
    </div>
</section>


  )
}
