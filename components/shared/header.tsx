function Header({ title }: { title: string }) {
  return (
    <div className="bg-card-foreground px-5 py-4 rounded-2xl">
      <h2 className="font-light text-3xl md:text-4xl lg:text-5xl text-white text-center sm:text-left capitalize">
        {title}
      </h2>
    </div>
  );
}

export default Header;
