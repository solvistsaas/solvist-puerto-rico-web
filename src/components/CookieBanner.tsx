"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type CookieConsent = {
  analytics: boolean;
  timestamp: number;
};

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consent: CookieConsent = {
      analytics: true,
      timestamp: Date.now(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
    initializeAnalytics();
  };

  const handleReject = () => {
    const consent: CookieConsent = {
      analytics: false,
      timestamp: Date.now(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setShowBanner(false);
  };

  const initializeAnalytics = () => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        (window.dataLayer as any[]).push(arguments);
      }
      gtag("js", new Date());
      gtag("config", process.env.NEXT_PUBLIC_GA_ID);
      (window as any).gtag = gtag;
    }
  };

  if (!mounted || !showBanner) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setShowDetails(true)} />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          {!showDetails ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Gestión de cookies
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Utilizamos cookies analíticas para entender cómo usas nuestro sitio y mejorar tu experiencia.{" "}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-[#EB8C3D] hover:text-[#d47a2f] font-medium underline"
                  >
                    Más información
                  </button>
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-[#050505] bg-[#EB8C3D] hover:bg-[#d47a2f] rounded-lg transition-colors"
                >
                  Aceptar
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Gestión del consentimiento
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                    Cookies técnicas
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Necesarias para el funcionamiento del sitio. No pueden ser desactivadas.
                  </p>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      disabled
                      className="mt-1 w-4 h-4 rounded border-slate-300 opacity-50"
                    />
                    <span className="flex-1">
                      <span className="font-medium text-slate-900 dark:text-white block">
                        Cookies de análisis
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        Nos ayudan a entender cómo usas nuestro sitio para mejorar tu experiencia.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Para más información, consulta nuestra{" "}
                    <Link
                      href="/cookies"
                      className="text-[#EB8C3D] hover:text-[#d47a2f] font-medium underline"
                    >
                      política de cookies
                    </Link>
                    .
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleReject}
                      className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      Rechazar
                    </button>
                    <button
                      onClick={handleAccept}
                      className="flex-1 px-4 py-2 text-sm font-medium text-[#050505] bg-[#EB8C3D] hover:bg-[#d47a2f] rounded-lg transition-colors"
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
