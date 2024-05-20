"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

export default function AboutUs() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-[-50px]"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-[#FCE9E6] transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">About Us</h1>
            <p className="text-xl text-gray-600">
              Roopass, developed by Unizon, aims to provide users with the best{' '}
              <span className="text-[#FF5C00] font-bold">web3 payment experience</span>.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-sm mb-24 mx-auto grid gap-3 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
