const Loading = () => (
  <>
    <section className="flex h-[100vh] items-center justify-center bg-white dark:bg-gray-dark">
      <div className="relative">
        {/* Security shield animation */}
        <div className="relative flex items-center justify-center">
          <svg 
            className="h-16 w-16 animate-pulse text-primary" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10V11C14.8 12.4 13.4 14 12 14C10.6 14 9.2 12.4 9.2 11V10C9.2 8.6 10.6 7 12 7M12 15.2C14.8 15.2 17.2 16.6 17.2 18V19H6.8V18C6.8 16.6 9.2 15.2 12 15.2Z" />
          </svg>
          
          {/* Rotating security ring */}
          <div className="absolute inset-0 animate-spin">
            <svg 
              className="h-20 w-20 text-primary opacity-30" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2C12 2 12 12 12 22M2 12C2 12 12 12 22 12" />
            </svg>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Securing your digital assets...
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Loading;
