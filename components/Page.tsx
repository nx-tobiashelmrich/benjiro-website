import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {PageStoryblok} from "@/types/sb-types";

const Page = ({ blok }: PageStoryblok) => (
    <main {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok: { _uid: any; }) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
);

export default Page;