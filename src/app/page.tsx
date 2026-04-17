export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center font-sans">
      <h1 className="text-2xl font-[400] tracking-tight text-black">
        Bienvenue sur{' '}
        <a
          href="https://github.com/carabine-studio/website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          carabine.studio
        </a>
      </h1>
    </main>
  );
}
