const Loading = () => (
  <>
    <section id="home" className=" z-10 overflow-hidden pb-16 pt-[20px]">
      <div className="container">
        <div className="flex flex-row items-center justify-between p-4">
          <div className="flex flex-row">
            <div className="mr-4 h-12 w-12 animate-pulse rounded bg-gray-300"></div>
            <div className="hidden flex-row items-center justify-center space-x-2 md:flex">
              <div className="h-8 w-16 animate-pulse rounded bg-gray-300"></div>
              <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
              <div className="h-8 w-24 animate-pulse rounded bg-gray-300"></div>
              <div className="h-8 w-16 animate-pulse rounded bg-gray-300"></div>
              <div className="h-8 w-20 animate-pulse rounded bg-gray-300"></div>
            </div>
          </div>
          <div className="h-8 w-10 animate-pulse rounded bg-gray-300"></div>
        </div>

        {/* Hero Section */}
        <div className="flex h-full flex-col items-center justify-center p-4 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]">
          <div className="mb-4 h-14 w-[26rem] animate-pulse rounded bg-gray-300 text-center"></div>
          <div className="mb-2 h-6 w-[50rem] animate-pulse rounded bg-gray-300"></div>
          <div className="animate-zpulse mb-2 h-6 w-[45rem] rounded bg-gray-300"></div>
          <div className="mb-4 h-6 w-[30rem] animate-pulse rounded bg-gray-300"></div>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-10 w-28 animate-pulse rounded bg-gray-300"></div>
            <div className="h-10 w-28 animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Loading;
