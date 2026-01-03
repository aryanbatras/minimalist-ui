// Template for new docs pages - copy this structure for consistency

import { DocsLayout } from "./DocsLayout";

export function NewDocsPage() {
  return (
    <DocsLayout>
      <div className="max-w-6xl space-y-24 text-lg leading-relaxed font-normal">
        <div className="space-y-16">
          <h1 className="text-7xl font-light text-black tracking-tight leading-tight">Page Title</h1>
          
          <div className="space-y-8">
            <h2 className="text-5xl font-light text-black leading-tight">Section Title</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              Content here !
            </p>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
