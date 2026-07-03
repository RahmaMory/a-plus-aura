export type MediaVideo = {
  id: string;
  title: string;
  driveId: string;
};

export type MediaCategory = {
  id: string;
  title: string;
  type: "Industry" | "Format";
  videos: MediaVideo[];
  folderUrl?: string;
  fallbackImage?: string;
};

const makeVideos = (categoryId: string, driveIds: string[]): MediaVideo[] =>
  driveIds.map((driveId, index) => ({
    id: `${categoryId}-${index + 1}`,
    title: `Project ${String(index + 1).padStart(2, "0")}`,
    driveId,
  }));

export const getDrivePreviewUrl = (driveId: string) =>
  `https://drive.google.com/file/d/${driveId}/preview`;

export const getDriveViewUrl = (driveId: string) =>
  `https://drive.google.com/file/d/${driveId}/view`;

export const getDriveThumbnailUrl = (driveId: string) =>
  `https://drive.google.com/thumbnail?id=${driveId}&sz=w1200`;

export const mediaProductionCategories: MediaCategory[] = [
  {
    id: "engineering-interior",
    title: "Engineering & Interior Design",
    type: "Industry",
    videos: makeVideos("engineering-interior", [
      "1oAiC-0LobVnwqLV8FlWEheercPJs-eTK",
      "1Yc22huBceadMW9cegnHuET-YkfvMFzfW",
      "1vSJWlcV7gU82HwQ2Rqr5BroC1rGylwPT",
      "1E7nZx9mh-i4bKve4J-eJqbZat8mePn3k",
    ]),
  },

  {
    id: "promo",
    title: "Promo",
    type: "Format",
    videos: makeVideos("promo", [
      "13CS_h2uXEZZ8G3LuF07VjAqKKwu3LduU",
      "1nuHrI5DtsqUiN85vgOponex-IQHURSka",
      "1YqromUBs98t_spfhX1IeyX6S1ne6uJ3o",
      "1uaZQGKy385zF6V66zEzcrkUR9sS0dPGM",
    ]),
  },

  {
    id: "commercial-promo",
    title: "Commercial Promo",
    type: "Format",
    videos: makeVideos("commercial-promo", [
      "1TcBTqle5cPYn51syeucHcK8zYe8-MVC1",
      "1kaymVQ0WFYAgE7PTgPgCBoj8VsFhvks3",
      "1NC6VrmhSh7cjOyFybffkReuooc9t_cra",
    ]),
  },

  {
    id: "sales-reels",
    title: "Sales Reels",
    type: "Format",
    videos: makeVideos("sales-reels", [
      "1g_KektIZGPUHEppM7dQr9Nx7_SpTT85n",
      "1dcFkrKmuj8SXBLAXrFMmfEIUvVup-53q",
    ]),
  },

  {
    id: "interior",
    title: "Interior",
    type: "Industry",
    videos: makeVideos("interior", [
      "14Fx8iIXgijQ332wm21fI2Om3scm5qARc",
      "1wcA6OiBeXWjeLX9gkirLaAbBQlPp4yUS",
    ]),
  },

  {
    id: "education",
    title: "Education",
    type: "Industry",
    videos: makeVideos("education", [
      "1pP2oeNgfamIfWVNo9qIDuHvFfmWhLY0d",
      "1-E04nFkZHSZa-vmg7nQRdX0lT1U9LayV",
      "15I9boFn43GimvIBgY1nNXNGOVVaBFsao",
      "1ASQcbN2aEGW7Jz_i6LVuhZ6p1R70V9Xg",
      "1YMIoySRDHBrt6SHyHdwJAmqVuti9Us97",
    ]),
  },

  {
    id: "real-estate",
    title: "Real Estate",
    type: "Industry",
    videos: makeVideos("real-estate", [
      "190IY1qBTzrpsImPyiv1buRWXF2gY7cHY",
      "1VTllnJhDzZdAO-Pj-Jw4C_4ggrfo7khG",
    ]),
  },

  {
    id: "motion-edits",
    title: "Motion Edits",
    type: "Format",
    videos: makeVideos("motion-edits", [
      "1A_uUt6HjFznc1zKV7l4OIZVcb8_V3B8c",
      "1kdoOJHHzggj_SZ1Xpr0JotSvzEkrqiej",
      "1ujoW9jwk-1yWFiCB7kv5Tc-_-DC0jQ-R",
      "1MOn0iP64kCJLnO_MGiwDft2rWbXXkS-_",
    ]),
  },

  {
    id: "commercial-ads",
    title: "Commercial Ads",
    type: "Format",
    videos: makeVideos("commercial-ads", [
      "1o-VkG-FGQY0DDC_4XUUL95ddyVOwX_PE",
      "1UiejyPcY5NFJwdbFJYhBIv4R8J6Yj2RT",
    ]),
  },

  {
    id: "real-estate-commercial",
    title: "Big Commercial Promos — Real Estate",
    type: "Industry",
    videos: makeVideos("real-estate-commercial", [
      "1V6sgmWXmcsP4K41oXAf8qaSIE6WUZQ9B",
      "1Fgqolwwsg3CnUfHZq0B8yFb1sc8Nuc7X",
    ]),
  },
];