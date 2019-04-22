import CMS from 'netlify-cms';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import ChallengePreview from './preview-templates/ChallengePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('challenge', ChallengePreview);
