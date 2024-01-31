"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";

const components = {
    grid: Grid,
    teaser: Teaser,
    page: Page,
};

storyblokInit({
    accessToken: "your_preview_token",
    use: [apiPlugin],
    components
});

export default function StoryblokProvider({ children }) {
    return children;
}