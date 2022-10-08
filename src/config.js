/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

import { TalkListView, TalkView } from './components';

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

/**
 * app configuration
 * @param {Object} config Volto configuration
 * @returns config Object
 */
export default function applyConfig(config) {
  // config.settings = {
  //   ...config.settings,
  //   supportedLanguages: ['en', 'de'],
  //   defaultLanguage: 'de',
  // };

  config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      talk: TalkView,
    },
    layoutViews: {
      ...config.views.layoutViews,
      talklist_view: TalkListView,
    },
  };
  return config;
}
