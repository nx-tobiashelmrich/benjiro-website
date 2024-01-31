import {storyblokInit, apiPlugin, ISbStoryData} from "@storyblok/react";
import * as process from "process";
import {ReactNode} from "react";
import {PageStoryblok} from "@/types/sb-types";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import Page from "@/components/Page";

type LayoutProps = {
    children: ReactNode
    story: ISbStoryData<PageStoryblok>
}

const components = {
    page: Page,
    grid: Grid,
    teaser: Teaser
}

/** 2. Initialize it as usual */
storyblokInit({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
    components
});


export default function StoryblokProvider({children}:{children:ReactNode}) {
    return children;
};
