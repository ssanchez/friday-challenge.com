import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ChallengePreview from './preview-templates/ChallengePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('blog', ChallengePreview);
