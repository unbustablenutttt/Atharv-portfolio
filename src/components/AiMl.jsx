import '../styles/Sections.css';

export default function AiMl() {
  const tags = [
    'Computer Vision',
    'Image Processing',
    'Neural Networks',
    'Deep Learning',
    'Generative Models',
    'Visual Computing',
  ];

  return (
    <section className="aiml" id="aiml" aria-labelledby="aiml-title">
      <div className="aiml__inner">
        {/* Text side */}
        <div className="aiml__body">
          <span className="aiml__label" aria-hidden="true">Photography × Computation</span>

          <h2 className="aiml__heading" id="aiml-title">
            The image<br />
            as <em>data.</em>
          </h2>

          <p className="aiml__text">
            Alongside photography and film, Atharv studies Artificial Intelligence
            and Machine Learning — not as two separate lives, but as a single
            sustained enquiry into how machines perceive, describe and generate images.
          </p>

          <p className="aiml__text">
            This intersection does not express itself as visual gimmick.
            It lives in the way he thinks about exposure, composition, time, and
            what a photograph is — or could be — when the image becomes a computational object.
          </p>

          <div className="aiml__tags" aria-label="Areas of interest">
            {tags.map((tag) => (
              <span className="aiml__tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Decorative side */}
        <div className="aiml__decorative" aria-hidden="true">
          <span className="aiml__symbol">f(x)</span>
        </div>
      </div>
    </section>
  );
}
