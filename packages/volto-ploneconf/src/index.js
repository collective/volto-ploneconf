import { TalkView, TalkListingBlockVariation } from './components';

const applyConfig = (config) => {
  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      talk: TalkView,
    },
  };

  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'talks',
      title: 'Talks',
      template: TalkListingBlockVariation,
    },
  ];

  return config;
};

export default applyConfig;
