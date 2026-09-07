import { DollarSign, CheckCircle, Calendar, TrendingUp } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: <DollarSign className="text-green-400" size={32} />,
      label: 'Saldo',
      value: '€45,50',
    },
    {
      icon: <CheckCircle className="text-blue-400" size={32} />,
      label: 'Tehdyt tehtävät',
      value: '12',
    },
    {
      icon: <Calendar className="text-purple-400" size={32} />,
      label: 'Tulevat tehtävät',
      value: '3',
    },
    {
      icon: <TrendingUp className="text-orange-400" size={32} />,
      label: 'Arvosana',
      value: '⭐ 4.8/5',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="card">
          <div className="flex items-center gap-4">
            {stat.icon}
            <div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;