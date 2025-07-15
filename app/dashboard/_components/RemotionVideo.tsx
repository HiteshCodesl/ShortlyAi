import React, { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  Img,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Audio,
  interpolate,
} from 'remotion';

function RemotionVideo({ videoScript, imageList, audioFileUrl, captions, setDurationInFrame }) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const imageUrls = imageList.map((img) => (typeof img === 'string' ? img : img.result));
  const captionsArray = captions;

  const lastCaptionEndTime = captionsArray?.[captionsArray.length - 1]?.end || 0;
  const totalDuration = Math.ceil((lastCaptionEndTime / 1000) * fps);
  const durationPerImage = Math.floor(totalDuration / imageUrls.length);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(loadPromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Some images failed to preload", error);
        setImagesLoaded(true); 
      }
    };

    preloadImages();
  }, [imageUrls]);

  useEffect(() => {
    if (setDurationInFrame) {
      setDurationInFrame(totalDuration);
    }
  }, [totalDuration]);

  const getCurrentCaptions = () => {
    const currentTime = (frame / fps) * 1000;
    const currentCaption = captionsArray.find(
      (word) => currentTime >= word.start && currentTime <= word.end
    );
    return currentCaption ? currentCaption.text : '';
  };

  if (!imagesLoaded) {
    return (
      <AbsoluteFill className="bg-black flex items-center justify-center">
        <p className="text-white text-xl">Just wait a sec...</p>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill className="bg-black">
      {imageUrls.map((item, index) => {
        const startTime = index * durationPerImage;

        const scale = interpolate(
          frame,
          [startTime, startTime + durationPerImage / 2, startTime + durationPerImage],
          [1, 1.1, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <Sequence key={index} from={startTime} durationInFrames={durationPerImage}>
            <Img
              src={item}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: `scale(${scale})`,
              }}
            />
            <AbsoluteFill className="absolute w-full flex justify-center items-center h-[150px] top-50 mb-4">
              <h2 className="text-2xl text-white text-center px-4">{getCurrentCaptions()}</h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}
      <Audio src={audioFileUrl} />
    </AbsoluteFill>
  );
}

export default RemotionVideo;
