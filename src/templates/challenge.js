import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ChallengeTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  difficulty,
  challenger,
  language
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{`${title}`}</h1>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <dl>
              <dt>Difficulty</dt>
              <dd>{difficulty}</dd>
              <dt>Challenger</dt>
              <dd>{challenger}</dd>
              <dt>language</dt>
              <dd>{language}</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

ChallengeTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  description: PropTypes.string,
  language: PropTypes.string,
  challenger: PropTypes.string
};

const Challenge = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ChallengeTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Challenge">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        difficulty={post.frontmatter.difficulty}
        language={post.frontmatter.language}
        challenger={post.frontmatter.challenger}
      />
    </Layout>
  );
};

Challenge.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Challenge;

export const pageQuery = graphql`
  query ChallengeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        difficulty
        language
        challenger
      }
    }
  }
`;
