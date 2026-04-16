export default function Portfolio() {
  const projects = [
    {
      title: "TechFlow Ecosystem",
      category: "Digital Solutions",
      desc: "Web Design & Software Development",
      color: "border-print-cyan",
      tag: "01",
    },
    {
      title: "Iron Legacy Apparel",
      category: "Creative Print",
      desc: "Custom Roland-Printed Jerseys",
      color: "border-print-magenta",
      tag: "02",
    },
    {
      title: "Urban Bites Branding",
      category: "Complete Branding",
      desc: "Logo, Web & Window Graphics",
      color: "border-print-yellow",
      tag: "03",
    },
    {
      title: "Solaris App Interface",
      category: "Digital Solutions",
      desc: "UI/UX Design & Branding",
      color: "border-print-dark",
      tag: "01",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* CABECERA */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-print-dark mb-6 tracking-tighter uppercase">
          Our <span className="text-print-magenta italic">Work</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
          From cutting-edge digital solutions to high-quality physical prints.
          <span className="block text-print-cyan font-bold mt-2">
            Create. Print. Shine.
          </span>
        </p>
      </section>

      {/* GRILLA DE PROYECTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`aspect-[16/10] bg-gray-50 rounded-[2rem] overflow-hidden border-b-8 ${project.color} transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 relative flex items-center justify-center`}
              >
                <span className="text-gray-200 font-black text-6xl opacity-20">
                  {project.tag}
                </span>
              </div>

              <div className="mt-8 px-2">
                <span className="text-xs font-bold text-print-cyan uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black text-print-dark uppercase leading-none">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-medium italic mt-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
