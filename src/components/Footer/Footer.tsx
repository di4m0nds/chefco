function Footer() {
  return (
      <footer className="bg-gray-200 text-gray-800 py-6 px-5">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">Acerca de Chefco Pastas</h3>
          <p className="mt-4">Nos dedicamos a ofrecer pastas de alta calidad y sabor excepcional.</p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Contáctanos</h3>
            <div className="w-full h-[100px] flex-col justify-center items-center">
              <Field title="Celular:" subtitle="+54 266 5 005091" link={null} />
              <Field title="Instagram:" subtitle="Ver mas" link="https://www.instagram.com/chefcopastas/" />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 mb-[80px]">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Chefco Pastas. Todos los derechos reservados.</p>
        </div>
      </footer>
  );
}

function Field({ title, subtitle, link } : { title: string , subtitle: string, link: string | null }) {
  return (
    <div className="flex justify-between items-center mx-[20px] md:mx-[200px] lg:mx-[300px] xl:mx-[500px]">
      <p className="mt-2 font-bold">{title}</p>
      {link
        ? <a href={link} className="underline">{subtitle}</a>
        : <p className="mt-2">{subtitle}</p>
      }
    </div>
  )
}

export default Footer;
