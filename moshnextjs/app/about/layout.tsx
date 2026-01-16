import React from 'react';
import Navabout from '../component/Navabout';

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <Navabout/>
            <main>{children}</main>
            <h1>hello world</h1>
        </section>
    );
}