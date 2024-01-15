import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { ReactNode } from "react";

export default function EditorLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
