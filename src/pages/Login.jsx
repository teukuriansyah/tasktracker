export default function Login() {
  return(
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold">TaskTracker+</h1>
        <span className="text-sm text-gray-500 flex justify-center">Aplikasi Terkunci</span>
      </div>
      <div className="border-2 border-dashed border-blue-600 bg-blue-100 rounded-full aspect-square">
        <span className="text-[70px] flex justify-center">☝️</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-center">Sentuh Sensor Sidik Jari</h3>
        <span className="text-sm text-gray-500 text-center">Konfirmasi identitas Anda untuk melanjutkan</span>
      </div>
    </div>
  )
}