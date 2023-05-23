import React, { useEffect, useState } from 'react';
import { Heading } from './Heading';
import { PostLayout } from './PostLayout';
import { RenderCounter } from './RenderCounter';
import { Section } from './Section';

interface PostProps {
    title: string,
    text: string,
}

export const Post = ({title, text} : PostProps) : JSX.Element => {
    return (
        <PostLayout>
            <Section>
                <RenderCounter />
                <Heading>My first post: {title}</Heading>
                <Heading></Heading>
                <p>{text}</p>
            </Section>
        </PostLayout>
    )
}