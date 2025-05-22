import './Home.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-end pb-10">
      <div className="w-full max-w-[375px] mx-4 p-0">
        <div className="bg-white rounded-t-xl shadow-none border border-gray-300 h-[700px] flex flex-col justify-end p-6">
          <h1 className="text-2xl font-bold mb-2 text-left">Welcome to PopX</h1>
          <p className="text-gray-500 text-left mb-6 text-base typing-text">
            Lorem ipsum dolor sit amet
          </p>
          <div className="flex flex-col gap-3">
            <a href="/signup">
              <button className="create-account-btn w-full bg-violet-600 text-white py-3 rounded-md font-semibold text-base">
                Create Account
              </button>
            </a>
            <a href="/login">
              <button className="w-full bg-violet-200 text-violet-800 py-3 rounded-md font-semibold text-base">
                Already Registered? Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
