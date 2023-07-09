import imageHeader from '../../assets/img/hero.jpg'


export const Header = () => {
    return (
        <header className="header">
            <img src={imageHeader} alt="Header" className='w-full' />
            <div className="bg-wave-pattern h-6 bg-repeat-x relative -top-3"></div>
        </header>

    )
}
