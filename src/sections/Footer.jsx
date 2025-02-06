const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Termes & Conditions</p>
        <p>|</p>
        <p>Politique de confidentialité</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/2121-asoff" className="group">
            <img 
              src="/assets/github.svg" 
              alt="github" 
              className="w-7 h-7 group-hover:scale-110 group-hover:brightness-75 transition-transform duration-300"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/astride-saman/" className="group">
            <img 
              alt="linkedin" 
              src="/assets/linkedin-white.svg" 
              className="w-7 h-7 group-hover:scale-110 group-hover:brightness-75 transition-transform duration-300"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/astride.smn/" className="group">
            <img 
              src="/assets/instagram.svg" 
              alt="instagram" 
              className="w-7 h-7 group-hover:scale-110 group-hover:brightness-75 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Astride SAMAN. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
