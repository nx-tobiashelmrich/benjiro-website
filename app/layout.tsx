import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryBlockProvider";


storyblokInit({
    accessToken: "CdvK8jUPy8HIuNAgQ8PLvgtt",
    use: [apiPlugin]
});

export default function RootLayout({ children }) {
    return (
        <StoryblokProvider>
            <html lang="en">
            <body>{children}</body>
            </html>
        </StoryblokProvider>
    )
}