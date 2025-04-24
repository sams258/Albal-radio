// src/components/Layout.tsx
import { motion } from "framer-motion";
import Navbar from "./Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        key={
          typeof window !== "undefined" ? window.location.pathname : "static"
        }
      >
        {children}
      </motion.main>
    </>
  );
}
