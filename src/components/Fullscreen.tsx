import { useState } from 'react';

const FullScreenButton: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleFullScreen = () => {
    const docElement = document.documentElement as HTMLElement;
    if (!isFullScreen) {
      if (docElement.requestFullscreen) {
        docElement.requestFullscreen();
      } else if (docElement.mozRequestFullScreen) {
        docElement.mozRequestFullScreen();
      } else if (docElement.webkitRequestFullscreen) {
       
 docElement.webkitRequestFullscreen();
      } else if (docElement.msRequestFullscreen) {
        docElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    setIsFullScreen((prevState) => !prevState);
  };

  return (
    <button onClick={handleFullScreen}>
      {isFullScreen ? 'Exit Full Screen' : 'Go Full Screen'}
    </button>
  );
};

export default FullScreenButton;
