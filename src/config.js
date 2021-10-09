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

import VocabularyTermsWidget from '@plone/volto/components/manage/Widgets/VocabularyTermsWidget';
import { TalkListView, TalkView } from './components';

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
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

  config.widgets.id.types_of_talk = VocabularyTermsWidget;
  config.widgets.id.audiences = VocabularyTermsWidget;
  config.widgets.id.rooms = VocabularyTermsWidget;

  return config;
}
