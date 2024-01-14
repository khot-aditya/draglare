import React, { ReactNode, useRef } from 'react';
// import html2canvas from 'html2canvas';
import { toPng, toJpeg } from 'html-to-image';

interface Props {
    children: ReactNode;
}

const ComponentToPNG: React.FC<Props> = ({ children }) => {
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
                // link.click()

                const img = new Image();
                img.src = dataUrl;
                img.width = componentRef.current.offsetWidth;
                img.height = componentRef.current.offsetHeight
                document.body.appendChild(img);
            })
            .catch((err) => {
                console.log(err)
            })
        // toPng(componentRef.current, { cacheBust: true, })
        //     .then((dataUrl) => {
        //         // const link = document.createElement('a')
        //         // link.download = 'my-image-name.png'
        //         // link.href = dataUrl
        //         // link.click()

        //         const img = new Image();
        //         img.src = dataUrl;
        //         img.width = componentRef.current.offsetWidth;
        //         img.height = componentRef.current.offsetHeight
        //         document.body.appendChild(img);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    };

    return (
        <div>
            <button onClick={captureComponent}>Capture as PNG</button>
            <div ref={componentRef} style={{
                background: 'white'
            }}>{children}</div>
        </div>
    );
};

export default ComponentToPNG;
