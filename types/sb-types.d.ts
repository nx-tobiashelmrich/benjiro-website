import {StoryblokStory} from 'storyblok-generate-ts'

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (FeatureStoryblok | GridStoryblok | PageStoryblok | TeaserStoryblok)[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (GridStoryblok | TeaserStoryblok | FeatureStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
