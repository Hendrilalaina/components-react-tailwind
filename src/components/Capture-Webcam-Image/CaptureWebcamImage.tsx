import { useRef, useState } from "react";

export const CaptureWebcamImage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  const [isWebcamOnline, setWebcamOnline] = useState<boolean>(false);

  const startWebcam = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((mediaStream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play();
          setWebcamOnline(true);
        }
      })
      .catch((error) => console.error("Error accessing webcam", error));
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const streams = videoRef.current.srcObject as MediaStream;
      streams.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setWebcamOnline(false);
    }
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const downloadLink = downloadLinkRef.current;

    if (!canvas || !video || !downloadLink) return;

    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const image = canvas.toDataURL("image/png");
      downloadLink.href = image;
      downloadLink.download = "capture-image.png";
      downloadLink.click();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        className={`w-[640px] h-[480px] mb-2 ${isWebcamOnline} ? "block" : "hidden"`}
        autoPlay
      ></video>
      <div className="flex justify-center gap-4">
        {isWebcamOnline ? (
          <>
            <button onClick={captureImage}>Capture Image</button>
            <button onClick={stopWebcam}>Stop Webcam</button>
          </>
        ) : (
          <button onClick={startWebcam}>Start Webcam</button>
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
