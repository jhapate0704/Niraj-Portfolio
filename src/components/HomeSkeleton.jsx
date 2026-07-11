import React from 'react';

const HomeSkeleton = () => {
  return (
    <div className="bg-theme-4 min-h-screen text-theme-5 overflow-x-hidden">
      {/* Navbar Skeleton */}
      <nav className="fixed w-full z-50 py-4 px-6 md:px-12 bg-theme-1/80 backdrop-blur-md border-b border-theme-3/20 flex justify-between items-center">
        <div className="w-32 h-8 bg-theme-3/40 rounded-md animate-pulse"></div>
        <div className="hidden md:flex space-x-6">
          <div className="w-16 h-4 bg-theme-3/40 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-theme-3/40 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-theme-3/40 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-theme-3/40 rounded-md animate-pulse"></div>
        </div>
        <div className="w-10 h-10 bg-theme-3/40 rounded-full md:hidden animate-pulse"></div>
      </nav>

      <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-24">
        {/* Hero Skeleton */}
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
          <div className="flex-1 space-y-6 w-full">
            <div className="w-32 h-6 bg-theme-3/40 rounded-full animate-pulse"></div>
            <div className="w-3/4 h-16 md:h-24 bg-theme-3/40 rounded-lg animate-pulse"></div>
            <div className="w-full h-20 bg-theme-3/40 rounded-lg animate-pulse"></div>
            <div className="flex gap-4 pt-4">
              <div className="w-32 h-12 bg-theme-3/40 rounded-full animate-pulse"></div>
              <div className="w-32 h-12 bg-theme-3/40 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-theme-3/40 animate-pulse"></div>
          </div>
        </section>

        {/* Section Skeleton (About/Projects) */}
        <section className="space-y-12 w-full">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-10 bg-theme-3/40 rounded-lg animate-pulse"></div>
            <div className="w-24 h-2 bg-theme-3/40 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-theme-3/40 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </section>

        {/* Section Skeleton (Skills) */}
        <section className="space-y-12 w-full pb-24">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-10 bg-theme-3/40 rounded-lg animate-pulse"></div>
            <div className="w-24 h-2 bg-theme-3/40 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 bg-theme-3/40 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeSkeleton;
