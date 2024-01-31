import {getStoryblokApi, ISbStoriesParams } from "@storyblok/react";
import {PageStoryblok} from "@/types/sb-types";
import {StoryblokStory} from "@storyblok/react/rsc";

interface HomeProps {
    blok: PageStoryblok;
    preview?: boolean
}

const Home = async () => {
    const {story}: PageStoryblok = await fetchData();
    console.log('check data: ', story)
    const bridgeOptions = {}
    return (
        <StoryblokStory story={story} key={story.uuid} bridgeOptions={bridgeOptions}/>
    );
};

export default Home;

export async function fetchData() {
    let sbParams: ISbStoriesParams = {version: "draft"};

    const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/home`, sbParams, { cache: "no-store" });



  return data;
}
