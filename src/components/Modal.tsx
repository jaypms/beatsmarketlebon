import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on click outside modal content
  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div
      onClick={onBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      tabIndex={-1}
    >
      <div
        ref={modalRef}
        className="bg-[#121214] rounded-lg max-w-lg w-full max-h-[90vh] overflow-auto p-6 shadow-lg"
      >
        {title && (
          <h2 id="modal-title" className="text-xl font-bold text-white mb-4 font-['Poppins']">
            {title}
          </h2>
        )}
        <div className="mb-6">{children}</div>
        {footer && (
          <footer className="flex justify-end gap-4 border-t border-gray-700 pt-4">{footer}</footer>
        )}
      </div>
    </div>
  );
}