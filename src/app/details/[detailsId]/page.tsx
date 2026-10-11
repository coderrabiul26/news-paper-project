import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type NewsBodyItem = {
  type: "image" | "text" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  altText?: string;
  caption?: string;
};

type NewsDetails = {
  title: string;
  imageUrl?: string;
  firstPublished: string;
  description?: {
    blocks?: {
      text?: string;
    }[];
  };
  body?: NewsBodyItem[];
  tags?: string[];
};

type DetailsPageProps = {
  params: Promise<{
    detailsId: string;
  }>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { detailsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${detailsId}`
  );

  if (!res.ok) {
    notFound()
    // return <div>Failed to load news.</div>;
  }

  const data = await res.json();

  console.log("DETAILS API:", data);

  if (!data.data) {
    return <div>News not found.</div>;
  }

  const detailsNews: NewsDetails = data.data;

  const firstBodyImageIndex =
    detailsNews.body?.findIndex(
      (item) => item.type === "image"
    ) ?? -1;

  const publishedTime = new Date(
    detailsNews.firstPublished
  ).toLocaleString("bn-BD", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const bengaliPublishedTime = publishedTime
    .replace("AM", "এএম")
    .replace("PM", "পিএম");

  return (
    <main className="min-h-screen bg-base-100">
      <article className="mx-auto max-w-5xl px-4 py-8 md:px-6 lg:py-12">

        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
          {detailsNews.title}
        </h1>

        {detailsNews.description?.blocks?.[0]?.text && (
          <p className="mt-5 text-lg leading-8 text-base-content/70 md:text-xl">
            {detailsNews.description.blocks[0].text}
          </p>
        )}

        <div className="mt-5 border-b border-base-300 pb-6 text-sm text-base-content/60">
          প্রকাশিত: {bengaliPublishedTime}
        </div>

        {detailsNews.imageUrl && (
          <figure className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src={detailsNews.imageUrl.replaceAll("\\", "")}
              alt={detailsNews.title}
              width={1353}
              height={761}
              priority
              className="h-auto w-full object-cover"
            />
          </figure>
        )}

        <div className="mt-10 space-y-8">
          {detailsNews.body?.map((item, index) => {

            if (item.type === "image" && item.url) {

              // Don't show the first body image again.
              if (index === firstBodyImageIndex) {
                return null;
              }

              return (
                <figure key={index} className="my-10">
                  <Image
                    src={item.url.replaceAll("\\", "")}
                    alt={
                      item.altText ||
                      item.caption ||
                      detailsNews.title
                    }
                    width={item.width || 1024}
                    height={item.height || 576}
                    className="h-auto w-full rounded-xl object-cover"
                  />

                  {item.caption && (
                    <figcaption className="mt-2 text-sm text-base-content/60">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (item.type === "subheading" && item.text) {
              return (
                <h2
                  key={index}
                  className="mt-10 text-2xl font-bold md:text-3xl"
                >
                  {item.text}
                </h2>
              );
            }

            if (item.type === "text" && item.text) {
              return (
                <p
                  key={index}
                  className="text-base leading-8 text-base-content/80 md:text-lg md:leading-9"
                >
                  {item.text}
                </p>
              );
            }

            return null;
          })}
        </div>

        {detailsNews.tags &&
          detailsNews.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 pt-4">
              {detailsNews.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-base-300 bg-gray-100 px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
      </article>
    </main>
  );
};

export default DetailsPage;