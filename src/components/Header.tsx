"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg 
                className="h-5 sm:h-6 md:h-7 transition-all duration-300" 
                viewBox="0 0 325 59" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M79.467 29.5C79.467 45.7924 68.8839 59 53.2644 59C45.3586 59 24.2435 55.1026 18.0412 52.1766C6.50502 47.3773 0 40.3946 0 29.5C0 18.6054 6.50502 11.6227 18.0412 6.82337C24.2435 3.89737 45.3586 0 53.2644 0C68.8839 0 79.467 13.2076 79.467 29.5ZM24.4841 29.5C24.4841 34.1202 20.8301 37.8657 16.3226 37.8657C11.8152 37.8657 8.16114 34.1202 8.16114 29.5C8.16114 24.8798 11.8152 21.1343 16.3226 21.1343C20.8301 21.1343 24.4841 24.8798 24.4841 29.5ZM69.7544 29.5C69.7544 38.4973 62.3422 45.791 53.1987 45.791C44.0553 45.791 36.6431 38.4973 36.6431 29.5C36.6431 20.5027 44.0553 13.209 53.1987 13.209C62.3422 13.209 69.7544 20.5027 69.7544 29.5Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M211.143 2.49308H217.153V17.4508C218.935 15.3734 222.804 14.1269 226.521 14.1269C231.351 14.1269 235.112 15.2229 237.23 17.3897C239.348 19.5565 240.388 22.5512 240.388 26.3317V45.6646H234.379V27.786C234.379 25.2484 233.664 23.3213 232.271 21.9597L232.265 21.9539C230.908 20.5549 229.282 19.5283 226.385 19.5283C223.486 19.5665 217.279 20.3593 217.153 28.5671V45.6646H211.143V2.49308Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M308.961 6.22604H315.028V14.1269H324.415V19.2393H315.028V35.8133C315.028 37.497 315.336 38.626 315.882 39.2772C316.425 39.9245 317.253 40.2715 318.426 40.2715C319.669 40.2715 321.015 39.9072 322.468 39.1597L325 43.4472L324.794 43.5796C322.395 45.1192 319.943 45.8973 317.441 45.8973C314.943 45.8973 312.891 45.1586 311.317 43.6595L311.314 43.6566C309.727 42.1043 308.961 39.7995 308.961 36.8022V19.2393H304.615V14.1269H308.961V6.22604Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M144.148 19.9657V14.0907C140.295 14.0907 135.743 14.27 133.254 17.431V14.27H127.245V45.6646H133.254V29.1383C133.521 26.2645 134.592 23.9998 136.454 22.317C138.314 20.6369 140.76 19.8397 143.826 19.9537L144.148 19.9657Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M91.7505 29.8967C91.7506 16.1665 102.631 14.1269 106.356 14.1269C108.967 14.1269 113.392 14.5424 116.435 17.5V14.27H122.503V42.2119C122.503 45.2062 121.835 47.8412 120.49 50.1062C119.184 52.3703 117.322 54.0984 114.914 55.2878C112.507 56.5153 109.715 57.1239 106.547 57.1239C101.957 57.1239 97.6826 55.6651 93.7317 52.7592L93.5028 52.5908L96.2104 48.0829L96.4878 48.3114C97.9704 49.5326 99.5041 50.4246 101.089 50.9928L101.095 50.995C102.678 51.6005 104.417 51.9053 106.315 51.9053C109.422 51.9053 111.87 51.0322 113.694 49.314C115.515 47.5978 116.435 44.9998 116.435 42.3864L116.143 42.5767C113.538 44.2727 111.4 45.6646 107.011 45.6646C100.148 45.6646 91.7505 43.6269 91.7505 29.8967ZM116.435 30.0712C116.435 23.8942 112.151 19.5283 107.184 19.5283C101.804 19.5283 97.4705 24.5142 97.4705 30.0692C97.4705 36.1623 101.39 40.3029 107.011 40.3029C111.891 40.3029 116.435 37.3945 116.435 30.0712Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M158.272 14.0955C155.66 14.0955 153.384 14.428 151.451 15.101C150.43 15.4428 148.422 16.4255 147.745 16.7615V22.5667L147.902 22.4586C151.07 20.2746 154.158 19.1977 157.171 19.1977C159.677 19.1977 161.521 19.7888 162.757 20.9197L162.764 20.926C164.032 22.0175 164.683 23.5898 164.683 25.6919V26.8345L155.259 26.8345L155.256 26.8345C151.583 26.8737 148.668 27.7174 146.549 29.4027C144.46 31.0565 143.418 33.3215 143.418 36.1623C143.418 37.9982 143.856 39.6633 144.736 41.1496L144.739 41.1549C145.659 42.6405 146.939 43.8029 148.57 44.6415L148.573 44.6429C150.245 45.4823 152.167 45.8973 154.332 45.8973C158.892 45.8973 161.818 44.8734 164.741 42.3804V45.6646H170.694L170.635 25.1093L170.635 25.1066C170.596 21.6652 169.509 18.957 167.345 17.0256C165.184 15.0579 162.145 14.0955 158.272 14.0955ZM149.138 35.9296C149.138 34.428 149.677 33.3741 150.73 32.704C151.855 32.0127 153.601 31.6459 156.012 31.6459H164.683V34.3902C164.346 36.3069 163.336 37.8561 161.63 39.0473C159.953 40.207 157.893 40.7951 155.433 40.7951C153.471 40.7951 151.941 40.3407 150.814 39.4642C149.696 38.5956 149.138 37.4283 149.138 35.9296Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M181.524 17.4508C184.996 14.5424 189.04 14.1236 191.743 14.0955C194.651 14.0653 198.083 14.7667 200.376 16.116C202.668 17.4647 204.447 19.3503 205.709 21.7661C206.972 24.1825 207.599 26.948 207.599 30.0546C207.599 33.1225 206.972 35.868 205.71 38.2834L205.434 38.1401L205.709 38.2848L205.71 38.2834C204.485 40.6621 202.725 42.5284 200.434 43.8768L200.433 43.8776C198.178 45.1881 196.238 45.8391 192.686 45.8391C189.548 45.8391 185.409 45.2889 181.524 42.3804V57.3382H175.514V14.27H181.524V17.4508ZM186.355 20.6668C187.887 19.7665 189.609 19.3141 191.527 19.3141C193.447 19.3141 195.148 19.7668 196.641 20.6657C198.136 21.5661 199.314 22.8226 200.177 24.4428C201.04 26.0613 201.473 27.8715 201.473 29.8801C201.473 31.9285 201.039 33.7579 200.177 35.3755L200.175 35.3805C199.351 36.9961 198.175 38.2507 196.644 39.1508L196.641 39.1526C195.148 40.0515 193.447 40.5042 191.527 40.5042C189.609 40.5042 187.887 40.0518 186.355 39.1515C184.859 38.2504 183.681 37.0125 182.819 35.432C181.958 33.8156 181.524 31.9676 181.524 29.8801C181.524 27.8715 181.957 26.0613 182.82 24.4428C183.683 22.8232 184.861 21.567 186.355 20.6668Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M259.169 14.0955C256.146 14.0955 253.446 14.7855 251.076 16.1729C248.708 17.5199 246.853 19.4032 245.512 21.8174L245.512 21.8189C244.208 24.1977 243.561 26.9265 243.561 29.9964C243.561 33.0664 244.208 35.8137 245.511 38.2302L245.512 38.2336C246.853 40.6484 248.709 42.532 251.077 43.8791L251.083 43.882C253.49 45.1893 256.227 45.8391 259.285 45.8391C261.909 45.8391 264.307 45.3868 266.474 44.4771C268.395 43.6707 270.071 42.5671 271.499 41.1661L268.846 36.8769L268.623 37.109C267.494 38.2796 266.158 39.1865 264.613 39.8299L264.61 39.831C263.106 40.4726 261.468 40.7951 259.69 40.7951C257.014 40.7951 254.771 40.0026 252.94 38.4277C251.229 36.9242 250.141 34.9222 249.685 32.4021H273.82L273.848 32.1215C273.888 31.7177 273.908 31.1233 273.908 30.3454C273.908 25.2944 272.679 21.3151 270.181 18.449C267.673 15.5321 263.983 14.0955 259.169 14.0955ZM249.617 27.5907C250 25.0658 251.017 23.063 252.655 21.5605C254.407 19.9893 256.591 19.1977 259.227 19.1977C261.944 19.1977 264.102 19.9912 265.734 21.5546L265.737 21.5572C267.3 23.0199 268.194 25.0207 268.398 27.5907H249.617Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M273.971 14.27H280.983L288.411 25.3124L295.952 14.27H302.667L292.377 29.5872L303.428 45.6646H296.356L288.402 33.8027L280.052 45.6646H273.21L284.438 29.5873L273.971 14.27Z"
                  fill={isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff"}
                  animate={{ fill: isScrolled || isMobileMenuOpen ? "#1D1D1D" : "#ffffff" }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-white/90 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <motion.a
                href="https://accounts.graphext.com/users/sign_in"
                className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
                style={{
                  border: `1px solid ${
                    isScrolled ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.4)"
                  }`,
                  background: isScrolled ? "transparent" : "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(4px)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative">LOG IN</span>
              </motion.a>
              <motion.a
                href="https://accounts.graphext.com/users/sign_up"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2 text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
                  boxShadow:
                    "0 4px 12px rgba(37, 99, 235, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                  border: "1px solid rgba(37, 99, 235, 0.5)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow:
                    "0 8px 20px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, transparent 100%)",
                  }}
                />
                <span className="relative">SIGN UP</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`inline-flex items-center justify-center rounded-full p-2.5 transition-colors md:hidden ${
                isMobileMenuOpen
                  ? "bg-gray-100 text-gray-900"
                  : isScrolled
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <motion.div
              className="relative flex h-full flex-col pt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between border-b border-gray-100 py-5 text-lg font-semibold text-gray-900 transition-colors hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      {item.name}
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </nav>

              {/* Bottom Auth Buttons */}
              <motion.div
                className="border-t border-gray-100 bg-white px-6 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <a
                    href="https://accounts.graphext.com/users/sign_in"
                    className="flex flex-1 items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 transition-all hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    LOG IN
                  </a>
                  <a
                    href="https://accounts.graphext.com/users/sign_up"
                    className="relative flex flex-1 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white"
                    style={{
                      background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
                      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.35)",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                      }}
                    />
                    <span className="relative">SIGN UP</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
