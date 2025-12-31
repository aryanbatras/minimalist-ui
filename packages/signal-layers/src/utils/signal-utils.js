import { useState } from "react";

export const createSignalUtils = (contract) => {
  const [inputSignal, layerSignal, dataSignal, stateSignal] = [
    { ...contract },
    {},
    {},
    {},
  ];

  const layer =
    (name, scope) =>
    (className) => (
      (layerSignal[scope] ||= {}),
      (layerSignal[scope][name] ||= []),
      (layerSignal[scope][name][0] = className)
    );

  const data = (name, key = name) =>
    inputSignal[key] && (dataSignal[name] = inputSignal[key]);

  const state = (name, priority = 0, initial = false) => (
    ((stateSignal._hooks ||= {})[name] ||= (() => {
      const [get, set] = useState(initial);
      return { get, set };
    })()),
    priority &&
      (!stateSignal._priority || priority > stateSignal._priority) &&
      ((stateSignal[name] = stateSignal._hooks[name]),
      (stateSignal._priority = priority))
  );

  const classes = (layers = {}) =>
    Object.values(layers)
      .map((l) => l[0])
      .filter(Boolean)
      .join(" ");

  return { layer, data, state, classes, signals: { inputSignal, layerSignal, dataSignal, stateSignal } };
};