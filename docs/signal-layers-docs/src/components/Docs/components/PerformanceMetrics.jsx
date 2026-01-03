export function PerformanceMetrics() {
  const bundleAnalysis = [
    { metric: "Traditional UI Library", value: "~50KB", performance: "text-red-600" },
    { metric: "Signal UI (used components)", value: "~3KB", performance: "text-green-600" },
    { metric: "Bundle reduction", value: "94%", performance: "text-blue-600" }
  ];

  const runtimeAnalysis = [
    { metric: "Signal resolution", value: "<1ms", performance: "text-green-600" },
    { metric: "Class generation", value: "0ms", performance: "text-green-600" },
    { metric: "Memory footprint", value: "Minimal", performance: "text-green-600" }
  ];

  const MetricRow = ({ metric, value, performance }) => (
    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-200">
      <span className="text-sm text-black font-light">{metric}</span>
      <span className={`text-sm font-light ${performance}`}>{value}</span>
    </div>
  );

  return (
    <div className="mb-32">
      <h2 className="text-5xl font-light mb-16 text-black tracking-tight">Performance Analysis</h2>
      
      <div className="space-y-20">
        <div>
          <h3 className="text-2xl font-light mb-8 text-slate-700">Bundle Optimization</h3>
          <div className="space-y-3">
            {bundleAnalysis.map((item, index) => (
              <MetricRow
                key={index}
                metric={item.metric}
                value={item.value}
                performance={item.performance}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-light mb-8 text-slate-700">Runtime Performance</h3>
          <div className="space-y-3">
            {runtimeAnalysis.map((item, index) => (
              <MetricRow
                key={index}
                metric={item.metric}
                value={item.value}
                performance={item.performance}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
