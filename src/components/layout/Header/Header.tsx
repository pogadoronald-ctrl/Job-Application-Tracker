import logo from '../../../assets/logoonly.webp'

export default function Header(){
    return(
        <>
            <header className="border-b bg-white">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div>
                        <img src={logo} alt="Joblyst Logo" className="h-20 w-auto"></img>
                    </div>
                </div>
            </header>
        </>
    )
}