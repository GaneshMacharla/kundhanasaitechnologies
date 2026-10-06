import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Sparkles, 
  Clock, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  Download, 
  BookOpen, 
  Layers,
  Calendar
} from 'lucide-react';
import { COURSES, Course } from '../data/coursesData';
import { useDemoModal } from '../context/DemoModalContext';
import { CtaBanner } from '../components/CtaBanner';

export const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { openDemoModal } = useDemoModal();

  const categories = ['All', 'AI & Data', 'Cloud & Analytics', 'Software Engineering'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.keyTopics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#0A2540] via-[#0F325C] to-[#0A2540] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> High-Demand IT Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
            Industry-Oriented IT Training Courses
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Designed by practicing architects to bridge the gap between classroom theory and real corporate project deliverables. All tracks include the first 4 sessions free.
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-2xl p-2 shadow-2xl flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Search topics (e.g. PySpark, RAG, Snowflake, .NET, Talend)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Pills & Count */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-slate-200 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-800">{filteredCourses.length}</strong> technology courses
          </div>
        </div>

        {/* Courses Detailed List */}
        <div className="space-y-8 mt-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left/Middle Column: Title, description, key topics */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        {course.badge}
                      </span>
                    )}
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {course.freeSessions}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-slate-900 hover:text-blue-600 transition-colors">
                    <Link to={`/courses/${course.slug}`}>
                      {course.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {course.fullDesc}
                  </p>

                  {/* Modules quick preview */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Modules Covered:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {course.syllabus.slice(0, 4).map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 bg-slate-50 p-2 rounded-lg">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{m.moduleTitle}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Strip */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-500 mr-1">Tools &amp; Libraries:</span>
                    {course.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Meta details, batch & CTAs */}
                <div className="lg:col-span-4 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Course Specifics
                    </h3>
                    <div className="space-y-2.5 text-xs text-slate-700">
                      <div className="flex items-center justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-600" /> Duration:
                        </span>
                        <span className="font-bold text-slate-900">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Monitor className="w-3.5 h-3.5 text-emerald-600" /> Mode:
                        </span>
                        <span className="font-semibold text-slate-900">{course.mode}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-200">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-600" /> Batches:
                        </span>
                        <span className="font-bold text-slate-900">7:30 AM &amp; 8:30 PM</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-500">Demo Offer:</span>
                        <span className="font-bold text-emerald-600">4 Sessions Free</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => openDemoModal(course.title)}
                      className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Book Free Demo</span>
                    </button>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="w-full py-2.5 bg-white hover:bg-slate-100 text-blue-600 border border-blue-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>View Full Curriculum &amp; Projects</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm">No courses matching your search "{searchTerm}".</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <CtaBanner />
    </div>
  );
};
