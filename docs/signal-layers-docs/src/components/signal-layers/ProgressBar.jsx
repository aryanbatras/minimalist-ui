/**
 * ProgressBar - Customizable progress bar with various themes and sizes
 * 
 * SIGNALS
 *   SHAPE: square
 *   TONE: primary, success, danger, neutral, transparent
 *   SIZE: xs, sm, md, lg, xl, responsive
 *   LAYOUT: inline, block, centered
 * 
 * DATA PROPS
 *   REQUIRED: None
 *   OPTIONAL: value=0, max=100, className=""
 * 
 * DEFAULTS: md size, violet-400 progress, slate-300 track, fully rounded, block layout
 * 
 * USAGE: <ProgressBar value={75} /> | <ProgressBar lg primary value={60} max={120} /> | <ProgressBar responsive success value={90} /> | <ProgressBar square danger value={3} max={10} />
 */

import { createSignalUtils } from "./";
export function ProgressBar(contract = {}) {
  const { layer, data, state, classes, signals } = createSignalUtils(contract);
  const { inputSignal, layerSignal, dataSignal, stateSignal } = signals;
  let progressbar;
  progressbar = {
    base: layer("base", "progressbar"),
    size: layer("size", "progressbar"),
    color: layer("color", "progressbar"),
    shape: layer("shape", "progressbar"),
    layout: layer("layout", "progressbar")
  };
  progressbar.base("[&::-webkit-progress-value]:transition-all [&::-webkit-progress-bar]:transition-all [&::-moz-progress-bar]:transition-all");
  progressbar.shape("[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:rounded-full [&::-moz-progress-bar]:rounded-full");
  progressbar.color("[&::-webkit-progress-value]:bg-violet-400 [&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-violet-400");
  progressbar.size("h-2 w-32");
  progressbar.layout("block");

  inputSignal.square && progressbar.shape(`[&::-webkit-progress-bar]:rounded-none [&::-webkit-progress-value]:rounded-none [&::-moz-progress-bar]:rounded-none`);

  inputSignal.primary && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:bg-blue-500`);
  inputSignal.success && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-green-500 [&::-webkit-progress-value]:bg-green-500`);
  inputSignal.danger && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-red-500 [&::-webkit-progress-value]:bg-red-500`);
  inputSignal.neutral && progressbar.color(`[&::-webkit-progress-bar]:bg-slate-300 [&::-moz-progress-bar]:bg-gray-500 [&::-webkit-progress-value]:bg-gray-500`);
  inputSignal.transparent && progressbar.color(`[&::-webkit-progress-bar]:bg-transparent [&::-moz-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-transparent`);

  inputSignal.sm && progressbar.size("h-1 w-16");
  inputSignal.md && progressbar.size("h-2 w-32");
  inputSignal.lg && progressbar.size("h-3 w-48");
  inputSignal.xl && progressbar.size("h-4 w-64");
  inputSignal.responsive && progressbar.size("h-2 w-full");

  inputSignal.inline && progressbar.layout("inline-block");
  inputSignal.block && progressbar.layout("block");
  inputSignal.centered && progressbar.layout("mx-auto");

  inputSignal.value && data("value");
  inputSignal.max && data("max");
  inputSignal.className && data("className");

  const value =
    dataSignal.value !== undefined
      ? Math.min(100, Math.max(0, Number(dataSignal.value)))
      : 0;

  return (
    <progress
      value={value}
      max={dataSignal.max ?? 100}
      className={`${classes(layerSignal.progressbar)} ${dataSignal.className || ''}`}
    />
  );
}
