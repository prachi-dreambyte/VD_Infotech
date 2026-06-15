"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ProposalModal } from "@/components/ProposalForm";
import { navItems } from "./navData";
import styles from "./Header.module.css";

const SCROLL_THRESHOLD = 60;

function ChevronIcon({ open }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcons() {
  const icons = [
    { label: "Facebook", href: "https://www.facebook.com/vdinfotech", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/vd-infotech", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 00-6-6 6 6 0 00-6 6v7h4v-7a2 2 0 012-2 2 2 0 012 2z" },
    { label: "X", href: "https://x.com/VdInfotech27", path: "M4 4l6.5 8L4 20h2.5l5.3-6.5L16.5 20H20l-6.8-8.3L19.5 4h-2.5l-4.8 5.8L9.2 4H4z" },
    { label: "Instagram", href: "https://www.instagram.com/vdinfotech.in/", path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 4a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" },
  ];

  return (
    <div className={styles.social}>
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          className={styles.socialLink}
          aria-label={icon.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [proposalOpen, setProposalOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topLeft}>
            <span className={styles.topItem}>
              <svg className={styles.topIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              Vd Infotech, No. 505, IT Park, Dehradun, UK 248013
            </span>
            <span className={styles.topDivider} aria-hidden />
            <a href="mailto:info@vdinfotech.in" className={styles.topItem}>
              <svg className={styles.topIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@vdinfotech.in
            </a>
          </div>
          <div className={styles.topRight}>
            <span className={styles.topItem}>
              <svg className={styles.topIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 11h-2V7h2v6zm0 4h-2v-2h2v2z" />
              </svg>
              Mon-Sat: 9:00am To 6:00pm
            </span>
            <SocialIcons />
          </div>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/image/logo1.png"
              alt="VD Infotech"
              width={180}
              height={48}
              className={styles.logoImage}
              priority
            />
          
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() =>
                    item.columns ? setActiveMenu(item.label) : setActiveMenu(null)
                  }
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      item.active ? styles.navLinkActive : ""
                    } ${activeMenu === item.label ? styles.navLinkHover : ""}`}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronIcon open={activeMenu === item.label} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button 
              type="button"
              onClick={() => setProposalOpen(true)} 
              className={styles.ctaBtn}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
              </svg>
              Free Consultation
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        {/* Mobile Menu Header with Logo */}
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileMenuLogo} onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/assets/image/logo1.png"
              alt="VD Infotech"
              width={160}
              height={42}
              className={styles.mobileLogoImage}
            />
          </Link>
        </div>

        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.label} className={styles.mobileNavItem}>
                <div className={styles.mobileNavLinkWrapper}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => !item.columns && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      className={styles.mobileSubmenuToggle}
                      onClick={() => setMobileSubmenuOpen(
                        mobileSubmenuOpen === item.label ? null : item.label
                      )}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronIcon open={mobileSubmenuOpen === item.label} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {item.columns && mobileSubmenuOpen === item.label && (
                  <div className={styles.mobileSubmenu}>
                    {item.columns.map((column, idx) => (
                      <div key={idx} className={styles.mobileSubmenuSection}>
                        {column.title && (
                          <div className={styles.mobileSubmenuTitle}>{column.title}</div>
                        )}
                        <ul className={styles.mobileSubmenuList}>
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className={styles.mobileSubmenuLink}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Footer with CTA Button */}
        <div className={styles.mobileMenuFooter}>
          <button 
            type="button"
            className={styles.mobileCtaBtn}
            onClick={() => {
              setMobileMenuOpen(false);
              setProposalOpen(true);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
            Free Consultation
          </button>
        </div>
      </div>

      {activeMenu && (() => {
        const activeItem = navItems.find((item) => item.label === activeMenu);
        if (!activeItem?.columns) return null;

        return (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <div className={styles.container}>
              <div className={styles.megaGrid}>
                {activeItem.columns.map((column, idx) => (
                  <div key={idx} className={styles.megaColumn}>
                    {column.title && (
                      <div className={styles.megaTitle}>{column.title}</div>
                    )}
                    <ul className={styles.megaLinks}>
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className={styles.megaLink}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {activeItem.featured && (
                  <div className={styles.megaFeatured}>
                    <div className={styles.megaStat}>{activeItem.featured.stat}</div>
                    <p className={styles.megaFeaturedText}>{activeItem.featured.text}</p>
                    <Link
                      href={activeItem.featured.href}
                      className={styles.megaFeaturedCta}
                    >
                      {activeItem.featured.cta}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      <ProposalModal isOpen={proposalOpen} onClose={() => setProposalOpen(false)} />
    </header>
  );
}
