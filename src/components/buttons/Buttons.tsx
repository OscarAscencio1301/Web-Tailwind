

export const Buttons = () => {
    return (
        <>
            <div className="bg-wave-pattern-dots text-center p-4 flex flex-col gap-3 justify-center md:flex-row">
                <a href="#" className='inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 rounded-3xl text-2xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200' >Buy Now!</a>
                <a href="" className='inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 rounded-3xl text-2xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200' >Watch the trailer!</a>
            </div>
            <div className="bg-wave-pattern h-6 bg-repeat-x relative top-3"></div>
        </>
    )
}
