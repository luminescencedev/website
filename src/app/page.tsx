export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center font-sans gap-4">
      <h1 className="text-2xl font-normal tracking-tight text-black">
        Welcome to{' '}
        <a
          href="https://github.com/luminescencedev/website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          carabine.studio
        </a>
      </h1>
      <p className="text-base text-gray-500">
        See the UI library at{' '}
        <a
          href="https://ui.carabine.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600 transition-colors underline"
        >
          ui.carabine.studio
        </a>
      </p>
    </main>
  );
}
