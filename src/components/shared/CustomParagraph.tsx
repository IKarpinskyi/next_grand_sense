import React, { FC, ReactNode } from 'react';

interface CustomParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}

const CustomParagraph: FC<CustomParagraphProps> = ({
    children,
    className,
    ...other
}) => {
    return (
        <p
            {...other}
            className={`md:text-lg lg-text-xl xl-text-2xl opacity-80 font-medium ${className}`}>
            {children}
        </p>
    );
};

export default CustomParagraph;
