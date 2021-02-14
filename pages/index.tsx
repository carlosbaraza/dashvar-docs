import Head from "next/head";
import React from "react";
import HeroPost from "../components/blog/hero-post";
import Intro from "../components/blog/intro";
import MoreStories from "../components/blog/more-stories";
import { Example } from "../components/landing/Example";
import { Header } from "../components/landing/Header";
import { Layout } from "../components/landing/Layout";
import { WhySection } from "../components/landing/WhySection";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Dashvar | CSS Variables Library</title>
      </Head>

      <Layout>
        <Header />

        <Example />

        <WhySection />

        <div>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
