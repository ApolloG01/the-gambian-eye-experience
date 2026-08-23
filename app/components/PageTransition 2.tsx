"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

type TransitionChldT = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: TransitionChldT) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wrapperRef.current, {
        opacity: 0.7,
        duration: 0.7,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return <div ref={wrapperRef}>{children}</div>;
}
