// export type MediaVideo = {
//   id: string;
//   title: string;
//   driveId: string;
//   poster: string;
// };

// export type MediaCategory = {
//   id: string;
//   title: string;
//   type: "Industry" | "Format";
//   videos: MediaVideo[];
//   folderUrl?: string;
//   fallbackImage?: string;
// };

// type VideoItem = {
//   driveId: string;
//   poster: string;
//   title?: string;
// };

// const makeVideos = (
//   categoryId: string,
//   items: VideoItem[],
// ): MediaVideo[] =>
//   items.map((item, index) => ({
//     id: `${categoryId}-${index + 1}`,
//     title:
//       item.title ||
//       `Project ${String(index + 1).padStart(2, "0")}`,
//     driveId: item.driveId,
//     poster: item.poster,
//   }));

// export const getDrivePreviewUrl = (driveId: string) =>
//   `https://drive.google.com/file/d/${driveId}/preview`;

// export const getDriveViewUrl = (driveId: string) =>
//   `https://drive.google.com/file/d/${driveId}/view`;

// export const getDriveThumbnailUrl = (driveId: string) =>
//   `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;

// export const mediaProductionCategories: MediaCategory[] = [
//   {
//     id: "engineering-interior",
//     title: "Architecture - Decoration",
//     
//     videos: makeVideos("engineering-interior", [
//       {
//         driveId: "1oAiC-0LobVnwqLV8FlWEheercPJs-eTK",
//         poster: "/images/media-posters/engineering-interior-01.jpg",
//       },
//       {
//         driveId: "1Yc22huBceadMW9cegnHuET-YkfvMFzfW",
//         poster: "/images/media-posters/engineering-interior-02.jpg",
//       },
//       {
//         driveId: "1vSJWlcV7gU82HwQ2Rqr5BroC1rGylwPT",
//         poster: "/images/media-posters/engineering-interior-03.jpg",
//       }
//     ]),
//   },

//   {
//     id: "promo",
//     title: "Promo",
//     
//     videos: makeVideos("promo", [
//       {
//         driveId: "1E7nZx9mh-i4bKve4J-eJqbZat8mePn3k",
//         poster: "/images/media-posters/engineering-interior-04.jpg",
//       },
//       {
//         driveId: "13CS_h2uXEZZ8G3LuF07VjAqKKwu3LduU",
//         poster: "/images/media-posters/promo-01.jpg",
//       }
//     ]),
//   },


//   {
//     id: "commercial-promo",
//     title: "Commercial Promo",
//     
//     videos: makeVideos("commercial-promo", [
//       {
//         driveId: "1nuHrI5DtsqUiN85vgOponex-IQHURSka",
//         poster: "/images/media-posters/promo-02.jpg",
//       },
//       {
//         driveId: "1YqromUBs98t_spfhX1IeyX6S1ne6uJ3o",
//         poster: "/images/media-posters/promo-03.jpg",
//       },
//       {
//         driveId: "1uaZQGKy385zF6V66zEzcrkUR9sS0dPGM",
//         poster: "/images/media-posters/promo-04.jpg",
//       },
//       {
//         driveId: "1TcBTqle5cPYn51syeucHcK8zYe8-MVC1",
//         poster: "/images/media-posters/commercial-promo-01.jpg",
//       }
//     ]),
//   },



//   {
//     id: "sales-reels",
//     title: "Sales Reels",
//     
//     videos: makeVideos("sales-reels", [
//       {
//         driveId: "1kaymVQ0WFYAgE7PTgPgCBoj8VsFhvks3",
//         poster: "/images/media-posters/commercial-promo-02.jpg",
//       },
//       {
//         driveId: "1NC6VrmhSh7cjOyFybffkReuooc9t_cra",
//         poster: "/images/media-posters/commercial-promo-03.jpg",
//       },
//     ]),
//   },


//   {
//     id: "interior",
//     title: "Interior",
//     
//     videos: makeVideos("interior", [
//       {
//         driveId: "1g_KektIZGPUHEppM7dQr9Nx7_SpTT85n",
//         poster: "/images/media-posters/sales-reels-01.jpg",
//       },
//       {
//         driveId: "1dcFkrKmuj8SXBLAXrFMmfEIUvVup-53q",
//         poster: "/images/media-posters/sales-reels-02.jpg",
//       },
//     ]),
//   },

//   {
//     id: "education",
//     title: "Education",
//     
//     videos: makeVideos("education", [
//       {
//         driveId: "1A_uUt6HjFznc1zKV7l4OIZVcb8_V3B8c",
//         poster: "/images/media-posters/motion-edits-01.jpg",
//       },
//       {
//         driveId: "1kdoOJHHzggj_SZ1Xpr0JotSvzEkrqiej",
//         poster: "/images/media-posters/motion-edits-02.jpg",
//       },
//       {
//         driveId: "1ujoW9jwk-1yWFiCB7kv5Tc-_-DC0jQ-R",
//         poster: "/images/media-posters/motion-edits-03.jpg",
//       },
//       {
//         driveId: "1MOn0iP64kCJLnO_MGiwDft2rWbXXkS-_",
//         poster: "/images/media-posters/motion-edits-04.jpg",
//       },
//     ]),
//   },


//   // {
//   //   id: "real-estate",
//   //   title: "Real Estate",
//   //   
//   //   videos: makeVideos("real-estate", [
//   //     {
//   //       driveId: "190IY1qBTzrpsImPyiv1buRWXF2gY7cHY",
//   //       poster: "/images/media-posters/real-estate-01.jpg",
//   //     },
//   //     {
//   //       driveId: "1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG",
//   //       poster: "/images/media-posters/real-estate-02.jpg",
//   //     },
//   //   ]),
//   // },

//   {
//     id: "motion-edits",
//     title: "Motion Edits",
//     
//     videos: makeVideos("motion-edits", [
//       {
//         driveId: "14Fx8iIXgijQ332wm21fI2Om3scm5qARc",
//         poster: "/images/media-posters/interior-01.jpg",
//       },
//       {
//         driveId: "1pP2oeNgfamIfWVNo9qIDuHvFfmWhLY0d",
//         poster: "/images/media-posters/education-01.jpg",
//       },
//       {
//         driveId: "1-E04nFkZHSZa-vmg7nQRdX0lT1U9LayV",
//         poster: "/images/media-posters/education-02.jpg",
//       },
//       {
//         driveId: "15I9boFn43GimvIBgY1nNXNGOVVaBFsao",
//         poster: "/images/media-posters/education-03.jpg",
//       },
//       {
//         driveId: "1ASQcbN2aEGW7Jz_i6LVuhZ6p1R70V9Xg",
//         poster: "/images/media-posters/education-04.jpg",
//       },
//       {
//         driveId: "1YMIoySRDHBrt6SHyHdwJAmqVuti9Us97",
//         poster: "/images/media-posters/education-05.jpg",
//       },
//       {
//         driveId: "1wcA6OiBeXWjeLX9gkirLaAbBQlPp4yUS",
//         poster: "/images/media-posters/interior-02.jpg",
//       },
//       {
//         driveId: "190IY1qBTzrpsImPyiv1buRWXF2gY7cHY",
//         poster: "/images/media-posters/real-estate-01.jpg",
//       },
//       {
//         driveId: "1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG",
//         poster: "/images/media-posters/real-estate-02.jpg",
//       },
//     ]),
//   },

//   {
//     id: "commercial-ads",
//     title: "Commercial Ads",
//     
//     videos: makeVideos("commercial-ads", [
//       {
//         driveId: "1-34PVqLrulZUUz6FCTrBIC3uEtHyAELX",
//         poster: "/images/media-posters/commercial-ads-new-01.jpg",
//       },
//       {
//         driveId: "1Uh-WOAfbPtifVAFn3TME9NbpW6hQKqIG",
//         poster: "/images/media-posters/commercial-ads-new-02.jpg",
//       },
//     ]),
//   },


//   {
//     id: "real-estate-commercial",
//     title: "Big Commercial Promos — Real Estate",
//     
//     videos: makeVideos("real-estate-commercial", [
//       {
//         driveId: "1o-VkG-FGQY0DDC_4XUUL95ddyVOwX_PE",
//         poster: "/images/media-posters/commercial-ads-01.jpg",
//       },
//       {
//         driveId: "1UiejyPcY5NFJwdbFJYhBIv4R8J6Yj2RT",
//         poster: "/images/media-posters/commercial-ads-02.jpg",
//       },
//       {
//         driveId: "1V6sgmWXmcsP4K41oXAf8qaSIE6WUZQ9B",
//         poster: "/images/media-posters/real-estate-commercial-01.jpg",
//       },
//       {
//         driveId: "1Fgqolwwsg3CnUfHZq0B8yFb1sc8Nuc7X",
//         poster: "/images/media-posters/real-estate-commercial-02.jpg",
//       },
//     ]),
//   },
// ];

export type MediaVideo = {
  id: string;
  title: string;
  driveId: string;
  poster: string;
  videoUrl?: string;
};

export type MediaCategory = {
  id: string;
  title: string;
  videos: MediaVideo[];
  folderUrl?: string;
  fallbackImage?: string;
};

type VideoItem = {
  driveId: string;
  poster: string;
  videoUrl?: string;
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
    videoUrl: item.videoUrl,
  }));


export const mediaProductionCategories: MediaCategory[] = [
  {
    id: "engineering-interior",
    title: "Architecture - Decoration",
    
    videos: makeVideos("engineering-interior", [
      {
        driveId: "1oAiC-0LobVnwqLV8FlWEheercPJs-eTK",
        poster: "/images/media-posters/engineering-interior-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382007/a-plus-aura-videos/engineering-interior/engineering-interior-01-1oAiC-0LobVnwqLV8FlWEheercPJs-eTK.mp4",
      },
      {
        driveId: "1Yc22huBceadMW9cegnHuET-YkfvMFzfW",
        poster: "/images/media-posters/engineering-interior-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382012/a-plus-aura-videos/engineering-interior/engineering-interior-02-1Yc22huBceadMW9cegnHuET-YkfvMFzfW.mp4",
      },
      {
        driveId: "1vSJWlcV7gU82HwQ2Rqr5BroC1rGylwPT",
        poster: "/images/media-posters/engineering-interior-03.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382017/a-plus-aura-videos/engineering-interior/engineering-interior-03-1vSJWlcV7gU82HwQ2Rqr5BroC1rGylwPT.mp4",
      },
    ]),
  },

  {
    id: "promo",
    title: "Promo",
    
    videos: makeVideos("promo", [
      {
        driveId: "1E7nZx9mh-i4bKve4J-eJqbZat8mePn3k",
        poster: "/images/media-posters/engineering-interior-04.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382061/a-plus-aura-videos/promo/promo-01-1E7nZx9mh-i4bKve4J-eJqbZat8mePn3k.mp4",
      },
      {
        driveId: "13CS_h2uXEZZ8G3LuF07VjAqKKwu3LduU",
        poster: "/images/media-posters/promo-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382066/a-plus-aura-videos/promo/promo-02-13CS_h2uXEZZ8G3LuF07VjAqKKwu3LduU.mp4",
      },
    ]),
  },

  {
    id: "commercial-promo",
    title: "Commercial Promo",
    
    videos: makeVideos("commercial-promo", [
      {
        driveId: "1nuHrI5DtsqUiN85vgOponex-IQHURSka",
        poster: "/images/media-posters/promo-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381942/a-plus-aura-videos/commercial-promo/commercial-promo-01-1nuHrI5DtsqUiN85vgOponex-IQHURSka.mp4",
      },
      {
        driveId: "1YqromUBs98t_spfhX1IeyX6S1ne6uJ3o",
        poster: "/images/media-posters/promo-03.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381949/a-plus-aura-videos/commercial-promo/commercial-promo-02-1YqromUBs98t_spfhX1IeyX6S1ne6uJ3o.mp4",
      },
      {
        driveId: "1uaZQGKy385zF6V66zEzcrkUR9sS0dPGM",
        poster: "/images/media-posters/promo-04.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381960/a-plus-aura-videos/commercial-promo/commercial-promo-03-1uaZQGKy385zF6V66zEzcrkUR9sS0dPGM.mp4",
      },
      {
        driveId: "1TcBTqle5cPYn51syeucHcK8zYe8-MVC1",
        poster: "/images/media-posters/commercial-promo-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381966/a-plus-aura-videos/commercial-promo/commercial-promo-04-1TcBTqle5cPYn51syeucHcK8zYe8-MVC1.mp4",
      },
    ]),
  },

  {
    id: "sales-reels",
    title: "Sales Reels",
    
    videos: makeVideos("sales-reels", [
      {
        driveId: "1kaymVQ0WFYAgE7PTgPgCBoj8VsFhvks3",
        poster: "/images/media-posters/commercial-promo-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382087/a-plus-aura-videos/sales-reels/sales-reels-01-1kaymVQ0WFYAgE7PTgPgCBoj8VsFhvks3.mp4",
      },
      {
        driveId: "1NC6VrmhSh7cjOyFybffkReuooc9t_cra",
        poster: "/images/media-posters/commercial-promo-03.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382090/a-plus-aura-videos/sales-reels/sales-reels-02-1NC6VrmhSh7cjOyFybffkReuooc9t_cra.mp4",
      },
    ]),
  },

  {
    id: "interior",
    title: "Interior",
    
    videos: makeVideos("interior", [
      {
        driveId: "1g_KektIZGPUHEppM7dQr9Nx7_SpTT85n",
        poster: "/images/media-posters/sales-reels-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382022/a-plus-aura-videos/interior/interior-01-1g_KektIZGPUHEppM7dQr9Nx7_SpTT85n.mp4",
      },
      {
        driveId: "1dcFkrKmuj8SXBLAXrFMmfEIUvVup-53q",
        poster: "/images/media-posters/sales-reels-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382025/a-plus-aura-videos/interior/interior-02-1dcFkrKmuj8SXBLAXrFMmfEIUvVup-53q.mp4",
      },
    ]),
  },

  {
    id: "education",
    title: "Education",
    
    videos: makeVideos("education", [
      {
        driveId: "1A_uUt6HjFznc1zKV7l4OIZVcb8_V3B8c",
        poster: "/images/media-posters/motion-edits-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381975/a-plus-aura-videos/education/education-01-1A_uUt6HjFznc1zKV7l4OIZVcb8_V3B8c.mp4",
      },
      {
        driveId: "1kdoOJHHzggj_SZ1Xpr0JotSvzEkrqiej",
        poster: "/images/media-posters/motion-edits-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381989/a-plus-aura-videos/education/education-02-1kdoOJHHzggj_SZ1Xpr0JotSvzEkrqiej.mp4",
      },
      {
        driveId: "1ujoW9jwk-1yWFiCB7kv5Tc-_-DC0jQ-R",
        poster: "/images/media-posters/motion-edits-03.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381997/a-plus-aura-videos/education/education-03-1ujoW9jwk-1yWFiCB7kv5Tc-_-DC0jQ-R.mp4",
      },
      {
        driveId: "1MOn0iP64kCJLnO_MGiwDft2rWbXXkS-_",
        poster: "/images/media-posters/motion-edits-04.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382002/a-plus-aura-videos/education/education-04-1MOn0iP64kCJLnO_MGiwDft2rWbXXkS-_.mp4",
      },
    ]),
  },

  {
    id: "motion-edits",
    title: "Motion Edits",
    
    videos: makeVideos("motion-edits", [
      {
        driveId: "14Fx8iIXgijQ332wm21fI2Om3scm5qARc",
        poster: "/images/media-posters/interior-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382027/a-plus-aura-videos/motion-edits/motion-edits-01-14Fx8iIXgijQ332wm21fI2Om3scm5qARc.mp4",
      },
      {
        driveId: "1pP2oeNgfamIfWVNo9qIDuHvFfmWhLY0d",
        poster: "/images/media-posters/education-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382029/a-plus-aura-videos/motion-edits/motion-edits-02-1pP2oeNgfamIfWVNo9qIDuHvFfmWhLY0d.mp4",
      },
      {
        driveId: "1-E04nFkZHSZa-vmg7nQRdX0lT1U9LayV",
        poster: "/images/media-posters/education-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382031/a-plus-aura-videos/motion-edits/motion-edits-03-1-E04nFkZHSZa-vmg7nQRdX0lT1U9LayV.mp4",
      },
      {
        driveId: "15I9boFn43GimvIBgY1nNXNGOVVaBFsao",
        poster: "/images/media-posters/education-03.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382034/a-plus-aura-videos/motion-edits/motion-edits-04-15I9boFn43GimvIBgY1nNXNGOVVaBFsao.mp4",
      },
      {
        driveId: "1ASQcbN2aEGW7Jz_i6LVuhZ6p1R70V9Xg",
        poster: "/images/media-posters/education-04.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382038/a-plus-aura-videos/motion-edits/motion-edits-05-1ASQcbN2aEGW7Jz_i6LVuhZ6p1R70V9Xg.mp4",
      },
      {
        driveId: "1YMIoySRDHBrt6SHyHdwJAmqVuti9Us97",
        poster: "/images/media-posters/education-05.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382047/a-plus-aura-videos/motion-edits/motion-edits-06-1YMIoySRDHBrt6SHyHdwJAmqVuti9Us97.mp4",
      },
      {
        driveId: "1wcA6OiBeXWjeLX9gkirLaAbBQlPp4yUS",
        poster: "/images/media-posters/interior-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382053/a-plus-aura-videos/motion-edits/motion-edits-07-1wcA6OiBeXWjeLX9gkirLaAbBQlPp4yUS.mp4",
      },
      {
        driveId: "190IY1qBTzrpsImPyiv1buRWXF2gY7cHY",
        poster: "/images/media-posters/real-estate-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382055/a-plus-aura-videos/motion-edits/motion-edits-08-190IY1qBTzrpsImPyiv1buRWXF2gY7cHY.mp4",
      },
      {
        driveId: "1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG",
        poster: "/images/media-posters/real-estate-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382058/a-plus-aura-videos/motion-edits/motion-edits-09-1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG.mp4",
      },
    ]),
  },

  {
    id: "commercial-ads",
    title: "Commercial Ads",
    
    videos: makeVideos("commercial-ads", [
      {
        driveId: "1-34PVqLrulZUUz6FCTrBIC3uEtHyAELX",
        poster: "/images/media-posters/commercial-ads-new-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381935/a-plus-aura-videos/commercial-ads/WSD_Last.mp4",
      },
      {
        driveId: "1Uh-WOAfbPtifVAFn3TME9NbpW6hQKqIG",
        poster: "/images/media-posters/commercial-ads-new-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783381930/a-plus-aura-videos/commercial-ads/WSD_02_Last.mp4",
      },
    ]),
  },

  {
    id: "real-estate-commercial",
    title: "Big Commercial Promos — Real Estate",
    
    videos: makeVideos("real-estate-commercial", [
      {
        driveId: "1o-VkG-FGQY0DDC_4XUUL95ddyVOwX_PE",
        poster: "/images/media-posters/commercial-ads-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382070/a-plus-aura-videos/real-estate-commercial/real-estate-commercial-01-1o-VkG-FGQY0DDC_4XUUL95ddyVOwX_PE.mp4",
      },
      {
        driveId: "1UiejyPcY5NFJwdbFJYhBIv4R8J6Yj2RT",
        poster: "/images/media-posters/commercial-ads-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382073/a-plus-aura-videos/real-estate-commercial/real-estate-commercial-02-1UiejyPcY5NFJwdbFJYhBIv4R8J6Yj2RT.mp4",
      },
      {
        driveId: "1V6sgmWXmcsP4K41oXAf8qaSIE6WUZQ9B",
        poster: "/images/media-posters/real-estate-commercial-01.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382078/a-plus-aura-videos/real-estate-commercial/real-estate-commercial-03-1V6sgmWXmcsP4K41oXAf8qaSIE6WUZQ9B.mp4",
      },
      {
        driveId: "1Fgqolwwsg3CnUfHZq0B8yFb1sc8Nuc7X",
        poster: "/images/media-posters/real-estate-commercial-02.jpg",
        videoUrl: "https://res.cloudinary.com/au2zif9s/video/upload/v1783382083/a-plus-aura-videos/real-estate-commercial/real-estate-commercial-04-1Fgqolwwsg3CnUfHZq0B8yFb1sc8Nuc7X.mp4",
      },
    ]),
  },
];
