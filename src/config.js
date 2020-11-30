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
} from '@plone/volto/config';
import { TalkListView, TalkView } from './components';

import React from 'react';
import createInlineStyleButton from 'draft-js-buttons/lib/utils/createInlineStyleButton';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import radiodisabledSVG from '@plone/volto/icons/radio-disabled.svg';

// Button
const DiscreetButton = createInlineStyleButton({
  style: 'DISCREET',
  children: <Icon name={radiodisabledSVG} size="24px" />,
});
let newbuttonset = defaultSettings.richTextEditorInlineToolbarButtons;
newbuttonset.splice(2, 0, DiscreetButton);

// Renderer
const customInline = {
  DISCREET: (children, { key }) => (
    <span key={key} className="discreet">
      {children}
    </span>
  ),
};

export const settings = {
  ...defaultSettings,
  richTextEditorInlineToolbarButtons: newbuttonset,
  ToHTMLRenderers: {
    ...defaultSettings.ToHTMLRenderers,
    inline: {
      ...defaultSettings.ToHTMLRenderers.inline,
      ...customInline,
    },
  },
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
  },
};

export const widgets = {
  ...defaultWidgets,
};

export const blocks = {
  ...defaultBlocks,
};

export const addonRoutes = [];
export const addonReducers = {};
