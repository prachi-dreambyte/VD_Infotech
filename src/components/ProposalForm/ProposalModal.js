"use client";

import { useEffect } from "react";
import ProposalForm from "./ProposalForm";
import styles from "./ProposalModal.module.css";

export default function ProposalModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close form">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ProposalForm
          idPrefix="hero-proposal"
          title="Get Your Free Proposal"
          titleId="proposal-modal-title"
        />
      </div>
    </div>
  );
}
