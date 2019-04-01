import React from 'react';
import PropTypes from 'prop-types';
import { ChallengeTemplate } from '../../templates/challenge';

const ChallengePreview = ({ entry, widgetFor }) => (
  <ChallengeTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ChallengePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ChallengePreview;
