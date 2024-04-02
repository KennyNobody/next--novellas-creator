import 'app/globals.scss';
import { ReactNode } from 'react';

interface BodyDecoratorProps {
    children: ReactNode;
}

export const StyleDecorator = (props: BodyDecoratorProps) => {
    const {
        children,
    } = props;

    return (
        <div className="body">
            { children }
        </div>
    );
};
