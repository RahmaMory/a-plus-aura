export type MediaVideo = {
  id: string;
  title: string;
  driveId: string;
  poster: string;
};

export type MediaCategory = {
  id: string;
  title: string;
  type: "Industry" | "Format";
  videos: MediaVideo[];
  folderUrl?: string;
  fallbackImage?: string;
};

type VideoItem = {
  driveId: string;
  poster: string;
  title?: string;
};

const makeVideos = (
  categoryId: string,
  items: VideoItem[],
): MediaVideo[] =>
  items.map((item, index) => ({
    id: `${categoryId}-${index + 1}`,
    title:
      item.title ||
      `Project ${String(index + 1).padStart(2, "0")}`,
    driveId: item.driveId,
    poster: item.poster,
  }));

export const getDrivePreviewUrl = (driveId: string) =>
  `https://drive.google.com/file/d/${driveId}/preview`;

export const getDriveViewUrl = (driveId: string) =>
  `https://drive.google.com/file/d/${driveId}/view`;

export const getDriveThumbnailUrl = (driveId: string) =>
  `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;

export const mediaProductionCategories: MediaCategory[] = [
  {
    id: "engineering-interior",
    title: "Architecture - Decoration",
    type: "Industry",
    videos: makeVideos("engineering-interior", [
      {
        driveId: "1oAiC-0LobVnwqLV8FlWEheercPJs-eTK",
        poster: "/images/media-posters/engineering-interior-01.jpg",
      },
      {
        driveId: "1Yc22huBceadMW9cegnHuET-YkfvMFzfW",
        poster: "/images/media-posters/engineering-interior-02.jpg",
      },
      {
        driveId: "1vSJWlcV7gU82HwQ2Rqr5BroC1rGylwPT",
        poster: "/images/media-posters/engineering-interior-03.jpg",
      }
    ]),
  },

  {
    id: "promo",
    title: "Promo",
    type: "Format",
    videos: makeVideos("promo", [
      {
        driveId: "1E7nZx9mh-i4bKve4J-eJqbZat8mePn3k",
        poster: "/images/media-posters/engineering-interior-04.jpg",
      },
      {
        driveId: "13CS_h2uXEZZ8G3LuF07VjAqKKwu3LduU",
        poster: "/images/media-posters/promo-01.jpg",
      }
    ]),
  },


  {
    id: "commercial-promo",
    title: "Commercial Promo",
    type: "Format",
    videos: makeVideos("commercial-promo", [
      {
        driveId: "1nuHrI5DtsqUiN85vgOponex-IQHURSka",
        poster: "/images/media-posters/promo-02.jpg",
      },
      {
        driveId: "1YqromUBs98t_spfhX1IeyX6S1ne6uJ3o",
        poster: "/images/media-posters/promo-03.jpg",
      },
      {
        driveId: "1uaZQGKy385zF6V66zEzcrkUR9sS0dPGM",
        poster: "/images/media-posters/promo-04.jpg",
      },
      {
        driveId: "1TcBTqle5cPYn51syeucHcK8zYe8-MVC1",
        poster: "/images/media-posters/commercial-promo-01.jpg",
      }
    ]),
  },



  {
    id: "sales-reels",
    title: "Sales Reels",
    type: "Format",
    videos: makeVideos("sales-reels", [
      {
        driveId: "1kaymVQ0WFYAgE7PTgPgCBoj8VsFhvks3",
        poster: "/images/media-posters/commercial-promo-02.jpg",
      },
      {
        driveId: "1NC6VrmhSh7cjOyFybffkReuooc9t_cra",
        poster: "/images/media-posters/commercial-promo-03.jpg",
      },
    ]),
  },


  {
    id: "interior",
    title: "Interior",
    type: "Industry",
    videos: makeVideos("interior", [
      {
        driveId: "1g_KektIZGPUHEppM7dQr9Nx7_SpTT85n",
        poster: "/images/media-posters/sales-reels-01.jpg",
      },
      {
        driveId: "1dcFkrKmuj8SXBLAXrFMmfEIUvVup-53q",
        poster: "/images/media-posters/sales-reels-02.jpg",
      },
    ]),
  },

  {
    id: "education",
    title: "Education",
    type: "Industry",
    videos: makeVideos("education", [
      {
        driveId: "1A_uUt6HjFznc1zKV7l4OIZVcb8_V3B8c",
        poster: "/images/media-posters/motion-edits-01.jpg",
      },
      {
        driveId: "1kdoOJHHzggj_SZ1Xpr0JotSvzEkrqiej",
        poster: "/images/media-posters/motion-edits-02.jpg",
      },
      {
        driveId: "1ujoW9jwk-1yWFiCB7kv5Tc-_-DC0jQ-R",
        poster: "/images/media-posters/motion-edits-03.jpg",
      },
      {
        driveId: "1MOn0iP64kCJLnO_MGiwDft2rWbXXkS-_",
        poster: "/images/media-posters/motion-edits-04.jpg",
      },
    ]),
  },


  // {
  //   id: "real-estate",
  //   title: "Real Estate",
  //   type: "Industry",
  //   videos: makeVideos("real-estate", [
  //     {
  //       driveId: "190IY1qBTzrpsImPyiv1buRWXF2gY7cHY",
  //       poster: "/images/media-posters/real-estate-01.jpg",
  //     },
  //     {
  //       driveId: "1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG",
  //       poster: "/images/media-posters/real-estate-02.jpg",
  //     },
  //   ]),
  // },

  {
    id: "motion-edits",
    title: "Motion Edits",
    type: "Format",
    videos: makeVideos("motion-edits", [
      {
        driveId: "14Fx8iIXgijQ332wm21fI2Om3scm5qARc",
        poster: "/images/media-posters/interior-01.jpg",
      },
      {
        driveId: "1pP2oeNgfamIfWVNo9qIDuHvFfmWhLY0d",
        poster: "/images/media-posters/education-01.jpg",
      },
      {
        driveId: "1-E04nFkZHSZa-vmg7nQRdX0lT1U9LayV",
        poster: "/images/media-posters/education-02.jpg",
      },
      {
        driveId: "15I9boFn43GimvIBgY1nNXNGOVVaBFsao",
        poster: "/images/media-posters/education-03.jpg",
      },
      {
        driveId: "1ASQcbN2aEGW7Jz_i6LVuhZ6p1R70V9Xg",
        poster: "/images/media-posters/education-04.jpg",
      },
      {
        driveId: "1YMIoySRDHBrt6SHyHdwJAmqVuti9Us97",
        poster: "/images/media-posters/education-05.jpg",
      },
      {
        driveId: "1wcA6OiBeXWjeLX9gkirLaAbBQlPp4yUS",
        poster: "/images/media-posters/interior-02.jpg",
      },
      {
        driveId: "190IY1qBTzrpsImPyiv1buRWXF2gY7cHY",
        poster: "/images/media-posters/real-estate-01.jpg",
      },
      {
        driveId: "1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG",
        poster: "/images/media-posters/real-estate-02.jpg",
      },
    ]),
  },

  {
    id: "commercial-ads",
    title: "Commercial Ads",
    type: "Format",
    videos: makeVideos("commercial-ads", [
      {
        driveId: "1-34PVqLrulZUUz6FCTrBIC3uEtHyAELX",
        poster: "/images/media-posters/commercial-ads-new-01.jpg",
      },
      {
        driveId: "1Uh-WOAfbPtifVAFn3TME9NbpW6hQKqIG",
        poster: "/images/media-posters/commercial-ads-new-02.jpg",
      },
    ]),
  },


  {
    id: "real-estate-commercial",
    title: "Big Commercial Promos — Real Estate",
    type: "Industry",
    videos: makeVideos("real-estate-commercial", [
      {
        driveId: "1o-VkG-FGQY0DDC_4XUUL95ddyVOwX_PE",
        poster: "/images/media-posters/commercial-ads-01.jpg",
      },
      {
        driveId: "1UiejyPcY5NFJwdbFJYhBIv4R8J6Yj2RT",
        poster: "/images/media-posters/commercial-ads-02.jpg",
      },
      {
        driveId: "1V6sgmWXmcsP4K41oXAf8qaSIE6WUZQ9B",
        poster: "/images/media-posters/real-estate-commercial-01.jpg",
      },
      {
        driveId: "1Fgqolwwsg3CnUfHZq0B8yFb1sc8Nuc7X",
        poster: "/images/media-posters/real-estate-commercial-02.jpg",
      },
    ]),
  },
];
