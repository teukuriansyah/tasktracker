import { NativeBiometric } from 'capacitor-native-biometric';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleBiometricAuth = async () => {
    try{
      await NativeBiometric.verifyIdentity({
        reason: "For easy log in",
        title: "Log in",
        subtitle: "Maybe add subtitle here?",
        description: "This is descripotion",
      })
      await NativeBiometric.setCredentials({
        username: "username",
        password: "password",
        server: "com.test.tasktracker"
      })
      navigate("/")
    }
    catch {
      console.log("error")
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold">TaskTracker+</h1>
        <span className="text-sm text-gray-500 flex justify-center">Aplikasi Terkunci</span>
      </div>

      <button 
        onClick={handleBiometricAuth}
        className="border-2 border-dashed border-blue-600 bg-blue-100 rounded-full aspect-square p-4 active:scale-95 transition-transform"
      >
        <span className="text-[70px] flex justify-center">☝️</span>
      </button>

      <div>
        <h3 className="text-lg font-bold text-center">Sentuh Sensor Sidik Jari</h3>
        <span className="text-sm text-gray-500 text-center">Ketuk ikon di atas untuk konfirmasi identitas</span>
      </div>
    </div>
  );
}