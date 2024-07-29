import React, { FC, ReactNode } from 'react';
import { namuFont } from '@/app/fonts';

interface CustomTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    isNotTransparent?: boolean;
}

const CustomTitle: FC<CustomTitleProps> = ({
    children,
    isNotTransparent,
    className,
    ...other
}) => {
    return (
        <h2
            style={namuFont.style}
            {...other}
            className={`text-2xl text-custom bg-gradient-to-text bg-clip-text ${isNotTransparent ? '' : 'text-transparent'} ${namuFont.className} ${className}`}>
            {children}
        </h2>
    );
};

export default CustomTitle;
