export default function Navbar(){
    return <nav className="fixed top-0 w-full z-50 transition-all duratio-300 bg-slate-950/20 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img src="/logo.png" alt="CodeFlow"  className="w-6 h-6 sm:w-8 sm:h-8
                        "/>
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white">Code</span>
                        <span className="text-blue-500">Flow</span>
                    </span>
                </div>
                {/* Nav Links */}
                <div className="hidden flex items-center space-x-6 lg:space-x-8">
                    <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                    <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                </div>
            </div>
        </div>
    </nav>
}