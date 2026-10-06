import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Monitor, 
  CheckCircle, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { useDemoModal } from '../context/DemoModalContext';

export const FeaturedCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { openDemoModal } = useDemoModal();

  const categories = ['All', 'AI & Data', 'Cloud & Analytics', 'Software Engineering'];

  const filteredCourses = activeCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="courses-section" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> High-Demand IT Stacks
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Master the Technologies Employers Are Looking For
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5">
              Comprehensive industry curriculum taught by senior architects. Each course is packed with real-time enterprise projects and dedicated placement assistance.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Card Header Top */}
                <div className="p-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-600" />
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                    <Link to={`/courses/${course.slug}`}>
                      {course.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Card Meta details */}
                <div className="px-6 py-3 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Live &amp; Classroom</span>
                  </div>
                </div>

                {/* Key Syllabus Topics Pills */}
                <div className="p-6 pt-4 space-y-3">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Technologies &amp; Skills Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.keyTopics.slice(0, 6).map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                    {course.keyTopics.length > 6 && (
                      <span className="text-[11px] bg-slate-50 text-blue-600 px-2 py-1 rounded-md font-semibold">
                        +{course.keyTopics.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Career Roles target */}
                  <div className="pt-2 text-xs text-slate-500">
                    <strong className="text-slate-700">Target Roles:</strong>{' '}
                    {course.careerRoles.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-2 border-t border-slate-100 bg-white">
                <div className="bg-amber-50/80 border border-amber-200/70 rounded-xl p-2.5 mb-4 text-center">
                  <span className="text-xs font-bold text-amber-900">
                    {course.freeSessions}
                  </span>
                  <span className="text-[11px] text-amber-800 block">
                    Batches: 7:30 AM &amp; 8:30 PM IST
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="py-2.5 px-3 rounded-xl border border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-xs font-bold text-center transition-all flex items-center justify-center gap-1"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openDemoModal(course.title)}
                    className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center shadow-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Free Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-blue-600 hover:border-blue-600 font-bold text-sm shadow-xs transition-all"
          >
            <span>Explore All Detailed Course Modules &amp; Capstones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
