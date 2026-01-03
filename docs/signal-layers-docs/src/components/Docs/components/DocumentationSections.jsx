import { Link } from "react-router-dom";
import { docsSections } from "../Navigation/data/docsSections";
import { getDifficultyColor } from "../utils/docsUtils";

export function DocumentationSections() {
  return (
    <div className="mb-32">
      <h2 className="text-5xl font-light mb-16 text-black tracking-tight">Technical Documentation</h2>
      <div className="grid gap-6">
        {docsSections.map((section) => (
          <Link
            key={section.id}
            to={section.route}
            className="group block border border-slate-200 rounded-xl p-6 hover:border-slate-400 transition-all duration-200 hover:shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-light text-black group-hover:text-slate-700 transition-colors">
                {section.title}
              </h3>
              <span className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(section.difficulty)}`}>
                {section.difficulty}
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3 leading-relaxed font-light">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {section.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded border border-slate-200"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500">{section.estimatedReadTime}</span>
              <span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
                Technical Analysis →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
