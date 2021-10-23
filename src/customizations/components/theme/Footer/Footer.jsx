/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import { Sponsors } from '@package/components';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment role="contentinfo" vertical padded>
    <Container>
      <Sponsors />
      <Segment
        basic
        inverted
        color="grey"
        textAlign="center"
        className="discreet"
      >
        <FormattedMessage
          id="The {plonecms} is {copyright} 2000-{current_year} by the {plonefoundation} and friends."
          defaultMessage="The {plonecms} is {copyright} 2000-{current_year} by the {plonefoundation} and friends."
          values={{
            plonecms: (
              <FormattedMessage
                id="Plone{reg} Open Source CMS/WCM"
                defaultMessage="Plone{reg} Open Source CMS/WCM"
                values={{ reg: <sup>®</sup> }}
              />
            ),
            copyright: (
              <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
            ),
            current_year: new Date().getFullYear(),
            plonefoundation: (
              <a className="item" href="http://plone.org/foundation">
                <FormattedMessage
                  id="Plone Foundation"
                  defaultMessage="Plone Foundation"
                />
              </a>
            ),
          }}
        />{' '}
        <FormattedMessage
          id="Distributed under the {license}."
          defaultMessage="Distributed under the {license}."
          values={{
            license: (
              <a
                className="item"
                href="http://creativecommons.org/licenses/GPL/2.0/"
              >
                <FormattedMessage
                  id="GNU GPL license"
                  defaultMessage="GNU GPL license"
                />
              </a>
            ),
          }}
        />
      </Segment>
      <List className="siteactions" horizontal relaxed celled>
        {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
        <div role="listitem" className="item">
          <Link className="item" to="/sitemap">
            <FormattedMessage id="Site Map" defaultMessage="Site Map" />
          </Link>
        </div>
        <div role="listitem" className="item">
          <Link className="item" to="/accesibility-info">
            <FormattedMessage
              id="Accessibility"
              defaultMessage="Accessibility"
            />
          </Link>
        </div>
        <div role="listitem" className="item">
          <Link className="item" to="/contact-form">
            <FormattedMessage id="Contact" defaultMessage="Contact" />
          </Link>
        </div>
        <div role="listitem" className="item">
          <a className="item" href="https://plone.com">
            <FormattedMessage
              id="Powered by Plone & Python"
              defaultMessage="Powered by Plone & Python"
            />
          </a>
        </div>
      </List>
    </Container>
  </Segment>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
