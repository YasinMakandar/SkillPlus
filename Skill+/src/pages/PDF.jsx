import React, { useState, useEffect, useRef } from 'react';
import { Root, Viewport, Pages, Page, CanvasLayer, CurrentPage, ZoomOut, CurrentZoom, ZoomIn, Outline, OutlineChildItems, OutlineItem, Thumbnail, Thumbnails, TextLayer, AnnotationLayer } from "@fileforge/pdfreader";
import { Menu, Minus, Plus, Maximize, Minimize } from "lucide-react";  // Import fullscreen icons
import { useParams } from 'react-router-dom';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function PDF(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showOutline, setShowOutline] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);  // Fullscreen state
  const { pdf } = useParams();

  const rootRef = useRef(null);  // Ref for the Root component

  const getPDFUrl = (path) => {
    // If it's an absolute URL, return it as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    // If it's a relative path, prepend '/static/'
    return `/static/${path}`;
  };

  const pdfUrl = getPDFUrl(decodeURIComponent(pdf));

  useEffect(() => {
    console.log("PDF URL:", pdfUrl);

    // Disable right-click context menu
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [pdfUrl]);

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    const element = rootRef.current;  // Get the Root component

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4  sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-2">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Module</h1>
              </div>
              <div></div>
            </div>

            <Root
              ref={rootRef}  // Attach the ref to the Root component
              fileURL={pdfUrl}
              className="bg-gradient-to-br bg-[#F3F4F6] rounded-lg dark:bg-[#111827] border overflow-hidden relative h-[727px] flex flex-col justify-stretch shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
              loader={
                <div className="p-4 flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              }
            >
              <div className="bg-gradient-to-r from-[#8470ff] to-[#9769ff] p-2 flex items-center max-sm:flex max-sm:flex-col justify-center text-sm text-white gap-2 shadow-md">
                {/* <button
                  onClick={() => setShowOutline((showOutline) => !showOutline)}
                  className="px-3 py-1 hover:bg-white hover:text-blue-600 rounded-full transition-colors duration-200 ease-in-out flex items-center gap-2"
                >
                  <Menu size={16} />
                  {showOutline ? "Hide" : "Show"} Contents
                </button> */}

                {/* <span className="flex-grow" /> */}



                <span className="flex-grow" />

                <div className="flex items-center gap-2">
                  <span>Page</span>
                  <CurrentPage className="bg-white text-blue-600 rounded-full px-3 py-1 border text-center min-w-[3rem]" />
                </div>
                <div className="flex items-center gap-2">
                  <span>Zoom</span>
                  <ZoomOut className="p-1 hover:bg-white hover:text-blue-600 rounded-full transition-colors duration-200 ease-in-out">
                    <Minus size={16} />
                  </ZoomOut>
                  <CurrentZoom className="bg-white text-blue-600 rounded-full px-3 py-1 border text-center w-16" />
                  <ZoomIn  className="p-1 hover:bg-white hover:text-blue-600 rounded-full transition-colors duration-200 ease-in-out">
                    <Plus size={16} />
                  </ZoomIn>

                  {/* Fullscreen toggle button */}
                  <button
                    onClick={toggleFullscreen}
                    className="px-3 py-1 hover:bg-white hover:text-blue-600 rounded-full transition-colors duration-200 ease-in-out flex items-center gap-2"
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                    {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  </button>
                </div>

              </div>
              <div
                className={`basis-0 grow min-h-0 relative grid transition-all duration-300 ease-in-out ${showOutline ? "grid-cols-[24rem,1fr]" : "grid-cols-[0,1fr]"
                  }`}
              >
                {/* <div className="overflow-y-auto no-scrollbar w-72 bg-white"> */}
                  <div className="w-72 overflow-x-auto">
                    {/* <Outline className="border-r overflow-auto p-3">
                      <OutlineItem className="text-sm [&>a]:py-2 [&>a]:px-3 [&>a]:block [&>a:hover]:bg-[#8d99f9] [&>a:hover]:text-white rounded-md transition-colors duration-200 ease-in-out">
                        <OutlineChildItems className="pl-4" />
                      </OutlineItem>
                    </Outline> */}    
                    {/* <Thumbnails className="flex flex-col gap-4 items-center py-4">
                      <Thumbnail className="transition-all w-48 hover:shadow-lg hover:outline hover:outline-gray-300" />
                    </Thumbnails> */}
                  </div>
                </div>
                <Viewport className=" py-4 h-full dark:bg-[#111827] bg-gray-100">
                  <Pages >
                    <Page className="my-4  shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
                      <CanvasLayer />
                      {/* <TextLayer /> */}
            {/* <AnnotationLayer /> */}
                    </Page>
                  </Pages>
                </Viewport>
              {/* </div> */}
            </Root>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PDF;
