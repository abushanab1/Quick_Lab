import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Logo destination: go to /location from home, go back to / from /location
  const logoTo = pathname === '/location' ? '/' : '/location';

  // close mobile menu when route changes
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinkCls = 'block rounded px-3 py-2 text-white/80 hover:text-white hover:bg-white/10';

  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white shadow">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo → toggles between Location and Home depending on current page */}
          <Link to={logoTo} className="flex items-center gap-3">
            <img
              src="/QL_logo.png"
              alt="Quick Lab logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <span className="text-lg sm:text-xl font-bold tracking-wide">Quick Lab</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            <li><a href="/#header"  className="text-white/80 hover:text-white">Home</a></li>
            <li><a href="/#call"    className="text-white/80 hover:text-white">Call</a></li>
            <li><a href="/#tests"   className="text-white/80 hover:text-white">Tests</a></li>
            <li><a href="/#contact" className="text-white/80 hover:text-white">Contact</a></li>
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} pb-3`}>
          <ul className="space-y-1 border-t border-white/10 pt-3">
            <li><a href="/#header"  className={navLinkCls}>Home</a></li>
            <li><a href="/#call"    className={navLinkCls}>Call</a></li>
            <li><a href="/#tests"   className={navLinkCls}>Tests</a></li>
            <li><a href="/#contact" className={navLinkCls}>Contact</a></li>
            <li>
              {/* Explicit route links (in case user wants the other page) */}
              {pathname !== '/location' ? (
                <Link to="/location" className={navLinkCls}>Location &amp; Hours</Link>
              ) : (
                <Link to="/" className={navLinkCls}>Back to Home</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
