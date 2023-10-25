const Footer = () => {
  return (
    <footer className="footer p-3 md:p-10 md:pl-10 lg:pl-20 bg-[#151515] text-white">
      <aside>
        <div className="flex flex-col items-center font-bold">
          <img src="https://i.ibb.co/6sBr2W2/footer.png" alt="footer" />
          <p>Car Doctor</p>
        </div>
        <p className="pt-3">
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br /> trainer who is also a serial .
        </p>
      </aside>
      <nav >
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
