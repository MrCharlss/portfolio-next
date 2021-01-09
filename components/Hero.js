const Hero = () => {
  return (
    <section className="h-screen py-24 flex items-center px-8 md:px-8 lg:px-24 xl:px-32">
      <div className="h-auto">
        <p className="text-org font-mono py-2">Hola! Soy</p>
        <h1 className="text-lead tracking-wider  font-lead text-4xl md:text-6xl md:py-0 py-2">
          Carlos Camacho.
        </h1>
        <h1 className="text-lead_light tracking-wider  font-lead text-3xl md:text-5xl md:py-0 py-2">
          Home Schooled Fullstack Web Dev.
        </h1>
        <p className="text-lead_light tracking-wider  font-lead text-sm py-2">
          Desarrollo sitios y aplicaciones web modernos, basados en Javascript.
        </p>
        <button className="btn mt-12">Ponte en contacto</button>
      </div>
    </section>
  );
};

export default Hero;
