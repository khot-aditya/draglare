
import { errorBoundaryConfig } from '../../../../utils/components/ErrorBoundary'
import { withErrorBoundary } from 'react-error-boundary'
import { useComponentToImageController } from './controller'
import { cn } from '../../../../styles/utility';
import { FC, PropsWithChildren, useRef } from 'react';
import { toJpeg } from 'html-to-image';


export const ComponentToImage: FC<PropsWithChildren> = withErrorBoundary(({ children }) => {

  const controller = useComponentToImageController();
  console.log(controller)

  const componentRef = useRef<HTMLDivElement>(null);

  const captureComponent = async () => {

    if (componentRef.current === null) {
      return
    }

    toJpeg(componentRef.current, {
      cacheBust: true,
      quality: 1,
      pixelRatio: 4
    })
      .then((dataUrl) => {
        // const link = document.createElement('a')
        // link.download = 'my-image-name.png'
        // link.href = dataUrl
        // open(link, "_blank")

        const img = new Image();
        img.src = dataUrl;
        img.width = componentRef.current.offsetWidth;
        img.height = componentRef.current.offsetHeight
        document.body.appendChild(img);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <>
      <div>
        <button onClick={captureComponent}>Capture as PNG</button>
      </div>
      <div ref={componentRef} className={cn('w-[600px] h-[600px] border bg-white')}>
        {children}
      </div>
    </>
  )
}, errorBoundaryConfig)
