import { useRef, useState } from "react";

export const CaptureScreen = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  const [isCapturing, setCapturing] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCapture = async () => {
    try {
      const captureScreen = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = captureScreen;
        setCapturing(true);
        setStream(captureScreen);
      }
    } catch (error) {
      console.error("Error accessing webcam", error);
    }
  };

  const stopCapture = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      stream?.getTracks().forEach((track) => track.stop());
      setStream(null);
      videoRef.current.srcObject = null;
      setCapturing(false);
    }
  };

  const captureScreenShot = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const downloadLink = downloadLinkRef.current;

    if (!canvas || !video || !downloadLink) return;

    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL("image/png");
      downloadLink.href = image;
      downloadLink.download = "screenshot.png";
      downloadLink.click();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        className={`w-[640px] h-[480px] mb-2 ${isCapturing} ? "block" : "hidden"`}
        autoPlay
      ></video>
      <div className="flex justify-center gap-4">
        {isCapturing ? (
          <>
            <button onClick={captureScreenShot}>Capture ScreenShot</button>
            <button onClick={stopCapture}>Stop Capture</button>
          </>
        ) : (
          <button onClick={startCapture}>Start Capture</button>
        )}
      </div>
      <canvas
        id="canvas"
        ref={canvasRef}
        width="640"
        height="480"
        className="hidden"
      ></canvas>
      <a id="downloadLink" ref={downloadLinkRef}></a>
    </div>
  );
};
