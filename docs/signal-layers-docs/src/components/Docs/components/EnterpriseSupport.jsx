export function EnterpriseSupport() {
  const resources = [
    {
      title: "GitHub Repository",
      technical: "Issue tracking. Feature requests. Ecosystem contributions. Enterprise support resources.",
      link: {
        text: "Repository →",
        url: "https://github.com/aryanbatras/minimalist-ui"
      }
    },
    {
      title: "Developer Community",
      technical: "Senior developer discussions. Pattern sharing. Enterprise implementations. Best practices.",
      status: "Discord - Coming Soon"
    },
    {
      title: "Enterprise Examples",
      technical: "Production implementations. Performance case studies. Large-scale strategies.",
      status: "Case Studies - Coming Soon"
    }
  ];

  return (
    <div className="mb-32">
      <h2 className="text-5xl font-light mb-16 text-black tracking-tight">Resources</h2>
      
      <div className="space-y-16">
        {resources.map((resource, index) => (
          <div key={index} className="border-l border-slate-300 pl-6 space-y-4">
            <h3 className="text-xl font-light text-black">{resource.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              {resource.technical}
            </p>
            {resource.link && (
              <a
                href={resource.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-slate-600 transition-colors font-light"
              >
                {resource.link.text}
              </a>
            )}
            {resource.status && (
              <p className="text-xs text-slate-500 font-light">{resource.status}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
