import PropTypes from 'prop-types';
import Container from '../Container';

const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
