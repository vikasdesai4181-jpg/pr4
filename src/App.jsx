import { useState } from 'react'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-6 text-center transition-colors"
      style={{ backgroundColor }}
    >
      <section className="rounded-lg bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold">Background Color Changer</h1>
        <label className="mb-3 block" htmlFor="background-color">
          Choose a background color
        </label>
        <input
          className="h-10 w-16 cursor-pointer"
          id="background-color"
          type="color"
          value={backgroundColor}
          onChange={(event) => setBackgroundColor(event.target.value)}
        />
        <p className="mt-3">Selected color: {backgroundColor}</p>
      </section>
    </main>
  )
}

export default App
