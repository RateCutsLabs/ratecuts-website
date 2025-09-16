'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page (coming soon) after a brief moment
    const timer = setTimeout(() => {
      router.push('/');
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen lightning-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white orbitron mb-4">
          <span className="gradient-text animate-neon-flicker">$RATECUTS</span>
        </h1>
        <p className="text-xl text-cyan-400 animate-pulse">
          Redirecting to Coming Soon...
        </p>
      </div>
    </div>
  );
}