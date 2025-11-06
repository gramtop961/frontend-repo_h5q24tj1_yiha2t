import React from 'react';

const Modal = ({ open, title, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/80" onClick={onClose} />
      <div className="relative z-10 w-[92vw] max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6">
        {title && <h3 className="text-lg font-semibold text-slate-100 mb-3">{title}</h3>}
        <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
