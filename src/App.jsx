function App() {

  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Aplicación de ejemplo</h1>
          <p className="text-gray-600">Puedes personalizar esta aplicación en /src/App.jsx</p>
          <p className="text-xs text-zinc-300">API TOKEN app_{location.hash.replace('#', '')}</p>
        </div>
      </div>
    </>
  )
}


export default App
