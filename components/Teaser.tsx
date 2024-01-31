import {StoryblokComponent, storyblokEditable} from "@storyblok/react";
import React from "react";
import {TeaserStoryblok} from "@/types/sb-types";

const Teaser = (story: TeaserStoryblok) => (
    <main {...storyblokEditable(story)}>
        <StoryblokComponent blok={story} key={story._uid} />
    </main>
);

export default Teaser;