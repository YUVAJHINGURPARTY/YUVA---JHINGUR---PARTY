export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-50 text-gray-900">
      <header className="bg-green-700 text-white py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold">🦗 युवा झिंगुर पार्टी</h1>
          <p className="mt-3 text-lg">हर आवाज़ गूंजेगी, हर युवा जुड़ेगा!</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">हमारी पहचान</h2>
        <p className="text-lg leading-8">
          युवा झिंगुर पार्टी युवाओं की आवाज़ और नई सोच को आगे बढ़ाने वाला मंच है।
          हमारा उद्देश्य शिक्षा, रोजगार और डिजिटल भारत को मजबूत बनाना है।
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">युवा एजेंडा</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🎓 आधुनिक शिक्षा मिशन</h3>
              <p>हर युवा को आधुनिक और डिजिटल शिक्षा उपलब्ध कराना।</p>
            </div>

            <div className="bg-yellow-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🚀 युवा रोजगार अभियान</h3>
              <p>स्किल और रोजगार के नए अवसर तैयार करना।</p>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🗣️ युवा संवाद मंच</h3>
              <p>हर युवा की आवाज़ को सम्मान और मंच देना।</p>
            </div>

            <div className="bg-yellow-50 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🌿 हरित भविष्य अभियान</h3>
              <p>साफ और हरित भारत के लिए जागरूकता बढ़ाना।</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-6 text-center">
        <p>© 2026 युवा झिंगुर पार्टी | Official Website</p>
      </footer>
    </div>
  );
}
