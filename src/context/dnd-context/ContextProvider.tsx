import { FC, createContext, useState } from 'react';

export interface BoxMap {
    [key: string]: { top: number; left: number; title: string }
}
  
type DragAndDropContext = {
    boxes: BoxMap;
    setBoxes: React.Dispatch<React.SetStateAction<BoxMap>>
};

export const DragAndDropContext = createContext<DragAndDropContext>(
    {} as DragAndDropContext
);

interface Props {
    children: React.ReactNode;
}

export const DragAndDropContextProvider: FC<Props> = ({ children }) => {
    const [boxes, setBoxes] = useState<BoxMap>({
        a: { top: 20, left: 80, title: 'Drag me around' },
        b: { top: 180, left: 20, title: 'Drag me too' },
    })

    return (
        <DragAndDropContext.Provider
            value={{
                boxes,
                setBoxes
            }}>
            {children}
        </DragAndDropContext.Provider>
    );
};
