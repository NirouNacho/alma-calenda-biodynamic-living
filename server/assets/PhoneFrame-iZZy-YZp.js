import { G as jsxRuntimeExports } from "./server-CoAeSUMu.js";
function PhoneFrame({
  children,
  bezel = "#1a1f2e",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative shrink-0 w-[320px] h-[680px] rounded-[44px] p-[6px] shadow-2xl ${className}`,
      style: { background: bezel },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-[38px] overflow-hidden relative", children })
      ]
    }
  );
}
export {
  PhoneFrame as P
};
