import { Menu, X } from 'lucide-react';

const Navigation = (props) => {
    const { isMenuOpen, setIsMenuOpen, scrolled } = props;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-[#080118FA] shadow-lg' : 'bg-transparent'
            }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
                <span
                className={`text-3xl font-bold ${
                    scrolled ? 'text-e-global-color-332724a' : 'text-e-global-color-text'
                }`}
                >
                Coursi Tech
                </span>
            </div>

            <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                {['Home', 'Services', 'Why Us', 'Clients', 'Testimonials', 'Contact Form'].map((item) => (
                    <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Format section ids
                    className={`${
                        scrolled
                        ? 'text-e-global-color-638d055 hover:text-e-global-color-332724a'
                        : 'text-e-global-color-text hover:text-e-global-color-332724a'
                    } transition-colors duration-300`}
                    >
                    {item}
                    </a>
                ))}
                </div>
            </div>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden ${
                scrolled ? 'text-e-global-color-638d055' : 'text-e-global-color-text'
                }`}
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="md:hidden bg-dark shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'Services', 'Why Us', 'Clients', 'Testimonials', 'Contact Us'].map((item) => (
                <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} // Format section ids
                    className="block px-3 py-2 text-e-global-color-638d055 hover:text-e-global-color-332724a"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {item}
                </a>
                ))}
            </div>
            </div>
        )}
        </nav>
    );
};

export default Navigation;

