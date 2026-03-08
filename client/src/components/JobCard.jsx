import { Link } from 'react-router-dom';

export default function JobCard({ job, onApply }) {
  const timeAgo = (date) => {
    const hours = Math.floor((Date.now() - new Date(date).getTime()) / 3600000);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const categoryBadgeColors = {
    Design: 'bg-pink-100 text-pink-700 border border-pink-200',
    Coding: 'bg-blue-100 text-blue-700 border border-blue-200',
    Writing: 'bg-purple-100 text-purple-700 border border-purple-200',
    Assignments: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
    'Data Entry': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  };

  const categoryGradients = {
    Design: 'from-pink-500/10 to-rose-500/10',
    Coding: 'from-blue-500/10 to-cyan-500/10',
    Writing: 'from-purple-500/10 to-indigo-500/10',
    Assignments: 'from-yellow-500/10 to-orange-500/10',
    'Data Entry': 'from-emerald-500/10 to-teal-500/10',
  };

  return (
    <div className="group h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col hover:border-gray-300">
      {/* Top accent bar */}
      <div className={`h-1 bg-gradient-to-r ${categoryGradients[job.category] || 'from-gray-500/10 to-gray-500/10'}`}></div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: '1.5'}}>
              {job.title}
            </h3>
            <p className="text-xs text-gray-500 mt-2 font-medium">{timeAgo(job.createdAt)}</p>
          </div>
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${categoryBadgeColors[job.category] || 'bg-gray-100 text-gray-800'}`}>
            {job.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed font-light overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
          {job.description}
        </p>

        {/* Budget and Details */}
        <div className="flex items-center justify-between pt-4 pb-4 border-t border-gray-100">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Budget</p>
            <p className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ${job.budget}
            </p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Deadline</p>
            <p className="text-sm font-bold text-gray-900">
              {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Applicants */}
        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
          <span className="text-base">👤</span>
          <span>{job.applicants} {job.applicants === 1 ? 'applicant' : 'applicants'}</span>
        </div>
      </div>

      {/* Footer Button */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={() => onApply?.(job._id)}
          className="w-full py-3 px-4 font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
