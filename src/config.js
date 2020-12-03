/**
 * Add your config changes here.
 * @module config
 * @example
 * export const settings = {
 *   ...defaultSettings,
 *   port: 4300,
 *   listBlockTypes: {
 *     ...defaultSettings.listBlockTypes,
 *     'my-list-item',
 *   }
 * }
 */

import {
  settings as defaultSettings,
  views as defaultViews,
  widgets as defaultWidgets,
  blocks as defaultBlocks,
  addonReducers as defaultAddonReducers,
  addonRoutes as defaultAddonRoutes,
} from '@plone/volto/config';
import { TalkListView, TalkView } from './components';

export const settings = {
  ...defaultSettings,
};

export const views = {
  ...defaultViews,
  layoutViews: {
    ...defaultViews.layoutViews,
    talklist_view: TalkListView,
  },
  contentTypesViews: {
    ...defaultViews.contentTypesViews,
    talk: TalkView,
    document: {
      document_view: defaultViews.DefaultView,
      talklist_view: TalkListView,
    },
  },
};

export const widgets = {
  ...defaultWidgets,
};

export const blocks = {
  ...defaultBlocks,
};

export const addonRoutes = [...defaultAddonRoutes];
export const addonReducers = { ...defaultAddonReducers };
