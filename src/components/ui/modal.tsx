import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: string;
}

export default function Modal({
  title,
  children,
  isOpen,
  onClose,
  width = "max-w-lg",
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div
        className={`relative bg-zinc-900 rounded-xl shadow-xl w-full ${width} p-6`}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition"
            >
              <X size={20} />
            </button>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}