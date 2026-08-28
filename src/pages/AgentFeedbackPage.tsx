import React, { useState } from 'react';
import { PageId } from '../types';
import { MessageSquare, CheckCircle2, Star, Send } from 'lucide-react';

interface AgentFeedbackPageProps {
  onNavigate: (page: PageId) => void;
}

export const AgentFeedbackPage: React.FC<AgentFeedbackPageProps> = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [rating, setRating] = useState(5);
  const [formData, setFormData] = useState({
    agentName: '',
    agencyCode: '',
    category: 'Agency Training & Mentorship',
    comments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSent(true);
  };

  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Internal Excellence
          </span>
          <h1 className="text-3xl font-bold font-serif text-slate-900">
            Agent Feedback &amp; Continuous Improvement
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            At Nuovo Paradigm, we uphold our &ldquo;I&rdquo; in P.R.I.D.E &mdash; Improve Continuously. Share your feedback, training requests, or suggestions with management.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
          {feedbackSent ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Feedback Transmitted</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contributing to the growth and high standards of Nuovo Paradigm agency culture.
              </p>
              <button
                onClick={() => setFeedbackSent(false)}
                className="mt-2 px-5 py-2.5 bg-[#2c72af] text-white text-xs font-bold rounded-lg"
              >
                Submit New Feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Agent Name / Code (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Leave blank for anonymous"
                    value={formData.agentName}
                    onChange={(e) => setFormData({ ...formData, agentName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af] bg-white"
                  >
                    <option>Agency Training &amp; Mentorship</option>
                    <option>Operational &amp; Submission Support</option>
                    <option>Office Facilities &amp; Environment</option>
                    <option>Marketing &amp; Digital Materials</option>
                    <option>Leadership Coaching</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-2">Overall Experience Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        rating >= star
                          ? 'text-amber-400 border-amber-300 bg-amber-50'
                          : 'text-slate-300 border-slate-200'
                      }`}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-slate-600 ml-2">
                    {rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Your Suggestions / Insights *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we better support your production, well-being, and leadership journey?..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2c72af]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#27bac4] hover:bg-[#20aab4] text-white font-bold uppercase tracking-wider rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Agent Feedback</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
