// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* removed bold site title in navbar */}
          <nav>
            <ul className="flex gap-6">
              <li><a href="#services" className="hover:text-accent">Services</a></li>
              <li><a href="#gallery" className="hover:text-accent">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-accent">Reviews</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
              <li>
                <a
                  href="#quote"
                  className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition"
                >
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  