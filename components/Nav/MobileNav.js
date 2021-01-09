const mobileNav = () => {
  return (
    <div className="absolute top-0 right-0 flex justify-end bottom-0 z-10 h-screen blur bg-opacity-25 w-full">
      <div className="bg-brand w-3/4 h-screen flex items-center flex-wrap justify-center">
        <nav className="flex w-full items-center justify-center flex-wrap">
          <ul className="font-mono text-sm">
            <li className="text-lead_light py-4 ">
              <span className="text-org">01.</span>About
            </li>
            <li className="text-lead_light  py-4">
              <span className="text-org">02.</span>Experiencia
            </li>
            <li className="text-lead_light  py-4">
              <span className="text-org">03.</span>Trabajo
            </li>
            <li className="text-lead_light  py-4">
              <span className="text-org">04.</span>Contacto
            </li>
          </ul>
        </nav>
        <div className="z-20">
          <button className="btn">Ponte en contacto</button>
        </div>
      </div>
    </div>
  );
};
export default mobileNav;
