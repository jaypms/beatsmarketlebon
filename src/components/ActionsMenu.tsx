import React, { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";

type Action = {
  label: string;
  onClick: () => void;
  color?: string; // ex: 'text-red-500' pour supprimer en rouge
};

type ActionsMenuProps = {
  actions: Action[];
};

export default function ActionsMenu({ actions }: ActionsMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer menu si clic en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className="p-2 rounded hover:bg-[#3B3B42] transition-colors"
        aria-label="Menu actions"
      >
        <MoreVertical className="w-5 h-5 text-white" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-[#2B2C31] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {actions.map(({ label, onClick, color }, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onClick();
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[#3B3B42] transition-colors ${
                  color || "text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}