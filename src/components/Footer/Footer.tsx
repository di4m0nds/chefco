function Footer() {
  return (
      <footer className="bg-gray-200 text-gray-800 py-6 px-5">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">Acerca de Chefco Pastas</h3>
          <p className="mt-4">Nos dedicamos a ofrecer pastas de alta calidad y sabor excepcional.</p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Contáctanos</h3>
            <p className="mt-2">+54 266 5 005091</p>
          </div>
        </div>
        <div className="text-center mt-8 mb-[80px]">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Chefco Pastas. Todos los derechos reservados.</p>
        </div>
      </footer>
  );
}

export default Footer;
