const Loading = () => (
  <>
    <section className="flex h-[100vh] items-center justify-center">
      <div
        className="inline-block h-10 w-10 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </section>
  </>
);

export default Loading;
