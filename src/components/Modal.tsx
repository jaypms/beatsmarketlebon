import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  // Gestion fermeture avec Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal content */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 flex items-center justify-center z-50 px-4"
      >
        <div
          className="bg-[#27282D] rounded-lg shadow-lg max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {title && (
            <header className="mb-4">
              <h2 className="text-xl font-semibold font-['Poppins']">{title}</h2>
            </header>
          )}
          <section className="mb-6">{children}</section>
          {footer && <footer className="flex justify-end space-x-3">{footer}</footer>}
          <button
            onClick={onClose}
            aria-label="Fermer la modale"
            className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 transition-colors"
          >
            &#10005;
          </button>
        </div>
      </div>
    </>
  );
}