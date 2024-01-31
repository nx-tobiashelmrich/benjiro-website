import {GridStoryblok} from "@/types/sb-types";
// @ts-ignore
import {StoryblokComponent, storyblokEditable} from "@storyblok/react/rsc";
import React from "react";

const Grid = (story: GridStoryblok) => (
    <main {...storyblokEditable(story)}>
        <StoryblokComponent blok={story} key={story._uid}/>
    </main>
)

export default Grid;