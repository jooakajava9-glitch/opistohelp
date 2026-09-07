import Layout from '../components/Layout';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Kirjauduttu sisään: ${email}`);
    } else {
      alert(`Rekisteröity: ${name}`);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen py-12">
        <div className="w-full max-w-md">
          <div className="card">
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">📚</div>
              <h1 className="text-3xl font-bold text-white mb-2">OpistoHelp</h1>
              <p className="text-gray-400">Siistimpi arkea – yhdessä.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Register Name Field */}
              {!isLogin && (
                <div>
                  <label className="block text-white font-semibold mb-2">Nimi</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Koko nimesi"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2">Sähköposti</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sähköposti@opisto.fi"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-white font-semibold mb-2">Salasana</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Salasana"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-10 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me / Forgot Password */}
              {isLogin && (
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    Muista minut
                  </label>
                  <a href="#" className="text-green-400 hover:text-green-300">
                    Unohdit salasanan?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full py-3 font-semibold text-lg mt-6">
                {isLogin ? '🔓 Kirjaudu sisään' : '✅ Rekisteröidy'}
              </button>
            </form>

            {/* Toggle Login/Register */}
            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400 mb-3">
                {isLogin ? 'Eikö sinulla ole tiliä?' : 'Onko sinulla jo tili?'}
              </p>
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setEmail('');
                  setPassword('');
                  setName('');
                }}
                className="text-green-400 hover:text-green-300 font-semibold"
              >
                {isLogin ? '➕ Rekisteröidy tässä' : '🔐 Kirjaudu sisään'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;